import styled from 'styled-components';
// @ts-ignore
import hero from '../../../assets/background/hero.png'
import logo from '../../../assets/icons/casper-logo.svg'
import tokens from '../../../assets/icons/token-group.svg'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${hero});
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: 100% 100%;
  justify-content: space-evenly;
`;

export const Logo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  width: 100%;
  height: 60px;
  overflow-y: hidden;

`;

export const Title = styled.section<{ isMobile: boolean }>`
  font-family: ${({theme}) => theme.typography.primaryFont};
  font-style: normal;
  font-weight: bold;
  font-size: ${({isMobile}) => isMobile ? '35px' : '55px'};
  line-height: ${({isMobile}) => isMobile ? '40px' : '71px'};
  letter-spacing: 0.02em;
  color: #FFFFFF;
  width: ${({isMobile}) => isMobile ? '90%' : '60%'};
  text-align: center;
`;

export const Icons = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${tokens});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  width: 100%;
  height: 57px;
`;
