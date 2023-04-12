import React, { useEffect, useRef, useState } from 'react'
import {
  BalanceSectionTitle,
  BottomContainer,
  Container,
  InnerContainer,
  PopularTokens,
  PopularTokensItem,
  PopularTokensItemsContainer,
  SearchInputContainer,
  SectionTitle,
  TokenListContainer,
  TokenNotFoundText,
  ViewTokenListTitle } from './styles'
import { Dialog } from '../../atoms/Dialog'
import { Icons, Input, TransactionDetails } from '../../atoms'
import { IconSize, Status, Type } from '../../atoms/Input/types'
import { IconSize as transactionDetailsIconSize } from '../../atoms/TransactionDetails/types'
import { Search } from 'react-feather'
import { theme } from '../../../styles/themes/themes'
import { Distribution } from '../../atoms/TransactionDetails/types'
import btcTokenIcon from "../../../assets/icons/bitcoin-token.svg";
import ethTokenIcon from "../../../assets/icons/eth-token.svg";
import cstTokenIcon from "../../../assets/icons/casper-token.svg";
import usdtTokenIcon from "../../../assets/icons/tether-token.svg";
import usdcTokenIcon from "../../../assets/icons/usdc-token.svg";
import { useTheme } from 'styled-components'
import { RowIcon } from '../../atoms/RowIcon'
import { CreatePoolDialogProps, TokenData } from './types'

const TOKEN_ICONS = new Map([
  ['CST', cstTokenIcon],
  ['WBTC', btcTokenIcon],
  ['USDT', usdtTokenIcon],
  ['USDC', usdcTokenIcon],
  ['WETH', ethTokenIcon],
])

/**
  React component for creating a pool dialog.
  @param {Object} props - The props object.
  @param {Function} props.closeCallback - The callback function to close the dialog.
  @param {boolean} props.showDialog - A boolean to determine if the dialog should be shown.
  @param {Array} props.tokenListData - An array of TokenData objects containing information about the tokens in the pool. This is an array item example { id: '3d3dfimfw33', name: 'CST', fullName: 'CasperSwap', amount: '1000000' },
  @param {Array} props.popularTokensData - An array of TokenData objects containing information about the popular tokens. The item is similar as the tokenListData item 
  @returns {JSX.Element} - The create pool dialog component.
*/

export const CreatePoolDialog = ({ 
  closeCallback,
  showDialog,
  tokenListData,
  popularTokensData
 }: CreatePoolDialogProps) => {
  const [tokenList, setTokenList] = useState<TokenData[]>(() => tokenListData)
  const [favoriteTokenList, setFavoriteTokenList] = useState<Map<number, boolean>>(new Map());
  const theme = useTheme() as theme;
  const dialogRef = useRef<HTMLDialogElement>(null)

  const handlerInput = (value: string) => {
    const filteredTokenList = tokenListData.filter(item => {
      const formattedValue = value.toLowerCase()
        
      const itemNameFormatted = item.name.toLowerCase()
      const itemFullNameFormatted = item.fullName.toLowerCase()
      if (itemNameFormatted.includes(formattedValue) || itemFullNameFormatted.includes(formattedValue)) {
        return item
      }
    })

    setTokenList(filteredTokenList)
  }

  const handlerFavorite = (key: number) => {
    const currentValue = favoriteTokenList.get(key)
    if (currentValue !== undefined) {
      favoriteTokenList.set(key, !currentValue)
    } else {
      favoriteTokenList.set(key, true)
    }
    setFavoriteTokenList(new Map(favoriteTokenList))
  }

  const handleViewTokenList = () => {
    console.log('View token list pressed');
  }

  return (
    <Dialog
      ref={dialogRef}
      title='Create Pool'
      onClose={() => closeCallback()}
      isOpen={showDialog}>
      <Container>
        <InnerContainer>
          <SearchInputContainer>
            <Input
              placeholder=''
              helperText='Something is wrong!'
              type={Type.IconPlain}
              status={Status.Default}
              label='Label test'
              onChange={handlerInput}
              hasBackground={true}
              Icon={<Search size={20} color='#999999' />}
              iconSize={IconSize.Small}
              iconWrapperBackground={theme.background.icon}
              />
          </SearchInputContainer>

          <PopularTokens>
            <SectionTitle>Popular Tokens</SectionTitle>
            <PopularTokensItemsContainer>
              {popularTokensData && popularTokensData.map((item, i) => (
                <PopularTokensItem 
                  key={`popular-token-${item.id}`}>
                    <RowIcon
                      tokenName={item.name}
                      tokenFullName={item.fullName}
                      iconPath={TOKEN_ICONS.get(item.name)}
                      iconSize={30}
                    />

                </PopularTokensItem>
              ))}
            </PopularTokensItemsContainer>

          </PopularTokens>

          <TokenListContainer>
            {tokenList.length > 0 && (
              <BalanceSectionTitle>Balance</BalanceSectionTitle>
            )}
            {tokenList.length > 0 ? tokenList.map((item, i) => (
              <TransactionDetails
                key={`transaction-item-${item.name}`}
                distribution={Distribution.SpaceBetween}
                Icon={TOKEN_ICONS.get(item.name)}
                iconSize={transactionDetailsIconSize.Small}
                LeftAdornment={
                  <Icons
                    name="Star"
                    color={favoriteTokenList.get(i) ? theme.color.primary.dark : theme.background.inactiveLavander}
                    size={24}
                    fill={favoriteTokenList.get(i) ? theme.color.primary.dark : theme.background.inactiveLavander}/>}
                LeftAdornmentCallback={() => handlerFavorite(i)}
                tokenNames={[item.name]}
                tokenFullName={item.fullName}
                amount={item.amount}
                isLast={i === tokenList.length - 1}
              />
            )) : (
              <TokenNotFoundText>Token not found</TokenNotFoundText>
            )}
          </TokenListContainer>
        </InnerContainer>
        <BottomContainer>
          <ViewTokenListTitle
            onClick={handleViewTokenList}>
            View token list
          </ViewTokenListTitle>
        </BottomContainer>
      </Container>
    </Dialog>
  )
}