import React, { useState } from 'react'
import {
  CenterTextContainer,
  Icon,
  LeftTextContainer,
  MenuItem,
  MenuItemText,
  MenuWrapper,
  MenuWrapperMobile,
  MobileMenuIcon,
  MobileMenuItemContainer,
  MobileMenuWrapper
} from './styles'
import { BurgerButton, ButtonWallet, Toggle } from '../../atoms'
import { v4 as uuidv4 } from 'uuid'
import { useDeviceType } from '../../../hooks'
import { DeviceType } from '../../../hooks/types'
import { MenuPros } from './types'



export const Menu = ({
  menuIcon,
  title,
  links,
  toggle,
  rightAction
}: MenuPros) => {
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isMobile ? (
        <>
          <MenuWrapperMobile>
            <MobileMenuIcon onClick={toggleMenu}>
              <BurgerButton
                key={'burger-' + uuidv4()}
                open={isOpen}
                setOpen={toggleMenu}
              />
            </MobileMenuIcon>
            {isOpen && <MenuItemText size={24}>{title}</MenuItemText>}
            <Icon
              src={menuIcon}
              size={45}
              alt={`${title} left icon`}
            />
            {!isOpen && <ButtonWallet handleClick={rightAction?.onAction} />}
          </MenuWrapperMobile>
          <MobileMenuWrapper isOpen={isOpen}>
            <MobileMenuItemContainer>
              {links.map((link, index) => (
                <MenuItem
                  key={`${link.page}-${index}`}
                  clickable
                  onClick={() => link.onAction(link.path)}
                >
                  <Icon
                    src={link.icon}
                    size={38}
                    alt={`${link.page} icon`}
                  />
                  <MenuItemText size={22}>{link.page}</MenuItemText>
                </MenuItem>
              ))}
            </MobileMenuItemContainer>
          </MobileMenuWrapper>
        </>
      ) : (
        <MenuWrapper>
          <LeftTextContainer>
            <MenuItem>
              <Icon
                src={menuIcon}
                size={28}
                alt={`${title} left icon`}
              />
              <MenuItemText>{title}</MenuItemText>
            </MenuItem>
          </LeftTextContainer>
          <CenterTextContainer>
            {links.map((link, index) => (
              <MenuItem
                key={`${link.page}-${index}`}
                clickable
                onClick={() => link.onAction(link.path)}
              >
                <Icon
                  src={link.icon}
                  size={32}
                  alt={`${link.page} icon`}
                />
                <MenuItemText>{link.page}</MenuItemText>
              </MenuItem>
            ))}
            {toggle && (
              <MenuItem>
                <Toggle
                  key={'toggle-' + uuidv4()}
                  isActive={toggle.isActive}
                  toggle={toggle.toggle}
                  labelText={toggle.labelText}
                  variant={toggle.variant}
                />
              </MenuItem>
            )}
          </CenterTextContainer>
          <ButtonWallet handleClick={rightAction?.onAction} />
        </MenuWrapper>
      )}
    </>
  )
}
