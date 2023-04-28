import React, { useState } from "react"
import { 
  BottomSubContainer,
  CloseButton,
  Container,
  DialogHeader,
  DialogHeaderContainer,
  DialogTitle,
  InnerContainer,
  SliderContainer,
  ToggleContainer,
  TopSubContainer,
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
import { useDeviceType } from "../../../hooks"
import { DeviceType } from "../../../hooks/types"

/**
  React component for a Remove Liquidity dialog box.
  @component
  @param {RemoveLiquidityDialogProps} props - The props object containing the following properties:
  @param {string} props.id - The ID of the liquidity pool.
  @param {string} props.isOpen - The status of the liquidity pool.
  @param {Function} props.closeCallback - A function to be called when the dialog is closed, passing the liquidity pool state as an optional argument.
  @param {TokenData[]} props.liquidityPoolData - An array of token data for the liquidity pool.
  @returns {JSX.Element} - A JSX element representing the Remove Liquidity dialog box.
*/
export const RemoveLiquidityDialog = ({
                                        id,
                                        closeCallback,
                                        liquidityPoolData,
                                        isOpen,
                                        disabledButton,
                                        disabledAllowanceButton,
}: RemoveLiquidityDialogProps) => {
  const initialState: ILiquidityPoolState = {
    liquidityPercentage: 0,
    removeLiquidityCSPR: false,
    id
  };
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE
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
      isOpen={isOpen}
      onClose={() => closeCallback()}
      >
      <Container isMobile={isMobile}>
        <DialogHeaderContainer isMobile={isMobile}>
          <DialogHeader>
            <DialogTitle>Remove Liquidity</DialogTitle>
            <CloseButton onClick={handleClose}>
              <Icons name='X' size={23} color={theme.color.modalText} />
            </CloseButton>
          </DialogHeader>
        </DialogHeaderContainer>

        <InnerContainer isMobile={isMobile}>
          <TopSubContainer>
            <SliderContainer>
              <Slider callback={handlePercentageChange} />
            </SliderContainer>
            
            <TransactionsContainer>
              <TransactionDetails
                key={`transaction-details-${liquidityPoolData.id}`}
                distribution={Distribution.SpaceEvenly}
                Icon={liquidityPoolData.firstIcon}
                OptIcon={liquidityPoolData.secondIcon}
                iconSize={45}
                tokenNames={[`${liquidityPoolData.firstName}-${liquidityPoolData.secondName}`]}
                tokenNameSymbols={[liquidityPoolData.firstName, liquidityPoolData.secondName]}
                amount={liquidityPoolData.liquidity} />
              <TransactionDetails
                key={`transaction-details-${liquidityPoolData.id}-${liquidityPoolData.firstName}`}
                distribution={Distribution.SpaceEvenly}
                Icon={liquidityPoolData.firstIcon}
                iconSize={45}
                tokenNames={[liquidityPoolData.firstName]}
                tokenNameSymbols={[liquidityPoolData.firstSymbol]}
                amount={liquidityPoolData.firstLiquidity} />
              <TransactionDetails
                key={`transaction-details-${liquidityPoolData.secondName}`}
                distribution={Distribution.SpaceEvenly}
                Icon={liquidityPoolData.secondIcon}
                iconSize={45}
                tokenNames={[liquidityPoolData.secondName]}
                tokenNameSymbols={[liquidityPoolData.secondSymbol]}
                amount={liquidityPoolData.secondLiquidity} />
            </TransactionsContainer>

            <TransactionDetailsTextOnly
                tokenInfo={[
                  `1 ${liquidityPoolData.firstName} = ${liquidityPoolData.secondLiquidity} ${liquidityPoolData.secondName}`,
                  `1 ${liquidityPoolData.secondName} = ${liquidityPoolData.firstLiquidity} ${liquidityPoolData.firstName}`
                ]}
              />
          </TopSubContainer>

          <BottomSubContainer>
            {
              disabledAllowanceButton &&
              <Button
                type="large"
                props={{onClick: () => handleSubmit() }}>
                Approve {-liquidityPoolData.allowance} {liquidityPoolData.tokenName}
              </Button>
            }
            <Button
              type="large"
              props={{disabled: disabledButton, onClick: () => handleSubmit() }}>
              Remove Liquidity
            </Button>

            <ToggleContainer>
              <Toggle
                isActive={liquidityPool.removeLiquidityCSPR}
                toggle={(e) => handleCSPRChange(e)}
                variant={Variant.Default}
                labelText="Remove liquidity CSPR" />
            </ToggleContainer>
          </BottomSubContainer>

        </InnerContainer>
      </Container>

    </Dialog>
  )
}