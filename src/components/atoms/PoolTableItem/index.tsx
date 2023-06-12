import React, { useEffect, useState } from 'react'
import {
  ActionItem,
  ActionName,
  ActionsInnerWrapper,
  ActionsWrapper,
  AddLiquidityIcon,
  DeleteIcon,
  FavoriteIcon,
  SeeActionsIcon,
  ViewIcon,
  SeeActionsIconWrapper,
  ShuffleIcon,
  Text,
  Icon,
  IconWrapper,
  TR,
  TD
} from './styles'
import { useTheme } from 'styled-components'
import { theme } from '../../../styles/themes/themes'
import favoriteIcon from './assets/favorite.svg'
import favoriteIconFill from './assets/favoriteFill.svg'

export interface IPoolTableItem {
  networkLink: string
  contractPackage: string
  id?: string
  token0Icon: any
  token1Icon: any
  widthIcon: number
  heightIcon: number
  pool: string
  yourLiquidity: string
  volume7d: string
  fees7d: string
  assetsPoolToken0: string
  assetsPoolToken1: string
  yourShare: string
  apr: string
  isFavorite?: boolean
  favoriteHandler?: () => void
  handleTrash: () => void
  handleSwap: () => void
  handleView: () => void
  handleAddLiquidity: () => void
  toggleDialog?: () => void
  actionsDialogActive?: boolean
  hideRemoveLiquidity: boolean
}

export const PoolTableItem = ({
  networkLink,
  contractPackage,
  token0Icon,
  token1Icon,
  widthIcon,
  heightIcon,
  pool,
  yourLiquidity,
  volume7d,
  fees7d,
  assetsPoolToken0,
  assetsPoolToken1,
  yourShare,
  apr,
  isFavorite,
  favoriteHandler,
  handleTrash,
  handleSwap,
  handleView,
  handleAddLiquidity,
  toggleDialog,
  actionsDialogActive,
  hideRemoveLiquidity = false
}: IPoolTableItem) => {
  const theme = useTheme() as theme
  const [currentTheme, setCurrentTheme] = useState<theme | undefined>(theme)

  useEffect(() => {
    setCurrentTheme(theme)

    return () => {
      setCurrentTheme(theme)
    }
  }, [theme])

  const redirectToNetwork = (hash: string) => {
    const link = `${networkLink}${hash}`
    window.open(link, '_blank')
  }
  
  return (
    <TR>
      <TD isFirstItem={true}>
        <FavoriteIcon
          src={isFavorite ? favoriteIconFill : favoriteIcon}
          width={20}
          height={20}
          onClick={favoriteHandler}
        />
        <IconWrapper>
          <Icon
            src={token0Icon}
            alt={pool}
            width={widthIcon}
            height={heightIcon}
          />
          <Icon
            src={token1Icon}
            alt={pool}
            width={widthIcon}
            height={heightIcon}
          />
        </IconWrapper>
        <Text linkable={true} onClick={() => redirectToNetwork(contractPackage)}>{pool}</Text>
      </TD>
      <TD>
        <Text>{yourLiquidity}</Text>
      </TD>
      <TD>
        <Text>{assetsPoolToken0}</Text>
      </TD>
      <TD>
        <Text>{assetsPoolToken1}</Text>
      </TD>
      <TD>
        <Text>{volume7d}</Text>
      </TD>
      <TD>
        <Text>{fees7d}</Text>
      </TD>
      <TD>
        <Text>{yourShare} %</Text>
      </TD>
      <TD>
        <Text>{apr} %</Text>
      </TD>
      <TD isLastItem={true}>
        <SeeActionsIconWrapper actionsDialogActive={actionsDialogActive}>
          <SeeActionsIcon
            color={
              actionsDialogActive
                ? currentTheme?.color.white
                : currentTheme?.color.modalText
            }
            size={20}
            onClick={toggleDialog}
          />
          <ActionsWrapper actionsDialogActive={actionsDialogActive}>
            <ActionsInnerWrapper>
                <ActionItem
                  onClick={actionsDialogActive ? handleAddLiquidity : undefined}
                >
                  <AddLiquidityIcon
                    color={currentTheme?.color.modalText}
                    size={20}
                  />
                  <ActionName>Add</ActionName>
                </ActionItem>

              {!hideRemoveLiquidity && (
                <ActionItem
                  onClick={actionsDialogActive ? handleTrash : undefined}
                >
                  <DeleteIcon color={currentTheme?.color.modalText} size={20} />
                  <ActionName>Remove</ActionName>
                </ActionItem>
              )}

              <ActionItem
                onClick={actionsDialogActive ? handleSwap : undefined}
              >
                <ShuffleIcon color={currentTheme?.color.modalText} size={20} />
                <ActionName>Swap</ActionName>
              </ActionItem>

              <ActionItem
                onClick={actionsDialogActive ? handleView : undefined}
              >
                <ViewIcon color={currentTheme?.color.modalText} size={20} />
                <ActionName>View</ActionName>
              </ActionItem>


            </ActionsInnerWrapper>
          </ActionsWrapper>
        </SeeActionsIconWrapper>
      </TD>
    </TR>
  )
}
