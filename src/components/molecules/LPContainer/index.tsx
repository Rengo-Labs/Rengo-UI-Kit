import React from 'react'
import {LiquidityWrapped, LiquidityTitle} from './styles'
import {LPOptionType} from './types'
import {HorizontalCard} from '../../atoms'
export interface LPToken {
  contractPackage: string,
  firstTokenIcon: any,
  secondTokenIcon: any,
  isFavorite: boolean,
  firstSymbol: string,
  secondSymbol: string,
  firstAmount: string,
  secondAmount: string,
  userLP: string,
  totalLP: string,
  yourShare: string,
  onOptionClick: (action: string, firstSymbol: string, secondSymbol: string) => any
}

export interface LPContainerPros {
  networkLink: string,
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
export const LPContainer = ({ networkLink, title, lpTokens = [] } : LPContainerPros) => {


  return (
    <LiquidityWrapped>
      <LiquidityTitle>{title}</LiquidityTitle>
      {
        lpTokens.length > 0 &&
        lpTokens.map((item, index) => {
          return <HorizontalCard
            networkLink={networkLink}
            contractPackage={item.contractPackage}
            key={`lp-token-${index}-card-${item.firstSymbol}-${item.secondSymbol}`}
            firstTokenIcon={item.firstTokenIcon}
            secondTokenIcon={item.secondTokenIcon}
            hasFavorite={item.isFavorite}
            tokenPairs={[item.firstSymbol, item.secondSymbol]}
            pairsLiquidity={[
              { name: `Your Pooled (${item.firstSymbol})`, value: `${item.firstAmount}` },
              { name: `Your Pooled (${item.secondSymbol})`, value: `${item.secondAmount}` },
              { name: `Your Balance (${item.firstSymbol}-${item.secondSymbol})`, value: `${item.totalLP}` },
              { name: "Your Share", value: `${item.yourShare}%`}
            ]}
            userPoolInfo={[{title: "Total Liquidity ($)", value: `${item.totalLP}`}, {title: "Your Liquidity ($)", value: `${item.userLP}`}]}
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
