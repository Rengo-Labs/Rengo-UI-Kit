import styled from "styled-components";

export const LiquidityWrapped = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: 430px) {
    
  }
`

export const TitleWrapped = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const LiquidityTitle = styled.div`
  font-size: 18px;
  line-height: 26px;
  color: ${props => props.theme.color.modalText};

  justify-content: left;
  flex: 1;
  letter-spacing: 0.02em;
`

export const ToggleWrapped = styled.div`
  justify-content: right;
  flex: 1;
`