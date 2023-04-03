import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

const data = [
  {
    name: '01/23',
    eth: 867,
    cspr: 1245,
  },
  {
    name: '02/23',
    eth: 1000,
    cspr: 1398,
  },
  {
    name: '03/23',
    eth: 1010,
    cspr: 1410,
  },
  {
    name: '04/23',
    eth: 1345,
    cspr: 2035,
  },
  {
    name: '05/23',
    eth: 867,
    cspr: 1980,
  },
  {
    name: '06/23',
    eth: 950,
    cspr: 2010,
  },
  {
    name: '07/23',
    eth: 650,
    cspr: 2670,
  }
]

export const Chart = () => {
  return (
      <AreaChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='eth'
          stackId='1'
          stroke='#715FF5'
          fill='#715FF5'
        />
        <Area
          type='monotone'
          dataKey='cspr'
          stackId='1'
          stroke='#3DCBAD'
          fill='#3DCBAD'
        />
      </AreaChart>
  )
}
