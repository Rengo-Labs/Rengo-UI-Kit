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
  TokenPairWrapper,
  Wrapper,
  Icon,
  IconWrapper
} from './styles'
import { useTheme } from 'styled-components'
import { theme } from '../../../styles/themes/themes'
import favoriteIcon from './assets/favorite.svg'
import favoriteIconFill from './assets/favoriteFill.svg'

export interface IPoolTableItem {
  id?: string
  token0Icon: any
  token1Icon: any
  widthIcon: number
  heightIcon: number
  pool: string
  liquidity: string
  volume7d: string
  fees7d: string
  apr: string
  isFavorite?: boolean
  favoriteHandler?: () => void
  handleTrash: () => void
  handleSwap: () => void
  handleView: () => void
  handleAddLiquidity: () => void
}

export const PoolTableItem = ({
  token0Icon,
  token1Icon,
  widthIcon,
  heightIcon,
  pool,
  liquidity,
  volume7d,
  fees7d,
  apr,
  isFavorite,
  favoriteHandler,
  handleTrash,
  handleSwap,
  handleView,
  handleAddLiquidity
}: IPoolTableItem) => {
  const theme = useTheme() as theme
  const [currentTheme, setCurrentTheme] = useState<theme | undefined>(theme)
  const [actionsDialogActive, setActionsDialogActive] = useState(false)

  useEffect(() => {
    setCurrentTheme(theme)

    return () => {
      setCurrentTheme(theme)
    }
  }, [theme])

  return (
    <Wrapper>
      <TokenPairWrapper>
        <FavoriteIcon
          src={isFavorite ? favoriteIconFill : favoriteIcon}
          width={20}
          height={20}
          onClick={favoriteHandler}
        />
        <IconWrapper>
          <Icon src={token0Icon} alt={pool} width={widthIcon} height={heightIcon} />
          <Icon src={token1Icon} alt={pool} width={widthIcon} height={heightIcon} />
        </IconWrapper>
        <Text>{pool}</Text>
      </TokenPairWrapper>
      <Text>${liquidity}</Text>
      <Text>${volume7d}</Text>
      <Text>${fees7d}</Text>
      <Text>${apr}</Text>
      <SeeActionsIconWrapper actionsDialogActive={actionsDialogActive}>
        <SeeActionsIcon
          color={
            actionsDialogActive
              ? currentTheme?.color.white
              : currentTheme?.color.modalText
          }
          size={20}
          onClick={() => setActionsDialogActive((prev) => !prev)}
        />
        <ActionsWrapper actionsDialogActive={actionsDialogActive}>
          <ActionsInnerWrapper>
            <ActionItem onClick={actionsDialogActive ? handleTrash : undefined}>
              <DeleteIcon color={currentTheme?.color.modalText} size={20} />
              <ActionName>Remove</ActionName>
            </ActionItem>

            <ActionItem onClick={actionsDialogActive ? handleSwap : undefined}>
              <ShuffleIcon color={currentTheme?.color.modalText} size={20} />
              <ActionName>Swap</ActionName>
            </ActionItem>

            <ActionItem onClick={actionsDialogActive ? handleView : undefined}>
              <ViewIcon color={currentTheme?.color.modalText} size={20} />
              <ActionName>View</ActionName>
            </ActionItem>

            <ActionItem
              onClick={actionsDialogActive ? handleAddLiquidity : undefined}
            >
              <AddLiquidityIcon
                color={currentTheme?.color.modalText}
                size={20}
              />
              <ActionName>Add</ActionName>
            </ActionItem>
          </ActionsInnerWrapper>
        </ActionsWrapper>
      </SeeActionsIconWrapper>
    </Wrapper>
  )
}
