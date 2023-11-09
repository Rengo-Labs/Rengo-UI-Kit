import React from 'react'
import {CoinCardWrapped, CoinCardFooter, InputWrapped, ButtonWrapped} from './styles'
import {Header, Button, Input, TextIconTouchable} from '../../atoms'
import {Type, Status} from '../../atoms/Input/types'
import BigNumber from "bignumber.js";

export interface CoinCardPros {
  startIcon: string,
  endIcon: string,
  iconSize?: any,
  title: string,
  tokenBalance: string,
  tokenName: string,
  tokenPrice: string,
  placeholder: string,
  value: string | number,
  onChangeToken: any,
  onChangeValue: any,
  validator?: any,
  gasFee?: number,
  disabled?: boolean
}

/***
 *
 * @param startIcon - it shows the selected token icon currently
 * @param endIcon - it shows the arrow icon to show a token list to be selected
 * @param iconSize
 * @param title - Text
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
export const CoinCard = ({startIcon, endIcon, iconSize, title, tokenBalance, tokenName, tokenPrice, placeholder, onChangeToken, onChangeValue, validator, value, gasFee, disabled}: CoinCardPros) => {

  const onHalfButton = () => {
    onChangeValue(BigNumber(tokenBalance).div(2).toString())
  }

  const onMaxButton = () => {
    const maxBalance = tokenName === 'CSPR' && gasFee ? BigNumber(tokenBalance).minus(gasFee) : BigNumber(tokenBalance)

    onChangeValue(maxBalance.toString())
  }

  return (
    <CoinCardWrapped id={title}>
      <Header text={title} balance={tokenBalance}/>
      <InputWrapped>
        <Input
          placeholder={placeholder}
          helperText=''
          label=''
          status={Status.Default}
          type={Type.Text}
          rightAdornment={''}
          Icon={
            <TextIconTouchable
              startIcon={startIcon}
              name={tokenName}
              endIcon={endIcon}
              actionCallBack={onChangeToken}
              background='transparent'
              isUpperCase={false}
            />
          }
          value={value}
          iconSize={iconSize}
          onChange={onChangeValue}
          validator={validator}
          hasBackground={true}
          iconWrapperBackground='transparent'
          disabled={disabled}
        />
      </InputWrapped>
      <CoinCardFooter>
        <ButtonWrapped left={true}>$ {tokenPrice}</ButtonWrapped>
        { !disabled &&
          <ButtonWrapped left={false}>
            <Button type="small" props={{ onClick: () => onHalfButton()}}>Half</Button>
            <Button type="small" props={{ onClick: () => onMaxButton()}}>Max</Button>
          </ButtonWrapped>
        }
      </CoinCardFooter>
    </CoinCardWrapped>
  )
}
