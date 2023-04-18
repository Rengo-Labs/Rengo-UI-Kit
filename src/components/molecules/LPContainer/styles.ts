import styled from "styled-components";

export const LiquidityWrapped = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: 430px) {
    
  }
`

export const LiquidityTitle = styled.div`
  font-size: 18px;
  line-height: 26px;
  color: ${props => props.theme.color.modalText};

  letter-spacing: 0.02em;
`