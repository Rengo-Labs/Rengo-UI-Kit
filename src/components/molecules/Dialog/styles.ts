import styled from 'styled-components'


export const Container = styled.dialog`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  z-index: 999;
  background: ${({ theme }) =>  theme.background.searchInput};
  border: ${({ theme }) => `1px solid ${theme.border.default}`};
  box-shadow: 0px 0px 15px 15px rgba(227, 223, 253, 0.05);
  border-radius: 16px;
`;

export const DialogHeaderContainer = styled.div`
  width: 100%;
  /* padding: 20px; */
  box-shadow: 0px 0px 15px 15px rgba(227, 223, 253, 0.05);
  /* border-radius: 16px; */
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: ${({ theme }) =>  theme.background.searchInput};
  border: ${({ theme }) => `1px solid ${theme.border.default}`};
`;

export const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const DialogTitle = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${({ theme }) =>  theme.color.default};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;