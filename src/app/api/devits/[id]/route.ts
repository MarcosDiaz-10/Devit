import { type DevitType, type ParamsType } from '@types'
import { firestore } from '@firebaseAdmin'
import { NextResponse } from 'next/server'
export async function GET (req: Request, { params }: ParamsType) {
  const { id } = params

  try {
    const doc = await firestore.collection('devits').doc(id).get()
    const data = doc.data()
    const idDoc = doc.id

    const { createAt, usersComments } = data

    let usersCommentsData: DevitType[] = []

    if (usersComments.length > 0) {
      usersCommentsData = usersComments.map((devit: any) => {
        const { createAt } = devit

        if (typeof createAt === 'number') {
          return {
            ...devit
          }
        }

        if (typeof createAt === 'object') {
          return {
            ...devit,
            createAt: +createAt.toDate()
          }
        }

        return devit
      })
    }

    const devit = {
      ...data,
      id: idDoc,
      createAt: +createAt.toDate(),
      usersComments: usersCommentsData
    }

    return NextResponse.json(devit, { status: 200, headers: { 'Content-Type': 'application/json' } })
  } catch (error) {
    return NextResponse.json({ error: 'El documento no existe' }, { status: 404, headers: { 'Content-Type': 'application/json' } })
  }
}
