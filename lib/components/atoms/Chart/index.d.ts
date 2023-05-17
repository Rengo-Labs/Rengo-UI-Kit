import React from 'react';
interface ChartProps {
    data: any;
    width?: number;
    height?: number;
    twoColors?: boolean;
    xAxisName: string;
    chart0Name: string;
    chart1Name?: string;
    showChart0?: boolean;
    showChart1?: boolean;
}
export declare const Chart: ({ data, width, height, twoColors, xAxisName, chart0Name, chart1Name, showChart0, showChart1, }: ChartProps) => React.JSX.Element;
export {};
