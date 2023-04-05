import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 93%;
  -webkit-appearance: none;
  height: 0px;
  background: #efefef;
  outline: none;
  -webkit-transition: .2s;
  border: ${({ theme }) => `0.5px solid ${theme.border.slider};`};

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.background.sliderThumb};
    cursor: pointer;
  }

  ::-moz-range-thumb {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.background.sliderThumb};
    cursor: pointer;
  }
`;


export const PercentageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;

  span:first-child {
    color: #FF00FF;
  }

`;

export const PercentageLabel = styled.span`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.02em;
  font-family: ${({theme}) => theme.typography.secondaryFont};
  color: ${({ theme }) => theme.color.modalText};
`;