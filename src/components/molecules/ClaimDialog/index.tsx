import React from "react"
import {
    BottomSubContainer,
    CloseButton,
    Container,
    DialogHeader,
    DialogHeaderContainer,
    DialogTitle,
    InnerContainer,
    TopSubContainer,
} from "./styles"
import {
    Button,
    Dialog,
    Icons,
    KeyValueInput
} from "../../atoms"
import {ClaimDialogProps} from "./types"
import {theme} from '../../../styles/themes/themes'
import {useTheme} from "styled-components"
import {useDeviceType} from "../../../hooks"
import {DeviceType} from "../../../hooks/types"
import {InputType} from '../../atoms/KeyValueInput/types'

/**
 React component for a Remove Liquidity dialog box.
 @component
 @param {function} closeCallback - A function to be called when the dialog is closed, passing the liquidity pool state as an optional argument.
 @param {string} isOpen - The status of the liquidity pool.
 @param {boolean} disabledButton - The status of the remove liquidity button.
 @param {function} handleChangeInput - A function to be called when the input is changed.
 @param {function} handleToggle - A function to be called when the toggle is changed.

 @returns {JSX.Element} - A JSX element representing the Remove Liquidity dialog box.
 */
export const ClaimDialog = ({
                              titleDialog,
                              titleConfirmButton,
                              closeCallback,
                              isOpen,
                              disabledButton,
                              handleAction,
                              networkGasFee,
                              networkGasFeeSetter,
                              children
}: ClaimDialogProps): JSX.Element => {
    const deviceType = useDeviceType()
    const isMobile = deviceType === DeviceType.MOBILE
    const theme = useTheme() as theme;
    
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
                      {children}
                    </TopSubContainer>
                    <BottomSubContainer>
                        <KeyValueInput
                          keyText='Network gas fee'
                          value={networkGasFee}
                          inputType={InputType.GASFEE}
                          onChange={networkGasFeeSetter}
                        />
                    </BottomSubContainer>
                  
                    <BottomSubContainer>
                        <Button
                          type="large"
                          props={{disabled: disabledButton, onClick: () => handleAction()}}>
                          {titleConfirmButton}
                        </Button>
                    </BottomSubContainer>
                </InnerContainer>
            </Container>
        </Dialog>
    )
}
