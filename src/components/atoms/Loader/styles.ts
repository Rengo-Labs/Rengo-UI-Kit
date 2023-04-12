import styled, { css, keyframes } from 'styled-components'

interface PulseAnimationProps {
  percentValues: string[];
  className?: string;
}

export const Wrapper = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const pulse = (percentValues: string[]) => keyframes`
  ${percentValues.map((value, index) => {
    if (index * 5 === 85 || index * 5 === 95) {
      return
    }
    return `${index * 5}% { background-image: url(${value}); }`
})}
`;

export const AnimatedImg = styled.div<PulseAnimationProps>`
  animation: ${({ percentValues }: PulseAnimationProps) => css`${pulse(percentValues)} 800ms linear infinite`};
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 48px;
    height: 58px;
  }
`;