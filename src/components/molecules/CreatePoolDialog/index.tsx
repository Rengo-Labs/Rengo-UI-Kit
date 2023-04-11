import React, { useEffect, useRef, useState } from 'react'
import { BottomContainer, Container, InnerContainer, PopularTokens, PopularTokensItemsContainer, SectionTitle, TokenListContainer, ViewTokenListTitle } from './styles'
import { Dialog } from '../Dialog'
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
import { RowIcons } from '../../atoms/RowIcons'

const TOKEN_ICONS = new Map([
  ['CST', cstTokenIcon],
  ['WBTC', btcTokenIcon],
  ['USDT', usdtTokenIcon],
  ['USDC', usdcTokenIcon],
  ['WETH', ethTokenIcon],
])

const SAMPLE_DATA = [
  { name: 'CST', fullName: 'CasperSwap', amount: '1000000' },
  { name: 'WBTC', fullName: 'Wrapped Bitcoin', amount: '10000' },
  { name: 'USDT', fullName: 'Teather', amount: '10000' },
  { name: 'USDC', fullName: 'USD Coin', amount: '10000' },
  { name: 'WETH', fullName: 'Wrapped Ether', amount: '1000000'}
]

interface CreatePoolDialogProps {
  closeCallback: () => void
  showDialog: boolean
}

export const CreatePoolDialog = ({ closeCallback, showDialog }: CreatePoolDialogProps) => {
  const [inputSearch, setInputSearch] = useState('')
  const [favoriteTokenList, setFavoriteTokenList] = useState<Map<number, boolean>>(new Map());
  const theme = useTheme() as theme;
  const dialogRef = useRef<HTMLDialogElement>(null)

  const handlerInput = (value: string) => {
    setInputSearch(value)
  }

  useEffect(() => {
    if (!showDialog) {
      return
    }

    if (dialogRef.current && !dialogRef.current.hasAttribute('open') && showDialog) {
      dialogRef.current?.showModal()
    }
  }, [showDialog])
  
  const handlerFavorite = (key: number) => {
    const currentValue = favoriteTokenList.get(key)
    if (currentValue !== undefined) {
      favoriteTokenList.set(key, !currentValue)
    } else {
      favoriteTokenList.set(key, true)
    }
    setFavoriteTokenList(new Map(favoriteTokenList))
  }

  return (
    <Dialog
      ref={dialogRef}
      title='Create Pool'
      onClose={() => closeCallback()}
      isOpen={showDialog}>
      <Container>
        <InnerContainer>
          <Input
            placeholder='Node URL'
            helperText='Something is wrong!'
            type={Type.IconPlain}
            status={Status.Default}
            label='Label test'
            onChange={handlerInput}
            hasBackground={false}
            Icon={<Search size={20} color='#999999' />}
            iconSize={IconSize.Small}
            />

          <PopularTokens>
            <SectionTitle>Popular Tokens</SectionTitle>
            <PopularTokensItemsContainer>
              {SAMPLE_DATA && SAMPLE_DATA.slice(0, 3).map((item, i) => (
                <RowIcons
                tokenName={item.name}
                tokenFullName={item.fullName}
                iconPath={TOKEN_ICONS.get(item.name)}
                iconSize={30}
                />
              ))}
            </PopularTokensItemsContainer>

          </PopularTokens>

          <TokenListContainer>
            <SectionTitle>Balance</SectionTitle>
            {SAMPLE_DATA && SAMPLE_DATA.map((item, i) => (
              <TransactionDetails
                key={`transaction-item-${item.name}`}
                distribution={Distribution.SpaceBetween}
                Icon={TOKEN_ICONS.get(item.name)}
                iconSize={transactionDetailsIconSize.Small}
                LeftAdornment={
                  <Icons
                    name="Star"
                    color={theme.color.primary.dark}
                    size={24}
                    fill={favoriteTokenList.get(i) ? theme.color.primary.dark : theme.color.white}/>}
                LeftAdornmentCallback={() => handlerFavorite(i)}
                tokenNames={[item.name]}
                tokenFullName={item.fullName}
                amount={item.amount}
                isLast={i === SAMPLE_DATA.length - 1}
              />
            ))}
          </TokenListContainer>
        </InnerContainer>
        <BottomContainer>
          <ViewTokenListTitle>
            View token list
          </ViewTokenListTitle>
        </BottomContainer>
      </Container>
    </Dialog>
  )
}