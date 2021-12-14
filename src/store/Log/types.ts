interface logState {
  userLogHistoryLists: userLogHistoryState[];
  totalCount: number;
  success: boolean;
  error: string;
  // tradeLogHistoryLists: tradeLogHistoryState[];
}

export type { logState };
