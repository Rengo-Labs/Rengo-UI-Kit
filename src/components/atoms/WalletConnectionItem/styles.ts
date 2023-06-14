import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  background: ${({ theme }) => theme.color.wallet.background};
`

export const Icon = styled.img`
  margin-right: 5px;
  width: 24px;
  height: 24px;
`

export const Text = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.default};
`;
