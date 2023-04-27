import React, { useEffect, useState } from 'react'
import {
  FavoriteIcon,
  Footer,
  Header,
  HeaderSubtitle,
  HeaderTitle,
  Subtitle,
  SubtitleValue,
  Title,
  Wrapper
} from './styles'
import { IHeader } from '../../molecules'
import { Divider } from '../Divider'
import { IPoolTableItem } from '../PoolTableItem'
import favoriteIcon from '../PoolTableItem/assets/favorite.svg'
import favoriteIconFill from '../PoolTableItem/assets/favoriteFill.svg'
import {
  ActionItem,
  ActionName,
  ActionsInnerWrapper,
  ActionsWrapper,
  AddLiquidityIcon,
  DeleteIcon,
  Icon,
  IconWrapper,
  SeeActionsIcon,
  SeeActionsIconWrapper,
  ShuffleIcon,
  ViewIcon
} from '../PoolTableItem/styles'
import { useTheme } from 'styled-components'
import { theme } from '../../../styles/themes/themes'

export const PoolItemMobile = ({
  token1Icon,
  token2Icon,
  widthIcon,
  heightIcon,
  pool,
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
      <Header>
        <HeaderTitle>
          <FavoriteIcon
            src={isFavorite ? favoriteIconFill : favoriteIcon}
            width={20}
            height={20}
            onClick={favoriteHandler}
          />
          <IconWrapper>
            <Icon src={token1Icon} alt={pool} width={widthIcon} height={heightIcon} />
            <Icon src={token2Icon} alt={pool} width={widthIcon} height={heightIcon} />
          </IconWrapper>
          <Title>{pool}</Title>
        </HeaderTitle>
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
              <ActionItem
                onClick={actionsDialogActive ? handleTrash : undefined}
              >
                <DeleteIcon color={currentTheme?.color.modalText} size={20} />
                <ActionName>Remove</ActionName>
              </ActionItem>

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
      </Header>
      <Divider />
      <Footer>
        <HeaderSubtitle>
          <Subtitle>Liquidity</Subtitle>
          <SubtitleValue>{liquidity}</SubtitleValue>
        </HeaderSubtitle>
        <HeaderSubtitle>
          <Subtitle>Volumen 7D</Subtitle>
          <SubtitleValue>{volumen7d}</SubtitleValue>
        </HeaderSubtitle>
      </Footer>
      <Divider />
      <Footer>
        <HeaderSubtitle>
          <Subtitle>Fees 7D</Subtitle>
          <SubtitleValue>{fees7d}</SubtitleValue>
        </HeaderSubtitle>
        <HeaderSubtitle>
          <Subtitle>APR</Subtitle>
          <SubtitleValue>{apr}</SubtitleValue>
        </HeaderSubtitle>
      </Footer>
    </Wrapper>
  )
}
