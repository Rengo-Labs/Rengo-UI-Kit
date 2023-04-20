import styled from "styled-components";

export const MenuWrapped = styled.div`
  //position: fixed;
  //width: 100%;
  //top: 0;
  //left: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 8px;
  background: ${({ theme }) => theme.background.coinCard};
`

export const MenuBar = styled.div`
  display: flex; 
  flex-direction: column;
  background: ${props => props.theme.background.menu};
`

export const MenuHeader = styled.div<any>`
  padding: 8px 15px;
  display: ${props => props.hide ? 'none' : 'flex'};
  flex-direction: row;
  justify-content: ${props => props.align ?? 'initial'};
  gap: 10px;
  
  @media (min-width: 780px) {
    display: ${props => props.hide ? 'flex' : 'none'};
    padding: 18px 70px;
  }
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const MenuItem = styled.div<any>`
  display: flex;
  flex: 1;
  justify-content: ${props => props.align != null ? props.align : 'left'};
  align-items: center;
  color: white;
  padding: ${props => props.padding ?? '0'};
  
  gap: ${props => props.gap ?? '0'};
  
  ${props => props.clickable != null && props.clickable ? 'cursor: pointer; transition: all 0.2s ease-in-out;' : 'cursor: auto;'}
  
  ${props => props.clickable != null && props.clickable ?
    '&:active { transform: scale(0.95); filter: brightness(0.9);}' : ''
  }
  
  @media (min-width: 780px) {
    flex: ${props => props.flex ?? '1'};
  }
`

export const LeftLogo = styled.div`
  display: none;
  
  @media (min-width: 780px) {
    display: flex;
  }
`

export const CenterLogo = styled.div`
  display: flex;
`

export const MenuContainer = styled.div`
  background: ${props => props.theme.background.default};
`

export const MenuBody = styled.div<any>`
  /*display: ${props => props.show ? 'flex' : 'none'};*/
  flex-direction: column;
  top: ${props => props.show ? '0%' : '-100%'};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  padding: 45px;
  background: ${props => props.theme.background.menu};
  transition: all 0.5s linear;
  
  :first-child {
    transform: ${props => props.show ? '-100%' : '0%'};
  }
  
  :nth-child(2) {
    transform: ${props => props.show ? '0%' : '-100%'};
  }
  
  @media (min-width: 780px) {
    display: none;
    width: auto;
    height: auto;
    position: relative;
    z-index: 0;
    padding: 8px 15px;
  }
`

export const MenuBodyItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.border.darkLilac};
`

export const MenuItemWrapped = styled.div`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.05em;
`
