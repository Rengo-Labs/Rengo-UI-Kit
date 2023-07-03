import React, {useState} from 'react'
import {useDeviceType} from "../../../hooks"
import {Container, Wrapper, Title, Subtitle, ImageContainer, ButtonContainer} from './styles'
import casperIcon from '../../../assets/icons/casper-icon.svg'
import {DeviceType} from "../../../hooks/types";
import {Button} from "../../atoms";
export interface StakeMessageProps {
    isOpen: boolean
    tokenImg: string
    tokenName: string
    amount: string
}
export const StakeMessage = ({
                                 isOpen,
                                 tokenImg,
                                 tokenName,
                                 amount
                             }: StakeMessageProps) => {
    const [isDialogOpen, setIsDialogOpen] = useState(isOpen)
    const deviceType = useDeviceType()
    const isMobile = deviceType === DeviceType.MOBILE
    const handleClose = () => {
        setIsDialogOpen(false)
    };

    return (
        <>
            {
                isDialogOpen && (
                <Container>
                    <Wrapper>
                        <ImageContainer>
                            <img src={casperIcon} alt="casper icon"/>
                        </ImageContainer>
                        <Title isMobile={isMobile}>Congratulation you earned</Title>
                        <ImageContainer>
                            <img src={tokenImg} alt={tokenName} width="160" height="160"/>
                        </ImageContainer>
                        <Subtitle isMobile={isMobile}>
                            {amount} {tokenName}
                        </Subtitle>
                        <ButtonContainer isMobile={isMobile}>
                            <Button
                                type="large"
                                props={{disabled: false, onClick: () => handleClose()}}>
                                Close
                            </Button>
                        </ButtonContainer>
                    </Wrapper>
                </Container>
            )}
        </>
    )
}
