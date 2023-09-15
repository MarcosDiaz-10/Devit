import { type NextFont } from 'next/dist/compiled/@next/font'
import type style from '../styles/stylesHomePage.module.css'

export interface PropsTypes {
  children?: React.ReactNode
  onClick?: () => void
  classNameStyle?: string
  propsForSvg?: React.SVGProps<SVGSVGElement>
  disabled?: boolean
  params?: {
    id: string
  }
}

export interface fonts {
  baseFont: NextFont
}

type color = `#${string}`

export interface colors {
  primary: color
  secundary?: color
}

export interface FirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
  measurementId: string
}

export type Styles = typeof style

export interface ProfileAdditionalUserInfoType {
  avatar_url: string
  blog: string
  company: string
  created_at: string
  email: string
  events_url: string
  followers_url: string
  followers: number
  following_url: string
  following: number
  gists_url: string
  gravatar_id: string
  hireable: string
  html_url: string
  id: number
  location: string
  login: string
  name: string
  node_id: string
  organizations_url: string
  public_gists: number
  public_repos: number
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  twitter_username: string
  type: string
  updated_at: string
  url: string
}

export interface UserStateType {
  uid: string
  username: string
  avatar: string
  email: string
  isLoading?: boolean

}

export interface ImagePropsType {
  src?: string
  alt?: string
  quality?: number

}

export interface ImageComponentPropsType {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  text?: string
  withText?: boolean
  onClick?: () => void
}

export interface UserFirebaseStateType {
  uid: string
  avatar: string
  email: string
  username: string
  isLoading: boolean
}

export type ReturnsComponentFunction = JSX.Element

export interface ImageURLUploadStateType {
  refName: string
  url: string
  progress: number
}
export interface DevitType {
  userId: string
  avatar: string
  content: string
  username: string
  status?: 'loading' | 'success' | 'error' | 'user_not_know'
  createAt?: number
  id: string
  sharedCount?: number
  likesCount?: number
  img: ImageURLUploadStateType[]
  usersLike?: string[]
  usersComments?: DevitType[]
  commentsCount?: number
}

export interface ParamsType {
  params: {
    id: string
  }
}

export interface TimeagoPropsType extends DevitType {
  classNameTime: string
  classNameLink: string
  timestamp: number

}

export interface ImageViewerPropsType {
  imgURL: ImageURLUploadStateType[]
  handleDeleteFile?: (url: string, imgURL: ImageURLUploadStateType[]) => void
  uploadingImage?: boolean
  ifAdd?: boolean
}

export interface ImageDisplayPropsType {
  imgURL: string
  handleDeleteFile?: () => void
  uploadingImage?: boolean
  progress: number
}
