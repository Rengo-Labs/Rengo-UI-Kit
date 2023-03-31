import React, { useEffect, useState } from 'react'
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
  SeeActionsIconWrapper} from './style'
import { useTheme } from 'styled-components'
import {theme} from '../../../styles/themes/themes'
import { HorizontalCardProps } from './types'

/**
  HorizontalCard Component.
  This component displays information about a token pair with associated liquidity and user pool information.
  It also provides action buttons for removing, swapping, viewing, adding liquidity and favoriting the token pair.
  @param {Object} props - The props object.
  @param {string} props.icon - The icon of the token pair.
  @param {Array<string>} props.tokenPairs - The names of the token pairs. An array of two tokens that make up a pair
  @param {Array<{name: string, value: string}>} props.pairsLiquidity - The liquidity values of the token pairs. An array of objects containing name-value pairs for liquidity information
  @param {Array<string>} props.userPoolInfo - The user pool information. An array of two strings representing user's liquidity and share information
  @param {Function} props.trashHandler - The function to handle remove action.
  @param {Function} props.swapHandler - The function to handle swap action.
  @param {Function} props.viewHandler - The function to handle view action.
  @param {Function} props.addLiquidityHandler - The function to handle add liquidity action.
  @param {Function} props.favoriteHandler - The function to handle favorite action.
  @returns {JSX.Element} A React JSX Element that displays the token pair, liquidity and user pool information with associated action buttons.
*/

export const HorizontalCard = ({
  icon,
  tokenPairs,
  pairsLiquidity,
  userPoolInfo,
  trashHandler,
  swapHandler,
  viewHandler,
  addLiquidityHandler,
  favoriteHandler }: HorizontalCardProps) => {
  const theme = useTheme() as theme;
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
      <TokenInfoWrapper>
        <TokenInfoInnerWrapper>
          <FavoriteIcon 
            color={currentTheme?.color.modalText}
            size={20}
            onClick={favoriteHandler}/>

          {icon && (
            <Image src={icon} alt='token' />
          )}

          <TokenPairsNamesWrapper>
            {tokenPairs && tokenPairs.map((name, i) => (
              <TokenName key={`token-name${name}-${i}`}>
                {i !== 0 && '\u00A0'}
                {name}
                {i !== tokenPairs.length - 1 && ' - '}
              </TokenName>
            ))}
          </TokenPairsNamesWrapper>
        </TokenInfoInnerWrapper>

        <SeeActionsIconWrapper actionsDialogActive={actionsDialogActive}>
          <SeeActionsIcon
            color={actionsDialogActive ? currentTheme?.color.white : currentTheme?.color.modalText}
            size={20}
            onClick={() => setActionsDialogActive(prev => !prev)}/>
        </SeeActionsIconWrapper>
   
      </TokenInfoWrapper>

      <RowWrapper>
        {pairsLiquidity && pairsLiquidity.map((pair, i) => (
          <PairsLiquidityWrapper key={`pairs-liquidity-${pair.name}-${pair.value}`}>
            <PairLiquidityName>{pair.name}</PairLiquidityName>
            <PairLiquidityValue>{pair.value}</PairLiquidityValue>
          </PairsLiquidityWrapper>
        ))}
      </RowWrapper>

      <RowUserPoolInfo>
        {userPoolInfo && userPoolInfo.map((info, i) => (
          <UserPoolInfoWrapper key={`user-pool-info-${info}-${i}`}>
            <UserPoolInfoName>{i === 0 ? 'Your Liquidity' : 'Your share' }</UserPoolInfoName>
            <UserPoolInfoValue>{info}</UserPoolInfoValue>
          </UserPoolInfoWrapper>
        ))}
      </RowUserPoolInfo>

      <ActionsWrapper actionsDialogActive={actionsDialogActive}>
        <ActionsInnerWrapper>
          <ActionItem
            onClick={actionsDialogActive ?  trashHandler : undefined}>
            <DeleteIcon
              color={currentTheme?.color.modalText}
              size={20}
              onClick={actionsDialogActive ?  undefined : trashHandler} />
            <ActionName>Remove</ActionName>
          </ActionItem>

          <ActionItem
            onClick={actionsDialogActive ?  swapHandler : undefined}>
            <ShuffleIcon
              color={currentTheme?.color.modalText}
              size={20}
              onClick={actionsDialogActive ?  undefined : swapHandler} />
            <ActionName>Swap</ActionName>
          </ActionItem>

          <ActionItem
            hidden={true}
            onClick={actionsDialogActive ?  viewHandler : undefined}>
            <ViewIcon
              color={currentTheme?.color.modalText}
              size={20}
              onClick={actionsDialogActive ?  undefined : viewHandler} />
              <ActionName>View</ActionName>
          </ActionItem>

          <ActionItem
            onClick={actionsDialogActive ?  addLiquidityHandler : undefined}>
            <AddLiquidityIcon
              color={currentTheme?.color.modalText}
              size={20}
              onClick={actionsDialogActive ?  undefined : addLiquidityHandler} />
              <ActionName>Add</ActionName>
          </ActionItem>
        </ActionsInnerWrapper>
      </ActionsWrapper>
    </Wrapper>
  )
}
