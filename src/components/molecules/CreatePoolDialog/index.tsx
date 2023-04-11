import React, { useRef, useState } from 'react'
import { Container, InnerContainer } from './styles'
import { Dialog } from '../Dialog'
import { Icons, Input, TransactionDetails } from '../../atoms'
import { IconSize, Status, Type } from '../../atoms/Input/types'
import { IconSize as transactionDetailsIconSize } from '../../atoms/TransactionDetails/types'
import { Search } from 'react-feather'
import { Distribution } from '../../atoms/TransactionDetails/types'
import btcTokenIcon from "../../../assets/icons/bitcoin-token.svg";
import ethTokenIcon from "../../../assets/icons/eth-token.svg";
import cstTokenIcon from "../../../assets/icons/casper-token.svg";
import usdtTokenIcon from "../../../assets/icons/tether-token.svg";
import usdcTokenIcon from "../../../assets/icons/usdc-token.svg";

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


export const CreatePoolDialog = () => {
  const [inputSearch, setInputSearch] = useState('')
  const dialogRef = useRef<HTMLDialogElement>(null)

  const handlerInput = (value: string) => {
    setInputSearch(value)
  }

  // dialogRef.current?.showModal()

  return (
    <Dialog
      ref={dialogRef}
      title='Create Pool'>
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

            {SAMPLE_DATA && SAMPLE_DATA.map((item, i) => (
              <TransactionDetails
                distribution={Distribution.SpaceBetween}
                Icon={TOKEN_ICONS.get(item.name)}
                iconSize={transactionDetailsIconSize.Small}
                LeftAdornment={<Icons name="Star" color='#715FF5' size={24} />}
                // LeftAdornmentCallback={() => console.log('favorite clicked')}
                tokenNames={[item.name]}
                tokenFullName={item.fullName}
                amount={item.amount}
              />
            ))}
        </InnerContainer>
      </Container>
    </Dialog>
  )
}