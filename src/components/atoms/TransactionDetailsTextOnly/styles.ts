import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${({ theme }) => theme.color.tab.background};
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 16px 0 16px 0;
  flex-wrap: wrap;
  gap: 24px;
`;

export const LeftWrapper = styled.div<{ isMobile: boolean}>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.color.modalText};
  /* padding-left: 20px; */
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  margin-bottom: ${({ isMobile }) => isMobile ? '8px' : '0px' };
`;

export const RightWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;

export const TokenInfo = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  color: ${({theme}) => theme.color.default};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
`;