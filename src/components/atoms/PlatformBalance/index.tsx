import React, { useState } from 'react'
import {PlatformBalanceProps} from './types'
import {WrappedPlatformBalance} from './styles'

export const PlatformBalance = ({title, value, paddingTop}: PlatformBalanceProps) => {

  return (
    <WrappedPlatformBalance paddingTop={paddingTop}>{title} {value}</WrappedPlatformBalance>
  )
}