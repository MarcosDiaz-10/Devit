// import serviceAccount from './firebaseKeys.json'
import admin from 'firebase-admin'

let app

const credential = JSON.parse(process.env.FIREBASE_CREDENTIAL ?? '{}')

if (admin.apps.length === 0) {
  app = admin.initializeApp({
    credential: admin.credential.cert(credential)

  })
} else {
  app = admin.app()
}

export const firestore = app.firestore()
