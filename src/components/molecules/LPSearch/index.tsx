import React, { useState } from 'react'
import { ActionsSubContainer, Container, UpdateButtonContainer } from "./styles"
import { ButtonUpdateCircle, Input, Toggle } from '../../atoms'
import { IconSize, Status, Type } from '../../atoms/Input/types'
import { Search } from 'react-feather'
import { useDeviceType } from '../../../hooks'
import { theme } from '../../../styles/themes/themes'
import { useTheme } from 'styled-components'
import { DeviceType } from '../../../hooks/types'
import { Variant } from '../../atoms/Toggle/types'

export interface LPSearchProps {
  handleOnlyShowStaked: (showStaked: boolean) => boolean 
}

export const LPSearch = ({ handleOnlyShowStaked }: LPSearchProps) => {
  const theme = useTheme() as theme;
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE

  const [showStaked, setShowStaked] = useState<boolean>(false)

  
  const handlerInput = (value: string) => {
    
  }

  const getProgress = (): number => {
    return 0
  }

  const clearProgress = () => {
    
  }

  const handlerButtonCircle  = (): Promise<void> => {

    return Promise.resolve()
  }

  const handleShowStakedToggle = (e: boolean) => {
    handleOnlyShowStaked(e)
    setShowStaked(prev => !prev)
  }

  return (
    <Container isMobile={isMobile}>
      <Input
        placeholder='Search all'
        helperText='Something is wrong!'
        type={Type.IconPlain}
        status={Status.Default}
        onChange={handlerInput}
        hasBackground={false}
        Icon={<Search size={20} color='#999999' />}
        iconSize={IconSize.Small}
        iconWrapperBackground={theme.background.icon}
        textAlign='left'
        />
        
        <ActionsSubContainer isMobile={isMobile}>
          <UpdateButtonContainer isMobile={isMobile}>
            <ButtonUpdateCircle
              getProgress={getProgress}
              clearProgress={clearProgress}
              strokeWidth={12}
              handlerAction={handlerButtonCircle} />
          </UpdateButtonContainer>
          <Toggle
            isActive={showStaked}
            toggle={(e: React.ChangeEvent<HTMLInputElement>) => handleShowStakedToggle(e.target.checked)}
            variant={Variant.InvertedColors}
            labelText="Show Staked" />
        </ActionsSubContainer>
      
    </Container>
  )
}