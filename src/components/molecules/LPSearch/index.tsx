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
  handleOnlyShowStaked: (showStaked: boolean) => void 
  handleSearch: (e: string) => void
  handleReloadButton: () => Promise<void>
  getProgress: () => number
  clearProgress?: () => void
}

/**
  A search component for LP tokens.
  @component
  @param {Object} props - The component props.
  @param {Function} props.handleOnlyShowStaked - A callback function that takes a boolean parameter. This function is called when the user toggles the "show staked only" checkbox.
  @param {Function} props.handleSearch - A callback function that takes a string parameter. This function is called when the user types in the search input.
  @param {Function} props.handleReloadButton - A callback function that returns a Promise. This function is called when the user clicks on the Reload button.
  @param {Function} props.getProgress - A function that returns a number representing the current progress of the reload operation.
  @param {Function} props.clearProgress - A function that clears the current reload progress.
  @returns {JSX.Element} The rendered LPSearch component.
*/

export const LPSearch = ({ handleOnlyShowStaked, handleSearch, handleReloadButton, getProgress, clearProgress }: LPSearchProps) => {
  const theme = useTheme() as theme;
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE
  const [showStaked, setShowStaked] = useState<boolean>(false)

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
        onChange={handleSearch}
        hasBackground={true}
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
              handlerAction={handleReloadButton} />
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