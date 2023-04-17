import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  width: 380px;
  height: 274px;

  background: ${({ theme }) => theme.background.walletConnectedOptions}
  border-radius: 16px;
`;