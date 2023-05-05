import React from 'react'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'
import { PoolItemDetailDesktop, PoolItemDetailMobile } from '../../atoms'

export interface PoolItemDetailsProps {
  closeCallback: () => void
  isOpen: boolean
  token0Icon: string
  token1Icon: string
  widthIcon?: number
  heightIcon?: number
  token0Symbol: string
  token1Symbol: string
  isFavorite?: boolean
  handleFavorite?: () => void
  yourLiquidity?: string
  liqudiity?: string
  assetsPooled: {
    asset0: string;
    asset1: string;
  };
  yourShare?: string
  volume7D?: string
  fees7D?: string
  apr?: string
}

export const PoolItemDetails = ({
  closeCallback,
  isOpen = false,
  token0Icon,
  token1Icon,
  widthIcon = 30,
  heightIcon = 30,
  token0Symbol,
  token1Symbol,
  isFavorite,
  handleFavorite,
  yourLiquidity,
  liqudiity,
  assetsPooled,
  yourShare,
  volume7D,
  fees7D,
  apr
}: PoolItemDetailsProps) => {
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE

  return (
    <>
      {isMobile ? (
        <PoolItemDetailMobile
          closeCallback={closeCallback}
          isOpen={isOpen}
          token0Icon={token0Icon}
          token1Icon={token1Icon}
          widthIcon={widthIcon}
          heightIcon={heightIcon}
          token0Symbol={token0Symbol}
          token1Symbol={token1Symbol}
          isFavorite={isFavorite}
          handleFavorite={handleFavorite}
          yourLiquidity={yourLiquidity}
          liqudiity={liqudiity}
          assetsPooled={assetsPooled}
          yourShare={Number(yourShare).toFixed(2)}
          volume7D={volume7D}
          fees7D={fees7D}
          apr={apr}
        />
      ) : (
        <PoolItemDetailDesktop
          closeCallback={closeCallback}
          isOpen={isOpen}
          token0Icon={token0Icon}
          token1Icon={token1Icon}
          widthIcon={widthIcon}
          heightIcon={heightIcon}
          token0Symbol={token0Symbol}
          token1Symbol={token1Symbol}
          isFavorite={isFavorite}
          handleFavorite={handleFavorite}
          yourLiquidity={yourLiquidity}
          liqudiity={liqudiity}
          assetsPooled={assetsPooled}
          yourShare={Number(yourShare).toFixed(2)}
          volume7D={volume7D}
          fees7D={fees7D}
          apr={apr}
        />
      )}
    </>
  )
}
