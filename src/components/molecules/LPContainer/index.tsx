import React, {useState} from 'react'
import {LiquidityWrapped, LiquidityTitle, TitleWrapped} from './styles'
import {LPOptionType} from './types'
import {HorizontalCard, Toggle} from '../../atoms'
import { Variant } from '../../atoms/Toggle/types'

export interface LPToken {
  contractPackage: string,
  firstTokenIcon: any,
  secondTokenIcon: any,
  isFavorite: boolean,
  firstSymbol: string,
  secondSymbol: string,
  firstAmount: string,
  secondAmount: string,
  userUSDLP: string,
  userLP: string,
  totalUSDLP: string,
  totalLP: string,
  yourShare: string,
  apr: string,
  onOptionClick: (action: string, firstSymbol: string, secondSymbol: string) => any
  hasStake: boolean
}

export interface LPContainerPros {
  networkLink: string,
  title: string,
  lpTokens: LPToken[],
  toggleActive: boolean,
  toggleAction: any
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
export const LPContainer = ({ networkLink, title, lpTokens = [], toggleActive = false, toggleAction = () => {} } : LPContainerPros) => {

  const [actionsDialogActive, setActionsDialogActive] = useState<string | null>()
  const toggleDialog = (name: string) => {
    setActionsDialogActive((prev) => (prev === name ? null : name))
  }

  return (
    <LiquidityWrapped>
      <TitleWrapped>
        <LiquidityTitle>{title}</LiquidityTitle>
        <div>
          <Toggle variant={Variant.InvertedColors} labelText='Staked' isActive={toggleActive} toggle={() => toggleAction()}/>
        </div>
      </TitleWrapped>
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
              { name: `Your Balance (${item.firstSymbol}-${item.secondSymbol})`, value: `${item.userLP}` },
              { name: "Your Share", value: `${item.yourShare}%`},
              { name: "APR", value: `${item.apr}`}
            ]}
            userPoolInfo={[{title: "Total Liquidity ($)", value: `${item.totalUSDLP}`}, {title: "Your Liquidity ($)", value: `${item.userUSDLP}`}]}
            trashHandler={() => item.onOptionClick(LPOptionType.DELETE, item.firstSymbol, item.secondSymbol)}
            swapHandler={() => item.onOptionClick(LPOptionType.SWAP, item.firstSymbol, item.secondSymbol)}
            viewHandler={() => item.onOptionClick(LPOptionType.VIEW, item.firstSymbol, item.secondSymbol)}
            stakeHandler={() => item.onOptionClick(LPOptionType.STAKE, item.firstSymbol, item.secondSymbol)}
            unstakeHandler={() => item.onOptionClick(LPOptionType.UNSTAKE, item.firstSymbol, item.secondSymbol)}
            claimHandler={() => item.onOptionClick(LPOptionType.CLAIM, item.firstSymbol, item.secondSymbol)}
            hasStake={item.hasStake}
            addLiquidityHandler={() => item.onOptionClick(LPOptionType.ADD_LIQUIDITY, item.firstSymbol, item.secondSymbol)}
            favoriteHandler={() => {}}
            toggleDialog={() => toggleDialog(`${item.firstSymbol}-${item.secondSymbol}`)}
            actionsDialogActive={actionsDialogActive === `${item.firstSymbol}-${item.secondSymbol}`}
          />
        })
      }
    </LiquidityWrapped>
  )
}
