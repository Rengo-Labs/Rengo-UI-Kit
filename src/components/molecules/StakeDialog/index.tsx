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
    TopSubContainer,
    TransactionsContainer,
    TransactionsInnerContainer
} from "./styles"
import {
    Button,
    Dialog,
    Icons,
    Slider,
    TransactionDetails
} from "../../atoms"
import {StakeDialogProps} from "./types"
import {Distribution} from "../../atoms/TransactionDetails/types"
import {theme} from '../../../styles/themes/themes'
import {useTheme} from "styled-components"
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
export const StakeDialog = ({
                                          titleDialog,
                                          titleConfirmButton,
                                          closeCallback,
                                          liquidityPoolData,
                                          isOpen,
                                          disabledButton,
                                          disabledAllowanceButton,
                                          handleChangeInput,
                                          handleAction,
                                          handleAllowance,
                                          calculatedAmounts,
                                          showAllowance,
                                          defaultValue,
                                      }: StakeDialogProps): JSX.Element => {
    const deviceType = useDeviceType()
    const isMobile = deviceType === DeviceType.MOBILE
    const theme = useTheme() as theme;

    const handlePercentageChange = (value: number) => {
        handleChangeInput(value)
    }

    const handleClose = () => {
        closeCallback();
    };

    return (
        <Dialog
            isOpen={isOpen}
            onClose={() => closeCallback()}
        >
            <Container isMobile={isMobile}>
                <DialogHeaderContainer isMobile={isMobile}>
                    <DialogHeader>
                        <DialogTitle>{titleDialog}</DialogTitle>
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
                        </TransactionsContainer>
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
                                    props={{disabled: disabledButton, onClick: () => handleAction()}}>
                                  {titleConfirmButton}
                                </Button>
                        }
                    </BottomSubContainer>
                </InnerContainer>
            </Container>
        </Dialog>
    )
}
