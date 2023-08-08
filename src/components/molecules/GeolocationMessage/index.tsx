import React from 'react'
import {Container, Icons, Logo, Title} from "./styles";
import {DeviceType} from "../../../hooks/types";
import {useDeviceType} from "../../../hooks";
export const GeolocationMessage = () => {
    const deviceType = useDeviceType()
    const isMobile = deviceType === DeviceType.MOBILE

    return (
        <Container>
            <Logo />
            <Title isMobile={isMobile}>
                I´m sorry casperswap it's not available in your country.
            </Title>
            <Icons />
        </Container>
    )
}
