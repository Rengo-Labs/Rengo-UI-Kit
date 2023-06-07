import React from "react"
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
    TransactionsContainer,
    TransactionsInnerContainer
} from "./styles"
import {
    Button,
    Dialog,
    Icons,
    Slider,
    Toggle,
    TransactionDetails,
    TransactionDetailsTextOnly
} from "../../atoms"
import {RemoveLiquidityDialogProps} from "./types"
import {Distribution} from "../../atoms/TransactionDetails/types"
import {theme} from '../../../styles/themes/themes'
import {useTheme} from "styled-components"
import {Variant} from "../../atoms/Toggle/types"
import {useDeviceType} from "../../../hooks"
import {DeviceType} from "../../../hooks/types"

/**
 React component for a Remove Liquidity dialog box.
 @component
 @param {function} closeCallback - A function to be called when the dialog is closed, passing the liquidity pool state as an optional argument.
 @param {TokenData[]} liquidityPoolData - An array of token data for the liquidity pool.
 @param {string} isOpen - The status of the liquidity pool.
 @param {boolean} disabledButton - The status of the remove liquidity button.
 @param {boolean} disabledAllowanceButton - The status of the approve button.
 @param {boolean} isRemoveLiquidityCSPR - The status of the remove liquidity CSPR.
 @param {function} handleChangeInput - A function to be called when the input is changed.
 @param {function} handleToggle - A function to be called when the toggle is changed.
 @param {function} handleRemoveLiquidity - A function to be called when the remove liquidity button is clicked.
 @param {CalculatedAmounts} calculatedAmounts - The calculated amounts for the liquidity pool.

 @returns {JSX.Element} - A JSX element representing the Remove Liquidity dialog box.
 */
export const RemoveLiquidityDialog = ({
                                          closeCallback,
                                          liquidityPoolData,
                                          isOpen,
                                          disabledButton,
                                          disabledAllowanceButton,
                                          isRemoveLiquidityCSPR,
                                          handleChangeInput,
                                          handleToggle,
                                          handleRemoveLiquidity,
                                          handleAllowanceLiquidity,
                                          calculatedAmounts,
                                          showAllowance,
                                          defaultValue,
                                          showToggle,
                                      }: RemoveLiquidityDialogProps): JSX.Element => {
    const deviceType = useDeviceType()
    const isMobile = deviceType === DeviceType.MOBILE
    const theme = useTheme() as theme;

    const handlePercentageChange = (value: number) => {
        handleChangeInput(value)
    }

    const handleCSPRChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleToggle(e.target.checked)
    }

    const handleClose = () => {
        closeCallback();
    };

    const handleSubmit = () => {
        handleRemoveLiquidity()
    }

    const handleAllowance = () => {
        handleAllowanceLiquidity()
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
                            <Icons name='X' size={23} color={theme.color.modalText}/>
                        </CloseButton>
                    </DialogHeader>
                </DialogHeaderContainer>

                <InnerContainer isMobile={isMobile}>
                    <TopSubContainer>
                        <SliderContainer>
                            <Slider defaultValue={defaultValue} callback={handlePercentageChange}/>
                        </SliderContainer>

                        <TransactionsContainer>
                          <TransactionsInnerContainer>
                            <TransactionDetails
                                key={`transaction-details-${liquidityPoolData.id}`}
                                containerWidth="80%"
                                distribution={Distribution.SpaceBetween}
                                Icon={liquidityPoolData.firstIcon}
                                OptIcon={liquidityPoolData.secondIcon}
                                iconSize={45}
                                tokenNames={[liquidityPoolData.firstName, liquidityPoolData.secondName]}
                                tokenNameSymbols={[liquidityPoolData.firstSymbol, liquidityPoolData.secondSymbol]}
                                amount={`${calculatedAmounts.lpAmount}`}/>
                          </TransactionsInnerContainer>
                          <TransactionsInnerContainer>
                            <TransactionDetails
                                key={`transaction-details-${liquidityPoolData.id}-${liquidityPoolData.firstName}`}
                                containerWidth="80%"
                                distribution={Distribution.SpaceBetween}
                                Icon={liquidityPoolData.firstIcon}
                                iconSize={45}
                                tokenNames={[liquidityPoolData.firstName]}
                                tokenNameSymbols={[liquidityPoolData.firstSymbol]}
                                amount={`${calculatedAmounts.firstAmount}`}/>
                          </TransactionsInnerContainer>
                          <TransactionsInnerContainer>
                            <TransactionDetails
                                key={`transaction-details-${liquidityPoolData.id}-${liquidityPoolData.secondName}`}
                                containerWidth="80%"
                                distribution={Distribution.SpaceBetween}
                                Icon={liquidityPoolData.secondIcon}
                                iconSize={45}
                                tokenNames={[liquidityPoolData.secondName]}
                                tokenNameSymbols={[liquidityPoolData.secondSymbol]}
                                amount={`${calculatedAmounts.secondAmount}`}/>
                          </TransactionsInnerContainer>
                        </TransactionsContainer>

                        <TransactionDetailsTextOnly
                            tokenInfo={[
                                `1 ${liquidityPoolData.firstSymbol} = ${liquidityPoolData.firstRate} ${liquidityPoolData.secondSymbol}`,
                                `1 ${liquidityPoolData.secondSymbol} = ${liquidityPoolData.secondRate} ${liquidityPoolData.firstSymbol}`
                            ]}
                        />
                    </TopSubContainer>

                    <BottomSubContainer>
                        {
                            showAllowance ?
                                <Button
                                    type="large"
                                    props={
                                        {disabled: disabledAllowanceButton, onClick: () => handleAllowance(), style: {padding: 0}}
                                    }>
                                    Approve {calculatedAmounts.allowance} {liquidityPoolData.tokenName}
                                </Button>
                                :
                                <Button
                                    type="large"
                                    props={{disabled: disabledButton, onClick: () => handleSubmit()}}>
                                    Remove Liquidity
                                </Button>
                        }
                      {
                        showToggle && 
                        <ToggleContainer>
                          <Toggle
                            isActive={isRemoveLiquidityCSPR}
                            toggle={(e) => handleCSPRChange(e)}
                            variant={Variant.Default}
                            labelText="Remove liquidity CSPR"/>
                        </ToggleContainer>
                      }
                    </BottomSubContainer>
                </InnerContainer>
            </Container>
        </Dialog>
    )
}
