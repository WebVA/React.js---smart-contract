export declare interface ITradeHistoryData {
    id?: number;
    date?: string;
    pair?: string;
    side?: number;
    pprice?: number;
    executed?: number;
    fee?: number;
    total?: number;
};
export declare interface IOpenOrdersData {
    id?: number;
    date?: string;
    pair?: string;
    type?: string;
    side?: number;
    price?: number;
    amount?: number;
    filled?: number;
    total?: number;
    triggerConditions?: string;
};
export declare interface IDepositWithdrawHistoryData {
    id?: number;
    date?: string;
    curType?: string;
    transType?: number;
    method?: string;
    userId?: number;
    address?: number;
    amount?: number;
    fee?: number;
    total?: number;
    confirmed?: string;
    status?: string;
};