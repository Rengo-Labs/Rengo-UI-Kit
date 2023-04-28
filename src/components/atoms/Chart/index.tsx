import React from 'react'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
interface ChartProps {
    data: any
    width?: number
    height?: number
    twoColors?: boolean
    xAxisName: string
    chart0Name: string
    chart1Name?: string
    showChart0?: boolean
    showChart1?: boolean
}

export const Chart = ({
                          data,
                          width = 500,
                          height = 300,
                          twoColors,
                          xAxisName,
                          chart0Name,
                          chart1Name,
                          showChart0,
                          showChart1
                      }: ChartProps) => {
    console.log('data', data, xAxisName,
        chart0Name,
        chart1Name,)
    return (
        <AreaChart
            width={width}
            height={height}
            data={data}
            margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            }}
        >
            {/*<CartesianGrid strokeDasharray='3 3'/>*/}
            <XAxis dataKey={xAxisName}/>
            <YAxis orientation='right'/>
            <Tooltip/>
            {showChart0 && (
                <Area
                    type='monotone'
                    dataKey={chart0Name}
                    stackId='1'
                    stroke='#715FF5'
                    fill='#715FF5'
                />
            )}
            {showChart1 && chart1Name && twoColors && (
                <Area
                    type='monotone'
                    dataKey={chart1Name}
                    stackId='1'
                    stroke='#3DCBAD'
                    fill='#3DCBAD'
                />
            )}
        </AreaChart>
    )
}
