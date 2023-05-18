import styled, { css } from 'styled-components'

interface Props {
  isSelected?: boolean
  // thumbPosition?: number
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input<Props>`
  width: 93%;
  -webkit-appearance: none;
  height: 0px;
  background: #efefef;
  outline: none;
  -webkit-transition: .2s;
  border: ${({ theme }) => `0.5px solid ${theme.border.slider};`};
    transition: transform 3s ease-in-out;
    animation: slideIn 3s ease-out;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.background.sliderThumb};
    cursor: pointer;
    transition: transform 0.9s ease-in-out;
    /* animation: slideIn 3s ease-out; */
  }

  ::-moz-range-thumb {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.background.sliderThumb};
    cursor: pointer;
    transition: transform 3s ease-in-out;
    animation: slideIn 3s ease-out;
  }
`;


export const PercentageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

export const PercentageLabel = styled.span<Props>`
  cursor: pointer;
  width: 55px;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  font-weight: ${({ isSelected }) => isSelected ? 600 : 400};
  letter-spacing: 0.02em;
  font-family: ${({theme}) => theme.typography.secondaryFont};
  color: ${({ theme, isSelected }) => isSelected ? theme.background.sliderThumb : theme.color.modalText};
  ${({ isSelected }) =>
    isSelected &&
    css`
      animation: slideIn 0.3s forwards ease-in-out;
      font-weight: bold;
    `}
`;