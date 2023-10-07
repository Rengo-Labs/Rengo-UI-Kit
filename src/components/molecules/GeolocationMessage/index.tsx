import React from 'react'
import {Container, Icons, Logo, Title} from "./styles";
import {DeviceType} from "../../../hooks/types";
import {useDeviceType} from "../../../hooks";
import { AnimatePresence, motion } from 'framer-motion'

export const GeolocationMessage = () => {
    const deviceType = useDeviceType()
    const isMobile = deviceType === DeviceType.MOBILE

    return (
      <AnimatePresence>
        <motion.div
          key={`motion-div-geolocation-message-asdaw`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
        >
          <Container>
              <Logo />
              <Title isMobile={isMobile}>
                Sorry, CasperSwap is not available in your country.
              </Title>
              <Icons />
          </Container>
        </motion.div>
      </AnimatePresence>
    )
}
