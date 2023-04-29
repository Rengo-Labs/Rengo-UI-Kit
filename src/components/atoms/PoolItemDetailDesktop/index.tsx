import React from 'react'
import { Dialog, Icons } from '../../atoms'
import {
  CloseButton,
  Container,
  DialogHeader,
  DialogHeaderContainer,
  DialogTitle,
  FavoriteIcon,
  Icon,
  IconWrapper,
  InnerContainer,
  PoolKey,
  PoolKeyPairContainer,
  PoolText,
  PoolValue,
  TokenPairWrapper
} from './styles'
import { useTheme } from 'styled-components'
import { theme } from '../../../styles/themes/themes'
import favoriteIcon from '../PoolTableItem/assets/favorite.svg'
import favoriteIconFill from '../PoolTableItem/assets/favoriteFill.svg'
import { PoolItemDetailsProps } from '../../molecules'

export const PoolItemDetailDesktop = ({
  closeCallback,
  isOpen,
  token0Icon,
  token1Icon,
  widthIcon,
  heightIcon,
  token0Symbol,
  token1Symbol,
  isFavorite,
  favoriteHandler,
  yourLiquidity,
  liqudiity,
  assetsPooled,
  yourShare,
  volume7D,
  fees7D,
  apr
}: PoolItemDetailsProps) => {
  const theme = useTheme() as theme

  return (
    <>
      {isOpen && (
        <Dialog onClose={closeCallback} isOpen={isOpen}>
          <Container>
            <DialogHeaderContainer>
              <DialogHeader>
                <DialogTitle>View all info</DialogTitle>
                <CloseButton onClick={closeCallback}>
                  <Icons name='X' size={23} color={theme.color.modalText} />
                </CloseButton>
              </DialogHeader>
            </DialogHeaderContainer>
            <InnerContainer>
              <TokenPairWrapper>
                <FavoriteIcon
                  src={isFavorite ? favoriteIconFill : favoriteIcon}
                  width={20}
                  height={20}
                  onClick={favoriteHandler}
                />
                <IconWrapper>
                  <Icon
                    src={token0Icon}
                    alt={token0Symbol}
                    width={widthIcon}
                    height={heightIcon}
                  />
                  <Icon
                    src={token1Icon}
                    alt={token1Symbol}
                    width={widthIcon}
                    height={heightIcon}
                  />
                </IconWrapper>
                <PoolText>
                  {token0Symbol} - {token1Symbol}
                </PoolText>
              </TokenPairWrapper>
              <PoolKeyPairContainer>
                <PoolKey>Your Liquidity</PoolKey>
                <PoolValue>{yourLiquidity} CSPR</PoolValue>
              </PoolKeyPairContainer>
              <PoolKeyPairContainer>
                <PoolKey>Assets Pooled</PoolKey>
                <PoolValue>
                  {assetsPooled} {token0Symbol}
                </PoolValue>
                <PoolValue>
                  {assetsPooled} {token1Symbol}
                </PoolValue>
              </PoolKeyPairContainer>
              <PoolKeyPairContainer>
                <PoolKey>Your Share</PoolKey>
                <PoolValue>
                  {yourShare} {token1Symbol}
                </PoolValue>
              </PoolKeyPairContainer>
              <PoolKeyPairContainer>
                <PoolKey>Liquidity</PoolKey>
                <PoolValue>{liqudiity}</PoolValue>
              </PoolKeyPairContainer>
              <PoolKeyPairContainer>
                <PoolKey>Volume 7D</PoolKey>
                <PoolValue>{volume7D}</PoolValue>
              </PoolKeyPairContainer>
              <PoolKeyPairContainer>
                <PoolKey>FEES 7D</PoolKey>
                <PoolValue>{fees7D}</PoolValue>
              </PoolKeyPairContainer>
              <PoolKeyPairContainer>
                <PoolKey>APR</PoolKey>
                <PoolValue>{apr}</PoolValue>
              </PoolKeyPairContainer>
            </InnerContainer>
          </Container>
        </Dialog>
      )}
    </>
  )
}
