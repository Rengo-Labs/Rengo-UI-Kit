import React from 'react'
import {
  TokenInfoWrapper,
  TokenName,
  TokenPairsNamesWrapper,
  Wrapper,
  Image,
  PairsLiquidityWrapper,
  PairLiquidityName,
  PairLiquidityValue,
  UserPoolInfoWrapper,
  UserPoolInfoName,
  UserPoolInfoValue,
  ActionsWrapper,
  DeleteIcon,
  ShuffleIcon,
  AddLiquidityIcon,
  FavoriteIcon,
  SeeActionsIcon,
  TokenInfoInnerWrapper,
  RowWrapper,
  RowUserPoolInfo,
  ActionName,
  ActionItem,
  ViewIcon,
  ActionsInnerWrapper,
  SeeActionsIconWrapper,
  UserPoolInfoMobileWrapper,
  PairsLiquidityMobileWrapper,
  MobilleContainer,
  MobileRow,
  MobileTextContent,
  ImageContainer, AddStakeIcon, UnStakeIcon
} from './style'
import { useTheme } from 'styled-components'
import {theme} from '../../../styles/themes/themes'
import { HorizontalCardProps } from './types'
import { useDeviceType } from '../../../hooks'
import { DeviceType } from '../../../hooks/types'
import {DollarSign} from "react-feather";

/**
  HorizontalCard Component.
  This component displays information about a token pair with associated liquidity and user pool information.
  It also provides action buttons for removing, swapping, viewing, adding liquidity and favoriting the token pair.
  @param {Object} props - The props object.
  @param {string} props.icon - The icon of the token pair.
  @param {boolean} props.hasFavorite - Boolean to control the display of the FavoriteIcon
  @param {Array<string>} props.tokenPairs - The names of the token pairs. An array of two tokens that make up a pair
  @param {Array<{name: string, value: string}>} props.pairsLiquidity - The liquidity values of the token pairs. An array of objects containing name-value pairs for liquidity information
  @param {Array<string>} props.userPoolInfo - The user pool information. An array of two strings representing user's liquidity and share information
  @param {Function} props.trashHandler - The function to handle remove action.
  @param {Function} props.swapHandler - The function to handle swap action.
  @param {Function} props.viewHandler - The function to handle view action.
  @param {Function} props.itemHandler - The function to handle item click action.
  @param {Function} props.addLiquidityHandler - The function to handle add liquidity action.
  @param {Function} props.favoriteHandler - The function to handle favorite action.
  @param {Function} props.toggleDialog - The function to handle toggle dialog action.
  @param {boolean} props.actionsDialogActive - Boolean to control the display of the ActionsDialog
  @returns {JSX.Element} A React JSX Element that displays the token pair, liquidity and user pool information with associated action buttons.
*/

export const HorizontalCard = ({
  networkLink,
  contractPackage,
  firstTokenIcon,
  secondTokenIcon,
  tokenPairs,
  pairsLiquidity,
  userPoolInfo,
  hasFavorite,
  trashHandler,
  swapHandler,
  viewHandler,
  itemHandler,
  stakeHandler,
  unstakeHandler,
  claimHandlerWETH,
  claimHandlerCST,
  addLiquidityHandler,
  favoriteHandler,
  toggleDialog,
  actionsDialogActive,
  hasBalance = false,
  hasStake = false,
  hasGauge = false,
  rewardETHTitle = 'WETH',
  rewardCSTTitle = 'CST',
  hasClaimWETH = false,
  hasClaimCST = false,
  }: HorizontalCardProps) => {
  const theme = useTheme() as theme;
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE
  const IDX_LAST_COLUMN_PAIRS_LP = 6;
  const redirectToNetwork = (contractPackage: string) => {
    const link = `${networkLink}${contractPackage}`
    window.open(link, '_blank')
  }
  const handleItemDetails = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    itemHandler && itemHandler()
  }

  const handleSwap = (e: React.MouseEvent<HTMLDivElement | SVGElement, MouseEvent>) => {
    e.stopPropagation()
    swapHandler()
  }

  const handleTrash = (e: React.MouseEvent<HTMLDivElement | SVGElement, MouseEvent>) => {
    e.stopPropagation()
    trashHandler()
  }

  const handleView = (e: React.MouseEvent<HTMLDivElement | SVGElement, MouseEvent>) => {
    e.stopPropagation()
    viewHandler()
  }

  const handleStake = (e: React.MouseEvent<HTMLDivElement | SVGElement, MouseEvent>) => {
    e.stopPropagation()
    if (stakeHandler != undefined) {
      stakeHandler()
    }
  }

  const handleUnstake = (e: React.MouseEvent<HTMLDivElement | SVGElement, MouseEvent>) => {
    e.stopPropagation()
    if (unstakeHandler != undefined) {
      unstakeHandler()
    }
  }

  const handleClaimWETH = (e: React.MouseEvent<HTMLDivElement | SVGElement, MouseEvent>) => {
    e.stopPropagation()
    if (claimHandlerWETH != undefined) {
      claimHandlerWETH()
    }
  }

  const handleClaimCST = (e: React.MouseEvent<HTMLDivElement | SVGElement, MouseEvent>) => {
    e.stopPropagation()
    if (claimHandlerCST != undefined) {
      claimHandlerCST()
    }
  }


  const pairsLiquidityMiddleIndex = Math.floor(pairsLiquidity.length / 2);

  return (
    <Wrapper onClick={handleItemDetails}>
      <TokenInfoWrapper>
        <TokenInfoInnerWrapper>
          {hasFavorite && (
            <FavoriteIcon
            color={theme?.color.modalText}
            size={20}
            onClick={favoriteHandler}/>
          )}
          <ImageContainer>

          {firstTokenIcon && (
            <Image src={firstTokenIcon} alt='token' />
            )}

          {secondTokenIcon && (
            <Image src={secondTokenIcon} alt='token' />
            )}
            </ImageContainer>

          <TokenPairsNamesWrapper linkable={true} onClick={() => redirectToNetwork(contractPackage)}>
            {tokenPairs && tokenPairs.map((name, i) => (
              <TokenName key={`token-name${name}-${i}`}>
                {i !== 0 && '\u00A0'}
                {name}
                {i !== tokenPairs.length - 1 && ' - '}
              </TokenName>
            ))}
          </TokenPairsNamesWrapper>
        </TokenInfoInnerWrapper>

        <SeeActionsIconWrapper hidden={true} actionsDialogActive={actionsDialogActive}>
          <SeeActionsIcon
            hidden={true}
            color={actionsDialogActive ? theme?.color.white : theme?.color.modalText}
            size={20}
            onClick={() => toggleDialog()}/>
        </SeeActionsIconWrapper>

      </TokenInfoWrapper>

      {!isMobile && (
          <RowUserPoolInfo>
            {userPoolInfo && userPoolInfo.map((info, i) => (
              <UserPoolInfoWrapper isLiquidity={info.title !== 'Your Share'} key={`user-pool-info-${info.value}-${i}`}>
                <UserPoolInfoName>{info.title}</UserPoolInfoName>
                <UserPoolInfoValue>{info.value}</UserPoolInfoValue>
              </UserPoolInfoWrapper>
            ))}
          </RowUserPoolInfo>
        )
      }

      {!isMobile && (
          <RowWrapper>
            {pairsLiquidity && pairsLiquidity.map((pair, i) => (
              <PairsLiquidityWrapper key={`pairs-liquidity-${pair.name}-${pair.value}-${i}`} isLastItem={i == 3 || i == pairsLiquidity.length -1}>
                <PairLiquidityName>{pair.name}</PairLiquidityName>
                <PairLiquidityValue>{pair.value}</PairLiquidityValue>
              </PairsLiquidityWrapper>
            ))}
          </RowWrapper>
        )
      }

      {isMobile && (
        <MobilleContainer>
          <MobileRow>
            {userPoolInfo && userPoolInfo.map((info, i) => (
              <UserPoolInfoMobileWrapper isLiquidity={info.title !== 'Your Share'}
                                  key={`user-pool-mobile-info-${info.value}-${i}`}>
                <MobileTextContent>
                  <UserPoolInfoName>{info.title}</UserPoolInfoName>
                  <UserPoolInfoValue>{info.value}</UserPoolInfoValue>
                </MobileTextContent>
              </UserPoolInfoMobileWrapper>
            ))}
          </MobileRow>

          <MobileRow>
            {pairsLiquidity && pairsLiquidity.slice(0, pairsLiquidityMiddleIndex).map((pair, i) => (

              <PairsLiquidityMobileWrapper key={`pairs-mobile-liquidity-${pair.name}-${pair.value}`}>
                <MobileTextContent>
                  <PairLiquidityName>{pair.name}</PairLiquidityName>
                  <PairLiquidityValue>{pair.value}</PairLiquidityValue>
                </MobileTextContent>
              </PairsLiquidityMobileWrapper>

            ))}
          </MobileRow>

          <MobileRow>
            {pairsLiquidity && pairsLiquidity.slice(pairsLiquidityMiddleIndex, IDX_LAST_COLUMN_PAIRS_LP).map((pair, i) => (

              <PairsLiquidityMobileWrapper key={`pairs-mobile-liquidity-${pair.name}-${pair.value}`}>
                <MobileTextContent>
                  <PairLiquidityName>{pair.name}</PairLiquidityName>
                  <PairLiquidityValue>{pair.value}</PairLiquidityValue>
                </MobileTextContent>
              </PairsLiquidityMobileWrapper>

            ))}
          </MobileRow>

          <MobileRow>
            {pairsLiquidity && pairsLiquidity.slice(IDX_LAST_COLUMN_PAIRS_LP).map((pair, i) => (

            <PairsLiquidityMobileWrapper key={`pairs-mobile-liquidity-${pair.name}-${pair.value}`}>
              <MobileTextContent>
                <PairLiquidityName>{pair.name}</PairLiquidityName>
                <PairLiquidityValue>{pair.value}</PairLiquidityValue>
              </MobileTextContent>
            </PairsLiquidityMobileWrapper>

            ))}
          </MobileRow>
        </MobilleContainer>

      )}


      <SeeActionsIconWrapper hidden={false} actionsDialogActive={actionsDialogActive}>
        <SeeActionsIcon
          hidden={false}
          color={actionsDialogActive ? theme?.color.white : theme?.color.modalText}
          size={20}
          onClick={() => toggleDialog()}/>
      </SeeActionsIconWrapper>

      <ActionsWrapper actionsDialogActive={actionsDialogActive}>
        <ActionsInnerWrapper>
          <ActionItem
            onClick={actionsDialogActive ? addLiquidityHandler : undefined}>
            <AddLiquidityIcon
              color={theme?.color.modalText}
              size={20}
              onClick={actionsDialogActive ? undefined : addLiquidityHandler}/>
            <ActionName>Add</ActionName>
          </ActionItem>

          {
            hasBalance &&
            <ActionItem
                onClick={actionsDialogActive ? handleTrash : undefined}>
                <DeleteIcon
                    color={theme?.color.modalText}
                    size={20}
                    onClick={actionsDialogActive ? undefined : handleTrash}/>
                <ActionName>Remove</ActionName>
            </ActionItem> 
          }

          <ActionItem
            onClick={actionsDialogActive ? handleSwap : undefined}>
            <ShuffleIcon
              color={theme?.color.modalText}
              size={20}
              onClick={actionsDialogActive ? undefined : handleSwap}/>
            <ActionName>Swap</ActionName>
          </ActionItem>

          <ActionItem
            hidden={true}
            onClick={actionsDialogActive ? handleView : undefined}>
            <ViewIcon
              color={theme?.color.modalText}
              size={20}
              onClick={actionsDialogActive ? undefined : handleView}/>
            <ActionName>View</ActionName>
          </ActionItem>

          {
            hasGauge &&
            <ActionItem
                onClick={actionsDialogActive ? handleStake : undefined}>
                <AddStakeIcon
                    color={theme?.color.modalText}
                    size={20}
                    onClick={actionsDialogActive ? undefined : handleStake}/>
                <ActionName>Stake</ActionName>
            </ActionItem>
          }

          {
            hasStake &&
            <ActionItem
              onClick={actionsDialogActive ? handleUnstake : undefined}>
              <UnStakeIcon
                color={theme?.color.modalText}
                size={20}
                onClick={actionsDialogActive ? undefined : handleUnstake}/>
              <ActionName>Unstake</ActionName>
            </ActionItem>
          }

          {
            hasStake && hasClaimWETH &&
              <ActionItem
                  onClick={actionsDialogActive ? handleClaimWETH : undefined}>
                  <DollarSign
                      color={theme?.color.modalText}
                      size={20}
                      onClick={actionsDialogActive ? undefined : handleClaimWETH}/>
                  <ActionName>Claim {rewardETHTitle}</ActionName>
              </ActionItem>
          }

          {
              hasStake && hasClaimCST &&
              <ActionItem
                  onClick={actionsDialogActive ? handleClaimCST : undefined}>
                <DollarSign
                    color={theme?.color.modalText}
                    size={20}
                    onClick={actionsDialogActive ? undefined : handleClaimWETH}/>
                <ActionName>Claim {rewardCSTTitle}</ActionName>
              </ActionItem>
          }
        </ActionsInnerWrapper>
      </ActionsWrapper>
    </Wrapper>
  )
}
