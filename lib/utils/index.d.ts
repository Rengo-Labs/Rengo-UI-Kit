export declare const convertNumber: (number: number) => string;
export declare const CHART_VIEW: {
    VOLUME: string;
    LIQUIDITY: string;
    RATE0: string;
    RATE1: string;
};
export declare const timeframeOptions: {
    WEEK: string;
    MONTH: string;
    HALF_YEAR: string;
    ALL_TIME: string;
};
export declare const toNiceDate: (date: number) => string;
export declare const toK: (num: any) => any;
export declare const toNiceDateYear: (date: number) => string;
export declare const formatDollarAmount: (num: number | bigint, digits: number) => string;
export declare const getTimeframe: (timeWindow: any) => number;
export declare const formattedNum: (number: any, usd?: boolean, acceptNegatives?: boolean) => string | 0;
