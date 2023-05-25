import React, {useState} from 'react'
import {Area, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, BarChart, Bar} from 'recharts'
import {CHART_VIEW, timeframeOptions, getTimeframe, toK, toNiceDate, toNiceDateYear, formattedNum} from '../../../utils'
import {ChartWrapper, OptionsRow, EmptyCard, AutoRow, OptionButton, AutoRowJustify} from './styles'
import {useTheme} from "styled-components";
import {useDeviceType} from "../../../hooks";
import {DeviceType} from "../../../hooks/types";

export interface ChartV2Props {
    data: any
    width?: number
    height?: number
    chart0Name?: string
    chart1Name?: string
    showChart0?: boolean
    showChart1?: boolean
}
export const ChartV2 = ({data, height = 300, showChart0}: ChartV2Props) => {
    const [chartFilter, setChartFilter] = useState(CHART_VIEW.LIQUIDITY)
    const [timeWindow, setTimeWindow] = useState(timeframeOptions.MONTH)
    const theme = useTheme()
    const deviceType = useDeviceType()
    const isMobile = deviceType === DeviceType.MOBILE
    const isTablet = deviceType === DeviceType.TABLET
    const aspect = isMobile ?  60 / 22 : isTablet ? 60 / 28 : 60 / 26

    // @ts-ignore
    const color = showChart0 ? theme.defaultColor : theme.color.chart.secondary
    // @ts-ignore
    const textColor = theme.color.chart.textColor
    // @ts-ignore
    const background = theme.color.chart.background

    let utcStartTime = getTimeframe(timeWindow)
    const chartData = data?.filter((entry: { date: number; }) => entry.date >= utcStartTime)

    if (chartData && chartData.length === 0) {
        return (
            <ChartWrapper>
                <EmptyCard>No historical data yet.</EmptyCard>{' '}
            </ChartWrapper>
        )
    }
    return (
        <ChartWrapper>
            <OptionsRow>
                <AutoRow>
                    <OptionButton
                        active={chartFilter === CHART_VIEW.LIQUIDITY}
                        onClick={() => {
                            setTimeWindow(timeframeOptions.ALL_TIME)
                            setChartFilter(CHART_VIEW.LIQUIDITY)
                        }}>
                        Liquidity
                    </OptionButton>
                    <OptionButton
                        active={chartFilter === CHART_VIEW.VOLUME}
                        onClick={() => {
                            setTimeWindow(timeframeOptions.ALL_TIME)
                            setChartFilter(CHART_VIEW.VOLUME)
                        }}>
                        Volume
                    </OptionButton>
                </AutoRow>
                <AutoRowJustify>
                    <OptionButton
                        active={timeWindow === timeframeOptions.WEEK}
                        onClick={() => setTimeWindow(timeframeOptions.WEEK)}
                    >1W</OptionButton>
                    <OptionButton
                        active={timeWindow === timeframeOptions.MONTH}
                        onClick={() => setTimeWindow(timeframeOptions.MONTH)}
                    >1M</OptionButton>
                    <OptionButton
                        active={timeWindow === timeframeOptions.ALL_TIME}
                        onClick={() => setTimeWindow(timeframeOptions.ALL_TIME)}
                    >All</OptionButton>
                </AutoRowJustify>
            </OptionsRow>
            {chartFilter === CHART_VIEW.LIQUIDITY && (
                <ResponsiveContainer aspect={aspect} maxHeight={height} key={`rc_${data.chartData}`}>
                    <AreaChart margin={{top: 0, right: 10, bottom: 6, left: 0}} barCategoryGap={1} data={chartData} key={`a_${data.chartData}`}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={color} stopOpacity={0.35}/>
                                <stop offset="95%" stopColor={color} stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis
                            tickLine={false}
                            axisLine={false}
                            interval="preserveEnd"
                            tickMargin={14}
                            minTickGap={80}
                            tickFormatter={(tick) => toNiceDate(tick)}
                            dataKey="date"
                            tick={{fill: textColor}}
                            type={'number'}
                            domain={['dataMin', 'dataMax']}
                        />
                        <YAxis
                            type="number"
                            orientation="right"
                            tickFormatter={(tick) => '$' + toK(tick)}
                            axisLine={false}
                            tickLine={false}
                            interval="preserveEnd"
                            minTickGap={80}
                            yAxisId={0}
                            tickMargin={16}
                            tick={{fill: textColor}}
                        />
                        <Tooltip
                            cursor={true}
                            formatter={(val) => formattedNum(val, true)}
                            labelFormatter={(label) => toNiceDateYear(label)}
                            labelStyle={{paddingTop: 4}}
                            contentStyle={{
                                padding: '10px 14px',
                                borderRadius: 10,
                                borderColor: color,
                                color: 'black',
                                backgroundColor: background
                            }}
                            wrapperStyle={{top: -70, left: -10}}
                        />
                        <Area
                            key={`ar_${data.chartData}`}
                            stackId="2"
                            strokeWidth={2}
                            dot={false}
                            type="monotone"
                            name={'Liquidity'}
                            dataKey={'totalLiquidityUSDValue'}
                            yAxisId={0}
                            stroke={color}
                            fill="url(#colorUv)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            )}

            {chartFilter === CHART_VIEW.VOLUME && (
                <ResponsiveContainer aspect={aspect} maxHeight={height}>
                    <BarChart
                        margin={{ top: 0, right: 0, bottom: 6, left: false ? 0 : 10 }}
                        barCategoryGap={1}
                        data={chartData}
                    >
                        <XAxis
                            tickLine={false}
                            axisLine={false}
                            interval="preserveEnd"
                            minTickGap={80}
                            tickMargin={14}
                            tickFormatter={(tick) => toNiceDate(tick)}
                            dataKey="date"
                            tick={{ fill: textColor }}
                            type={'number'}
                            domain={['dataMin', 'dataMax']}
                        />
                        <YAxis
                            type="number"
                            axisLine={false}
                            tickMargin={16}
                            tickFormatter={(tick) => '$' + toK(tick)}
                            tickLine={false}
                            interval="preserveEnd"
                            orientation="right"
                            minTickGap={80}
                            yAxisId={0}
                            tick={{ fill: textColor }}
                        />
                        <Tooltip
                            cursor={{ fill: color, opacity: 0.1 }}
                            formatter={(val) => formattedNum(val, true)}
                            labelFormatter={(label) => toNiceDateYear(label)}
                            labelStyle={{ paddingTop: 4 }}
                            contentStyle={{
                                padding: '10px 14px',
                                borderRadius: 10,
                                borderColor: color,
                                color: 'black',
                                backgroundColor: background
                            }}
                            wrapperStyle={{ top: -70, left: -10 }}
                        />
                        <Bar
                            type="monotone"
                            name={'Volume'}
                            dataKey={'dailyVolumeUSDValue'}
                            fill={color}
                            opacity={'0.4'}
                            yAxisId={0}
                            stroke={color}
                        />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </ChartWrapper>
    )
}
