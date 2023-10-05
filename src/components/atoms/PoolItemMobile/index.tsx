import React, { useEffect, useState } from 'react'
import {
  BTR,
  FavoriteIcon,
  Footer,
  Header,
  HeaderSubtitle,
  HeaderTitle,
  Subtitle,
  SubtitleValue,
  TD,
  TH,
  TR,
  Table,
  Title,
  Wrapper
} from './styles'
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
  accumulatedReward1,
  accumulatedReward2
}: IPoolTableItem) => {
  const theme = useTheme() as theme
  const [currentTheme, setCurrentTheme] = useState<theme | undefined>(theme)

  useEffect(() => {
    setCurrentTheme(theme)

    return () => {
      setCurrentTheme(theme)
    }
  }, [theme])

  const redirectToNetwork = (contractPackage: string) => {
    const link = `${networkLink}${contractPackage}`
    window.open(link, '_blank')
  }
  
  return (
    <Table>
      <thead>
      <TR>
        <TH>
          <HeaderTitle>
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
            <Title linkable={true} onClick={() => redirectToNetwork(contractPackage)}>{pool}</Title>
          </HeaderTitle>
        </TH>
        <TH>
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
              </ActionsInnerWrapper>
            </ActionsWrapper>
          </SeeActionsIconWrapper>
        </TH>
        </TR>
      </thead>

      <Divider />
      <tbody>
        <BTR>
          <TD>
            <HeaderSubtitle>
              <Subtitle>Liquidity</Subtitle>
              <SubtitleValue>{yourLiquidity}</SubtitleValue>
            </HeaderSubtitle>
          </TD>
          <TD>
            <HeaderSubtitle>
              <Subtitle>Your share</Subtitle>
              <SubtitleValue>{yourShare} %</SubtitleValue>
            </HeaderSubtitle>
          </TD>
        </BTR>

        <Divider />
          <BTR>
            <TD>
              <HeaderSubtitle>
                <Subtitle>Asset 1</Subtitle>
                <SubtitleValue>{assetsPoolToken0}</SubtitleValue>
              </HeaderSubtitle>
            </TD>
            <TD>
              <HeaderSubtitle>
                <Subtitle>Asset 2</Subtitle>
                <SubtitleValue>{assetsPoolToken1}</SubtitleValue>
              </HeaderSubtitle>
            </TD>
          </BTR>

        <Divider />
      <BTR>
        <TD>
          <HeaderSubtitle>
            <Subtitle>Volume 7D</Subtitle>
            <SubtitleValue>{volume7d}</SubtitleValue>
          </HeaderSubtitle>
        </TD>
        <TD>
          <HeaderSubtitle>
            <Subtitle>Fees 7D</Subtitle>
            <SubtitleValue>{fees7d}</SubtitleValue>
          </HeaderSubtitle>
        </TD>
      </BTR>
      <BTR>
        <TD>
          <HeaderSubtitle>
            <Subtitle>APR</Subtitle>
            <SubtitleValue>{apr}</SubtitleValue>
          </HeaderSubtitle>
        </TD>
        <TD>
          <HeaderSubtitle>
            <Subtitle>Weekly Rewards</Subtitle>
            <SubtitleValue>{accumulatedReward1}<br/>{accumulatedReward2}</SubtitleValue>
          </HeaderSubtitle>
        </TD>
      </BTR>

      </tbody>
    </Table>
  )
}
