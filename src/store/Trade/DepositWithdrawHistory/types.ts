import { IDepositWithdrawHistoryData } from '../../../types/Trade';
interface depositWithdrawHistoryState {
  depositWithdrawHistoryList: IDepositWithdrawHistoryData[]
  status: number
  rowsCount: number
}

export type { depositWithdrawHistoryState };
