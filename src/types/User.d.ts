export declare interface IUserData {
  id?: number
  userName?: string
  email?: string
  realName?: string
  phone?: string
  status?: boolean
  role?: number
  emailVerified?: boolean
  phoneVerified?: boolean
}
export declare interface ISignInLogData {
  id?: number
  userName?: string
  typeOf?: string
  content?: string
  operatingIP?: string
  status?: boolean
}
export declare interface IAdminData {
  id?: number
  adminName?: string
  email?: string
  realName?: string
  phone?: string
  status?: boolean
  role?: number
  emailVerified?: boolean
  phoneVerified?: boolean
}
export declare interface IPermissionData {
  id?: number
  name?: string
  description?: string
  status?: boolean
}

export declare interface ChatUserInfo {
  UserId: number
  Email: string
  LastMsg: string
  LastMsgTime: string
  UnreadMsgCnt: number
}
