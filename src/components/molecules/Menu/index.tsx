import React from 'react'
import {
    MenuWrapped,
    MenuBar,
    MenuHeader,
    MenuBody,
    MenuItem,
    LeftLogo,
    CenterLogo,
    MenuBodyItem,
    MenuItemWrapped,
    ButtonWrapper
} from './styles'
import {BurgerButton, TextIconTouchable, Toggle, ButtonWallet} from '../../atoms'
import {ToggleProps} from '../../atoms/Toggle/types'
import {v4 as uuidv4} from 'uuid';

// @ts-ignore
import closeIcon from './assets/x.svg'

export interface PageLink {
    icon: any,
    page: string,
    path: string,
    onAction: any
}

export interface OptAction {
    startIcon: any,
    endIcon: any,
    title: string,
    background: string,
    color: string,
    onAction: any
}

export interface MenuPros {
    menuIcon: any,
    title: string,
    links: PageLink[],
    isMobile: boolean,
    toggle?: ToggleProps,
    rightAction?: OptAction,
    children?: React.ReactNode
}

/***
 *
 * @param startIcon - it shows the selected token icon currently
 * @param endIcon - it shows the arrow icon to show a token list to be selected
 * @param iconSize
 * @param tokenBalance - it's the total balance of the selected token.
 * @param tokenName - it's the token name of the selected token.
 * @param tokenPrice - it's the token price expressed in usd.
 * @param placeholder - it's the label value which is shown in the input
 * @param onChangeToken - Token selector's listener
 * @param onChangeValue - Card value's listener
 * @param validator - it's a validator of this token input
 * @param value - value which will be loaded in the card input
 * @constructor
 */
export const Menu = ({menuIcon, title, links, isMobile = false, toggle, rightAction}: MenuPros) => {

    const [menuBurger, setMenuBurger] = React.useState(false)

    return (
        <MenuWrapped>
            <MenuBar>
                <MenuHeader key={'menu-header-' + uuidv4()} hide={isMobile}>
                    <MenuItem gap='8px' flex='1' align='left'>
                        {
                            menuIcon &&
                            <LeftLogo>
                                <img src={menuIcon} width='36' height='36' alt={`${title} left icon`}/>
                            </LeftLogo>
                        }

                        <LeftLogo>{title}</LeftLogo>
                    </MenuItem>
                    <MenuItem flex='3' align='center'>
                        {
                            links != null &&
                            links.map(i => {
                                return (
                                    <MenuItem clickable={true} gap='12px' key={'menu-item-' + uuidv4()} flex='1'
                                              align='center' onClick={() => i.onAction(i.path)}>
                                        <img src={i.icon} width='24' height='24' alt={`${title} left icon`}/>
                                        <div>
                                            {i.page}
                                        </div>
                                    </MenuItem>
                                )
                            })
                        }
                        {
                            toggle != null &&
                            <MenuItem flex='1' align='center'>
                                <Toggle key={'toggle-' + uuidv4()} isActive={toggle.isActive} toggle={toggle.toggle}
                                        labelText={toggle.labelText} variant={toggle.variant}/>
                            </MenuItem>
                        }
                    </MenuItem>
                    <MenuItem flex='1' align='right'>
                        {
                            rightAction != null && (
                                <ButtonWrapper>
                                    <ButtonWallet handleClick={rightAction.onAction}/>
                                </ButtonWrapper>
                            )
                        }
                    </MenuItem>
                </MenuHeader>
                <MenuHeader key={'menu-header-' + uuidv4()} hide={!isMobile}>
                    <MenuItem flex='1' align='left'>
                        <BurgerButton key={'burger-' + uuidv4()} open={menuBurger} setOpen={setMenuBurger}/>
                    </MenuItem>
                    <MenuItem flex='1' align='center'>
                        {
                            menuIcon &&
                            <CenterLogo>
                                <img src={menuIcon} width='45' height='45' alt={`${title} left icon`}/>
                            </CenterLogo>
                        }
                    </MenuItem>
                    <MenuItem flex='1' align='right'>
                        {
                            rightAction != null && (
                                <ButtonWrapper>
                                    <ButtonWallet handleClick={rightAction.onAction}/>
                                </ButtonWrapper>
                            )
                        }
                    </MenuItem>
                </MenuHeader>
                <MenuBody show={menuBurger}>
                    <MenuItem padding='20px' flex={0.3} align='right'>
                        <MenuItem flex='1' align='left'>
                            {
                                menuIcon &&
                                <img src={menuIcon} width='36' height='36' alt={`${title} left icon`}/>
                            }
                        </MenuItem>
                        <MenuItem flex='1' align='center'>
                            {title}
                        </MenuItem>
                        <MenuItem flex='1' align='right'>
                            <BurgerButton key={'burger-' + uuidv4()} open={menuBurger} setOpen={setMenuBurger}/>
                        </MenuItem>
                    </MenuItem>
                    {
                        links != null &&
                        links.map(i => {
                            return (
                                <MenuBodyItem>
                                    <MenuItem clickable={true} gap='12px' padding='8px 24px'
                                              key={'menu-item-' + uuidv4()} flex='1' align='left'
                                              onClick={() => i.onAction(i.path)}>
                                        <img src={i.icon} width='24' height='24' alt={`${title} left icon`}/>
                                        <MenuItemWrapped>
                                            {i.page}
                                        </MenuItemWrapped>
                                    </MenuItem>
                                </MenuBodyItem>
                            )
                        })
                    }
                    {
                        toggle != null &&
                        <MenuItem padding='20px' flex='1' align='center'>
                            <Toggle key={'toggle-' + uuidv4()} isActive={toggle.isActive} toggle={toggle.toggle}
                                    labelText={toggle.labelText} variant={toggle.variant}/>
                        </MenuItem>
                    }
                </MenuBody>
            </MenuBar>
        </MenuWrapped>
    )
}
