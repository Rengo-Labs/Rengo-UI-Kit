import React from 'react'
import {LiquidityWrapped, LiquidityTitle} from './styles'
import {LPOptionType} from './types'
import {HorizontalCard} from '../../atoms'
import { v4 as uuidv4 } from 'uuid';

export interface LPToken {
  icon: any,
  isFavorite: boolean,
  firstSymbol: string,
  secondSymbol: string,
  firstAmount: string,
  secondAmount: string,
  userLP: string,
  totalLP: string,
  onOptionClick: (action: string, firstSymbol: string, secondSymbol: string) => any
}

export interface LPContainerPros {
  title: string,
  lpTokens: LPToken[],
}

/***
 *
 * @param startIcon - it shows the selected token icon currently
 * @param endIcon - it shows the arrow icon to show a token list to be selected
 * @param iconSize
 * @param tokenBalance - it's the total balance of the selected token.
 * @param tokenName - it's the token name of the selected token.
 * @param tokenPrice - it's the token price expressed in usd.
 * @param placeholder - it's the label value which is shown in the input
 * @param onChangeToken - Token selector's listener
 * @param onChangeValue - Card value's listener
 * @param validator - it's a validator of this token input
 * @param value - value which will be loaded in the card input
 * @constructor
 */
export const LPContainer = ({ title, lpTokens = [] } : LPContainerPros) => {

  const getPercentage = (userLiquidity: string, totalLiquidity: string) => {
    return (100 * (parseFloat(userLiquidity) / parseFloat(totalLiquidity))).toFixed(2)
  }

  return (
    <LiquidityWrapped>
      <LiquidityTitle>{title}</LiquidityTitle>
      {
        lpTokens.length > 0 &&
        lpTokens.map(item => {
          return <HorizontalCard
            key={`lp-token-${uuidv4()}`}
            icon={item.icon}
            hasFavorite={item.isFavorite}
            tokenPairs={[item.firstSymbol, item.secondSymbol]}
            pairsLiquidity={[
              { name: `Pooled (${item.firstSymbol})`, value: `${item.firstAmount} ${item.firstSymbol}` },
              { name: `Pooled (${item.secondSymbol})`, value: `${item.secondAmount} ${item.secondSymbol}` }
            ]}
            userPoolInfo={[`${item.userLP} LP`, `${getPercentage(item.userLP, item.totalLP)} %`]}
            trashHandler={() => item.onOptionClick(LPOptionType.DELETE, item.firstSymbol, item.secondSymbol)}
            swapHandler={() => item.onOptionClick(LPOptionType.SWAP, item.firstSymbol, item.secondSymbol)}
            viewHandler={() => item.onOptionClick(LPOptionType.VIEW, item.firstSymbol, item.secondSymbol)}
            addLiquidityHandler={() => item.onOptionClick(LPOptionType.ADD_LIQUIDITY, item.firstSymbol, item.secondSymbol)}
            favoriteHandler={() => {}}
          />
        })
      }
    </LiquidityWrapped>
  )
}
