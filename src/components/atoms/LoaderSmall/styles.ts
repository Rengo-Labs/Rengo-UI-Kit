import styled, { css, keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 70vw;
`;

export const Loader = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${({theme}) => theme.background.menu};
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
`;
