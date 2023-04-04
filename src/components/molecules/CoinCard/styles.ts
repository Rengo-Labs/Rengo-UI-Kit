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
  padding: 8px 16px;
`

export const InputWrapped = styled.div<any>`
  display: flex;
  flex: 1;
  gap: 8px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  justify-content: ${props => props.left ? 'left' : 'right'};
`