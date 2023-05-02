import React from 'react'
import { Wrapper, TrailCircular } from './styles'

export interface IButtonUpdateCircle {
  getProgress: () => number
  clearProgress?: () => void
  strokeWidth: number
  handlerAction: () => Promise<void>
}

export const ButtonUpdateCircle = ({
  getProgress,
  clearProgress,
  strokeWidth,
  handlerAction
}: IButtonUpdateCircle) => {
  const radius = 50 - strokeWidth / 2
  const pathDescription = `
        M 50,50 m 0,-${radius}
        a ${radius},${radius} 0 1 1 0,${2 * radius}
        a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `
  const diameter = Math.PI * 2 * radius
  const click = async () => {
    try {
      if (clearProgress) {
        clearProgress()
        await handlerAction()
      }
    } catch (e) {
      console.log('error ', e)
    }
  }

  const getOffset = () => {
    const progress = getProgress()
    const offset = ((100 - progress) / 100) * diameter
    return offset
  }

  return (
    <Wrapper>
      <svg
        viewBox='0 0 100 100'
        width={26}
        height={26}
        style={{ display: 'flex' }}
        onClick={click}
      >
        <TrailCircular
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          diameter={diameter}
          percentage={100}
          isPrincipal={false}
          style={{
            strokeDasharray: `${diameter}px ${diameter}px`,
            strokeDashoffset: `${((100 - 100) / 100) * diameter}px`
          }}
        />

        <TrailCircular
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          isPrincipal={true}
          diameter={diameter}
          percentage={getProgress}
          style={{
            strokeDasharray: `${diameter}px ${diameter}px`,
            strokeDashoffset: `${getOffset()}px`
          }}
        />
      </svg>
    </Wrapper>
  )
}
