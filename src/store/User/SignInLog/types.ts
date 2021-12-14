import { ISignInLogData } from '../../../types/User';
interface signInLogsState {
  signInLogList: ISignInLogData[]
  status: number
  rowsCount: number
}

export type { signInLogsState };
