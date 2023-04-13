import React, { useState } from "react"
import { 
  CloseButton,
  Container,
  DialogHeader,
  DialogHeaderContainer,
  DialogTitle,
  InnerContainer,
  SliderContainer,
  ToggleContainer,
  TransactionsContainer } from "./styles"
import { Button, Dialog, Icons, Slider, Toggle, TransactionDetails, TransactionDetailsTextOnly } from "../../atoms"
import { RemoveLiquidityDialogProps, ILiquidityPoolState } from "./types"
import { Distribution } from "../../atoms/TransactionDetails/types"
import { theme } from '../../../styles/themes/themes'

import btcTokenIcon from "../../../assets/icons/bitcoin-token.svg";
import ethTokenIcon from "../../../assets/icons/eth-token.svg";
import cstTokenIcon from "../../../assets/icons/casper-token.svg";
import usdtTokenIcon from "../../../assets/icons/tether-token.svg";
import usdcTokenIcon from "../../../assets/icons/usdc-token.svg";
import wethCsprPairTokenIcon from "../../../assets/icons/eth-cspr-pair.svg";
import { useTheme } from "styled-components"
import { Variant } from "../../atoms/Toggle/types"

const TOKEN_ICONS = new Map([
  ['CSPR', cstTokenIcon],
  ['CST', cstTokenIcon],
  ['WBTC', btcTokenIcon],
  ['USDT', usdtTokenIcon],
  ['USDC', usdcTokenIcon],
  ['WETH', ethTokenIcon],
  ['WETH, CSPR', wethCsprPairTokenIcon]
])

export const RemoveLiquidityDialog = ({ id, showDialog, closeCallback, liquidityPoolData }: RemoveLiquidityDialogProps) => {
  const initialState: ILiquidityPoolState = {
    liquidityPercentage: 0,
    removeLiquidityCSPR: false,
    id
  };

  const theme = useTheme() as theme;
  const [liquidityPool, setLiquidityPool] = useState<ILiquidityPoolState>(() => initialState)

  const handlePercentageChange = (value: number) => {
    setLiquidityPool({
      ...liquidityPool,
      liquidityPercentage: value
    })
  }

  const handleCSPRChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
    setLiquidityPool({
      ...liquidityPool,
      removeLiquidityCSPR: e.target.checked
    })
  }

  const handleClose = () => {
    closeCallback();
  };

  const handleSubmit = () => {
    closeCallback(liquidityPool)
  }

  return (
    <Dialog
      title="Remove Liquidity"
      onClose={() => closeCallback()}
      isOpen={showDialog}
      >
      <Container>
        <DialogHeaderContainer>
          <DialogHeader>
            <DialogTitle>Remove Liquidity</DialogTitle>
            <CloseButton onClick={handleClose}>
              <Icons name='X' size={23} color={theme.color.modalText} />
            </CloseButton>
          </DialogHeader>
        </DialogHeaderContainer>

        <InnerContainer>
          <SliderContainer>
            <Slider callback={handlePercentageChange} />
          </SliderContainer>
          
          <TransactionsContainer>
            {liquidityPoolData && liquidityPoolData.map(item => (
              <TransactionDetails
                key={`transaction-details-${item.id}`}
                distribution={Distribution.SpaceEvenly}
                Icon={TOKEN_ICONS.get(item.tokenNameSymbols.join(", "))}
                iconSize={45}
                tokenNames={item.tokenNames}
                tokenNameSymbols={item.tokenNameSymbols}
                amount={item.amount} />
            ))}
          </TransactionsContainer>

          <TransactionDetailsTextOnly
              tokenInfo={[
                '1 Wrapper Ether = 391.361884674 Wrapper Casper',
                '1 Wrapper Casper = 0.002555180 Wrapper Ether'
              ]}
            />

          <Button
            type="large"
            props={{ onClick: () => handleSubmit() }}>
            Remove Liquidity
          </Button>
          
          <ToggleContainer>
            <Toggle
              isActive={liquidityPool.removeLiquidityCSPR}
              toggle={(e) => handleCSPRChange(e)}
              variant={Variant.Default}
              labelText="Remove liquidity CSPR" />
          </ToggleContainer>

        </InnerContainer>
      </Container>

    </Dialog>
  )
}