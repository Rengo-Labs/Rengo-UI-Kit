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
import {
  Button,
  Dialog,
  Icons,
  Slider,
  Toggle,
  TransactionDetails,
  TransactionDetailsTextOnly } from "../../atoms"
import { RemoveLiquidityDialogProps, ILiquidityPoolState } from "./types"
import { Distribution } from "../../atoms/TransactionDetails/types"
import { theme } from '../../../styles/themes/themes'
import { useTheme } from "styled-components"
import { Variant } from "../../atoms/Toggle/types"

/**
  React component for a Remove Liquidity dialog box.
  @component
  @param {RemoveLiquidityDialogProps} props - The props object containing the following properties:
  @param {string} props.id - The ID of the liquidity pool.
  @param {Function} props.closeCallback - A function to be called when the dialog is closed, passing the liquidity pool state as an optional argument.
  @param {TokenData[]} props.liquidityPoolData - An array of token data for the liquidity pool.
  @returns {JSX.Element} - A JSX element representing the Remove Liquidity dialog box.
*/
export const RemoveLiquidityDialog = ({ id, closeCallback, liquidityPoolData }: RemoveLiquidityDialogProps) => {
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
      onClose={() => closeCallback()}
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
                Icon={item.tokenImg}
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