import styled from "styled-components";

export const CoinCardWrapped = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 8px;
  border-radius: 16px;
  background: ${({ theme }) => theme.background.coinCard};
  
  @media (min-width: 430px) {
  }
`;

export const CoinCardFooter = styled.div`
  display: flex;
  padding: 0px 8px 8px 16px;
  
  @media (min-width: 430px) {
    padding: 0px 32px 8px 48px;    
  }
`

export const InputWrapped = styled.div`
  padding: 12px 8px 8px 8px;
  
  @media (min-width: 430px) {
    padding: 16px 32px 8px 32px; 
  }
`

export const ButtonWrapped = styled.div<any>`
  display: flex;
  flex: 1;
  gap: 8px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  justify-content: ${props => props.left ? 'left' : 'right'};
`