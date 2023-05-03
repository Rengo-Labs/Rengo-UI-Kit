import styled from 'styled-components'

export const Container = styled.div<{ isMobile: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ isMobile }) => isMobile ? 'column' : 'row' };
  justify-content: space-between;
  align-items: ${({ isMobile }) => isMobile ? 'center' : 'stretch' };
  gap: ${({ isMobile }) => isMobile ? '10px' : '0' };
`;

export const ActionsSubContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  justify-content: ${({ isMobile }) => isMobile ? 'space-between' : 'right' };
  width: ${({ isMobile }) => isMobile ? '100%' : '300px' };
  gap: 24px;
`;

export const UpdateButtonContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  padding-left: ${({ isMobile }) => isMobile ? '10px' : '0px' };
`;