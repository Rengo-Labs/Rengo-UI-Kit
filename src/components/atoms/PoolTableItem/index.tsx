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
  Wrapper
} from './styles'
import { useTheme } from 'styled-components'
import { theme } from '../../../styles/themes/themes'
import favoriteIcon from './assets/favorite.svg'
import favoriteIconFill from './assets/favoriteFill.svg'

export interface IPoolTableItem {
  id?: string
  tokenPairIcon: string
  tokenPairs: Array<string>
  liquidity: string
  volumen7d: string
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
  tokenPairIcon,
  tokenPairs,
  liquidity,
  volumen7d,
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
        <img src={tokenPairIcon} alt={`${tokenPairs[0]}-${tokenPairs[1]}`} />
        <Text>
          {tokenPairs[0]}-{tokenPairs[1]}
        </Text>
      </TokenPairWrapper>
      <Text>${liquidity}</Text>
      <Text>${volumen7d}</Text>
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
