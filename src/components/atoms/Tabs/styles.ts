import styled from 'styled-components';

type TTab = {
  isActive?: boolean;
};

export const WrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  max-height: 42px;
`;

export const Tab = styled.div<TTab>`
  display: flex;
  width: 100%;
  min-width: 320px;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  background-color: ${({theme}) => theme.color.tab.background};
  border-bottom: ${({theme, isActive}) => `4px solid ${isActive ? theme.color.tab.borderActive : theme.color.tab.borderInactive}`};
  cursor: pointer;
  &:first-child {
    border-radius: 16px 0 0 0;
  };
  &:last-child {
    border-radius: 0 16px 0 0; 
  };
`;

export const TabText = styled.p<TTab>`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${({theme, isActive}) => isActive ? theme.color.tab.textActive : theme.color.tab.textInactive};
`;
