import styled from "styled-components";


export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(113, 95, 245, 0.5);
  color: #FFFFFF;
  display: flex;
  z-index: 999999;
`;
export const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  color: #FFFFFF;
  background: transparent;
  opacity: 1;
  z-index: 999999;
`;

export const ImageContainer = styled.div``;
export const ButtonContainer = styled.div<{isMobile: boolean}>`
  display: flex;
  width: ${({isMobile}) => isMobile ? '100%' : '366px'};
  padding: 16px 64px;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Title = styled.h1<{isMobile: boolean}>`
  font-size: ${({isMobile}) => isMobile ? '24px' : '36px'};
  font-family: ${({theme}) => theme.typography.primaryFont};
  font-style: normal;
  font-weight: 800;
  line-height: ${({isMobile}) => isMobile ? '20px' : '71px'};
  letter-spacing: 2.75px;
`;

export const Subtitle = styled.h2<{isMobile: boolean}>`
  font-size: 5.371vw;
  font-family: ${({theme}) => theme.typography.primaryFont};
  font-style: normal;
  font-weight: 800;
  line-height: ${({isMobile}) => isMobile ? '20px' : '71px'};
  letter-spacing: 2.75px;
  text-align: center;
`;
