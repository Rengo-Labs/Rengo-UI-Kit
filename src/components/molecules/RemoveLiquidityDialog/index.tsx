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
    TransactionsContainer
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
                                          calculatedAmounts,
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
                            <Slider callback={handlePercentageChange}/>
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
                                amount={`${calculatedAmounts.lpAmount}`}/>
                            <TransactionDetails
                                key={`transaction-details-${liquidityPoolData.id}-${liquidityPoolData.firstName}`}
                                distribution={Distribution.SpaceEvenly}
                                Icon={liquidityPoolData.firstIcon}
                                iconSize={45}
                                tokenNames={[liquidityPoolData.firstName]}
                                tokenNameSymbols={[liquidityPoolData.firstSymbol]}
                                amount={`${calculatedAmounts.secondAmount}`}/>
                            <TransactionDetails
                                key={`transaction-details-${liquidityPoolData.id}-${liquidityPoolData.secondName}`}
                                distribution={Distribution.SpaceEvenly}
                                Icon={liquidityPoolData.secondIcon}
                                iconSize={45}
                                tokenNames={[liquidityPoolData.secondName]}
                                tokenNameSymbols={[liquidityPoolData.secondSymbol]}
                                amount={`${calculatedAmounts.secondAmount}`}/>
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
                            disabledAllowanceButton ?
                                <Button
                                    type="large"
                                    props={
                                        {onClick: () => handleSubmit(), style: {padding: 0}}
                                    }>
                                    Approve {-liquidityPoolData.allowance} {liquidityPoolData.tokenName}
                                </Button>
                                :
                                <Button
                                    type="large"
                                    props={{disabled: disabledButton, onClick: () => handleSubmit()}}>
                                    Remove Liquidity
                                </Button>
                        }
                        <ToggleContainer>
                            <Toggle
                                isActive={isRemoveLiquidityCSPR}
                                toggle={(e) => handleCSPRChange(e)}
                                variant={Variant.Default}
                                labelText="Remove liquidity CSPR"/>
                        </ToggleContainer>
                    </BottomSubContainer>
                </InnerContainer>
            </Container>
        </Dialog>
    )
}
