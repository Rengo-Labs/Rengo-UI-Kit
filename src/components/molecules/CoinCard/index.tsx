import React from 'react'
import {CoinCardWrapped, CoinCardFooter, InputWrapped} from './styles'
import {Header, Button, Input, ButtonIcon} from '../../atoms'
import {Type, Status} from '../../atoms/Input/types'

export interface CoinCardPros {
  startIcon: string,
  endIcon: string,
  iconSize?: any,
  tokenBalance: string,
  tokenName: string,
  tokenPrice: string,
  placeholder: string,
  value: any,
  onChangeToken: any,
  onChangeValue: any,
  validator?: any
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
export const CoinCard = ({startIcon, endIcon, iconSize, tokenBalance, tokenName, tokenPrice, placeholder, onChangeToken, onChangeValue, validator, value}: CoinCardPros) => {

  const onHalfButton = () => {
    onChangeValue(parseFloat(tokenBalance)/2)
  }

  const onMaxButton = () => {
    onChangeValue(parseFloat(tokenBalance))
  }

  return (
    <CoinCardWrapped>
      <Header text="From" balance={tokenBalance}/>
      <Input
        placeholder={placeholder}
        helperText=''
        label=''
        status={Status.Success}
        type={Type.IconLabelHelperText}
        rightAdornment={''}
        Icon={
          <ButtonIcon
            startIcon={startIcon}
            name={tokenName}
            endIcon={endIcon}
            actionCallBack={onChangeToken}
          />
        }
        value={value}
        iconSize={iconSize}
        onChange={onChangeValue}
        validator={validator}
      />
      <CoinCardFooter>
        <InputWrapped left={true}>$ {tokenPrice}</InputWrapped>
        <InputWrapped left={false}>
          <Button type="small" props={{ onClick: () => onHalfButton()}}>Half</Button>
          <Button type="small" props={{ onClick: () => onMaxButton()}}>Max</Button>
        </InputWrapped>
      </CoinCardFooter>
    </CoinCardWrapped>
  )
}