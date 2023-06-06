import React, { useEffect, useRef, useState } from 'react'
import {
  BalanceSectionTitle,
  BottomContainer,
  CloseButton,
  Container,
  DialogHeader,
  DialogHeaderContainer,
  DialogTitle,
  InnerContainer,
  PopularTokens,
  PopularTokensItem,
  PopularTokensItemsContainer,
  SearchInputContainer,
  SectionTitle,
  TokenItemContainer,
  TokenListContainer,
  TokenNotFoundText,
  TopSubContainer,
  ViewTokenListTitle } from './styles'
import { Dialog } from '../../atoms/Dialog'
import { Icons, Input, TransactionDetails } from '../../atoms'
import { IconSize, Status, Type } from '../../atoms/Input/types'
import { IconSize as transactionDetailsIconSize } from '../../atoms/TransactionDetails/types'
import { Search } from 'react-feather'
import { theme } from '../../../styles/themes/themes'
import { Distribution } from '../../atoms/TransactionDetails/types'
import { useTheme } from 'styled-components'
import { RowIcon } from '../../atoms/RowIcon'
import { CreatePoolDialogProps, TokenData } from './types'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'

/**
  React component for creating a pool dialog.
  @param {Object} props - The props object.
  @param {Function} props.closeCallback - The callback function to close the dialog.
  @param {Array} props.tokenListData - An array of TokenData objects containing information about the tokens in the pool. This is an array item example { id: '3d3dfimfw33', name: 'CST', fullName: 'CasperSwap', amount: '1000000' },
  @param {Array} props.popularTokensData - An array of TokenData objects containing information about the popular tokens. The item is similar as the tokenListData item
  @param {function} [props.onSelectToken] - onSelectToken select token.
  @param {function} [props.onSelectFavoriteToken] - onSelectFavoriteToken callback to persist favorite token.
  @returns {JSX.Element} - The create pool dialog component.
*/

export const CreatePoolDialog = ({
  isOpen,
  closeCallback,
  tokenListData,
  popularTokensData,
  onSelectToken,
  onSelectFavoriteToken,
  handleViewTokenList,
  explicitMarginTop
 }: CreatePoolDialogProps) => {
   const theme = useTheme() as theme;
   const deviceType = useDeviceType()
   const [tokenList, setTokenList] = useState<TokenData[]>()
   const isMobile = deviceType === DeviceType.MOBILE

  useEffect(() => {
    const newData = structuredClone(tokenListData)
    setTokenList(newData)
  }, [tokenListData])

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

  const handleClose = () => {
    closeCallback();
  };
  
  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => handleClose()}
      explicitMarginTop={explicitMarginTop}
      >
      <Container isMobile={isMobile} isOpen={isOpen}>
        <TopSubContainer>
          <DialogHeaderContainer>
            <DialogHeader isMobile={isMobile}>
              <DialogTitle>Token List</DialogTitle>
              <CloseButton onClick={handleClose}>
                <Icons name='X' size={23} color={theme.color.modalText} />
              </CloseButton>
            </DialogHeader>
          </DialogHeaderContainer>

          <InnerContainer isMobile={isMobile}>
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
                    key={`popular-token-${item.id}-${item.name}`}>
                      <RowIcon
                        tokenName={item.name}
                        tokenFullName={item.fullName}
                        Icon={item.tokenImg}
                        iconSize={30}
                        onSelectToken={() => onSelectToken(item.name)}
                      />

                  </PopularTokensItem>
                ))}
              </PopularTokensItemsContainer>

            </PopularTokens>

            <TokenListContainer>
              {tokenList && tokenList.length > 0 && (
                <BalanceSectionTitle>Balance</BalanceSectionTitle>
              )}
              {tokenList && tokenList.length > 0 ? (tokenList as TokenData[]).map((item, i) => (
                <TokenItemContainer key={`transaction-item-${item.name}`}>
                  <TransactionDetails
                    containerWidth="100%"
                    distribution={Distribution.SpaceBetween}
                    Icon={item.tokenImg}
                    iconSize={transactionDetailsIconSize.Small}
                    LeftAdornment={
                      <Icons
                        name="Star"
                        color={item.isFavorite ? theme.color.primary.dark : theme.background.inactiveLavander}
                        size={24}
                        fill={item.isFavorite ? theme.color.primary.dark : theme.background.inactiveLavander}/>}
                    LeftAdornmentCallback={() => onSelectFavoriteToken(item.name)}
                    tokenNames={[item.name]}
                    tokenFullName={item.fullName}
                    amount={item.amount}
                    isLast={i === (tokenList as TokenData[]).length - 1}
                    onSelectToken={() => onSelectToken(item.name)}
                  />
                </TokenItemContainer>
              )) : (
                <TokenNotFoundText>Token not found</TokenNotFoundText>
              )}
            </TokenListContainer>
          </InnerContainer>
        </TopSubContainer>

      </Container>
    </Dialog>
  )
}
