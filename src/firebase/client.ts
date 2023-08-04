import type { UserFirebaseStateType, FirebaseConfig, ProfileAdditionalUserInfoType, UserStateType } from '@/helpers/types'
import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig: FirebaseConfig = {
  apiKey: 'AIzaSyA77XMbBTkz5-eu3t3304ZZGQwF5AraJzk',
  authDomain: 'devter-75940.firebaseapp.com',
  projectId: 'devter-75940',
  storageBucket: 'devter-75940.appspot.com',
  messagingSenderId: '39277873938',
  appId: '1:39277873938:web:221bf60366afb4e17581cb',
  measurementId: 'G-TB996FMEGB'
}

firebase.initializeApp(firebaseConfig)

type FirebaseUserCredentialType = firebase.auth.UserCredential
type FirebaseUserType = firebase.User
type FirebaseUserAuth = FirebaseUserCredentialType | FirebaseUserType
type mapUserFromFirebaseAuthToUserType = UserFirebaseStateType | null

function checkFirebaseUserCredential (user: FirebaseUserAuth): user is FirebaseUserCredentialType {
  return (user as FirebaseUserCredentialType).additionalUserInfo !== undefined
}

const mapUserFromFirebaseAuthToUser = (user: FirebaseUserAuth): mapUserFromFirebaseAuthToUserType => {
  if (!checkFirebaseUserCredential(user)) {
    if (user === null) {
      return null
    }

    const { displayName, photoURL, email } = user

    const emailSplit = email?.split('@', 1).join('')

    return {
      avatar: photoURL ?? '',
      username: displayName ?? emailSplit ?? '',
      email: email ?? '',
      isLoading: false

    }
  }

  const { additionalUserInfo } = user

  if (additionalUserInfo == null) {
    return null
  }

  const { username, profile } = additionalUserInfo

  if ((profile === null) || username === null) {
    return null
  }

  const { avatar_url: avatarUrl, email } = profile as ProfileAdditionalUserInfoType

  return {
    avatar: avatarUrl ?? '',
    username: username === '' ? email ?? '' : username ?? '',
    email: email ?? '',
    isLoading: false
  }
}

export const OnAuthStateChanged = (onChange: (normalizedUser: UserStateType) => void): firebase.Unsubscribe => {
  return firebase.auth().onAuthStateChanged(user => {
    if (user === null) return

    const normalizedUser = mapUserFromFirebaseAuthToUser(user)

    if (normalizedUser === null) return

    onChange(normalizedUser)
  })
}

export const loginWithGithub = async () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()

  return await firebase
    .auth()
    .signInWithPopup(githubProvider)
}
