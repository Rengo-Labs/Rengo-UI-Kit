import React, { useState, forwardRef, ForwardedRef } from 'react'
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
import { useDeviceType } from '../../../hooks'
import { DeviceType } from '../../../hooks/types'
import { MenuPros } from './types'

export const Menu = forwardRef(({
  menuIcon,
  casperIcon,
  title,
  links,
  toggle,
  rightAction,
  handleRedirect
}: MenuPros, ref: ForwardedRef<HTMLDivElement>) => {
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE
  const isTablet = deviceType === DeviceType.TABLET
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isMobile ? (
        <>
          <MenuWrapperMobile ref={ref} className='menu-target-id'>
            <MobileMenuIcon onClick={toggleMenu}>
              <BurgerButton
                key={'burger-menu-mobile'}
                open={isOpen}
                setOpen={toggleMenu}
              />
            </MobileMenuIcon>
            {isOpen && <MenuItemText size={24}>{title}</MenuItemText>}
            <Icon src={menuIcon} width={45} height={45} alt={`${title} left icon`} onClick={handleRedirect}/>
            {!isOpen && <ButtonWallet
                handleClick={rightAction?.isWalletConnected ?
                    rightAction?.onActionConnected :
                    rightAction?.onAction}
                accountHashString={rightAction?.walletAddress} />}
          </MenuWrapperMobile>
          <MobileMenuWrapper isOpen={isOpen}>
            <MobileMenuItemContainer>
              {links.map((link, index) => (
                <MenuItem
                  key={`${link.page}-${index}-mobile`}
                  clickable
                  onClick={() => link.onAction(link.path)}
                >
                  <Icon src={link.icon} width={38} height={38} alt={`${link.page} icon`} />
                  <MenuItemText size={22}>{link.page}</MenuItemText>
                </MenuItem>
              ))}
              {toggle && (
                <MenuItem>
                  <Toggle
                    key={'toggle-menu-mobile'}
                    isActive={toggle.isActive}
                    toggle={toggle.toggle}
                    labelText={toggle.labelText}
                    variant={toggle.variant}
                  />
                </MenuItem>
              )}
            </MobileMenuItemContainer>
          </MobileMenuWrapper>
        </>
      ) : (
        <MenuWrapper isTablet={isTablet} ref={ref} className='menu-target-id'>
          <LeftTextContainer onClick={handleRedirect}>
            <Icon src={menuIcon} width={28} height={28} alt={`${title} left icon`} />
            <MenuItem>
              <Icon src={casperIcon} width={120} height={13} alt={`${title} left icon`} />
            </MenuItem>
          </LeftTextContainer>
          <CenterTextContainer>
            {links.map((link, index) => (
              <MenuItem
                key={`${link.page}-${index}`}
                clickable
                onClick={() => link.onAction(link.path)}
              >
                <Icon src={link.icon} width={32} height={32} alt={`${link.page} icon`} />
                <MenuItemText>{link.page}</MenuItemText>
              </MenuItem>
            ))}
            {toggle && (
              <MenuItem>
                <Toggle
                  key={'toggle-menu'}
                  isActive={toggle.isActive}
                  toggle={toggle.toggle}
                  labelText={toggle.labelText}
                  variant={toggle.variant}
                />
              </MenuItem>
            )}
          </CenterTextContainer>
              <ButtonWallet
                  handleClick={rightAction?.isWalletConnected ?
                    rightAction?.onActionConnected :
                    rightAction?.onAction}
                    accountHashString={rightAction?.walletAddress} />
        </MenuWrapper>
      )}
    </>
  )
})
