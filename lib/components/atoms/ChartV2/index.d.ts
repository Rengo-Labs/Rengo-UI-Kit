import React from 'react';
export interface ChartV2Props {
    data: any;
    width?: number;
    height?: number;
    chart0Name?: string;
    chart1Name?: string;
    showChart0?: boolean;
    showChart1?: boolean;
}
export declare const ChartV2: ({ data, height, showChart0 }: ChartV2Props) => React.JSX.Element;
