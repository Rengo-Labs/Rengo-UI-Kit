import styled from 'styled-components';
import { X } from 'react-feather'
import { Column } from '../../atoms';
export const Wrapper = styled(Column)`
  background-color: ${({ theme }) => theme.color.tab.background};
  border-radius: 16px;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const Text = styled.p`
font-family: ${({ theme }) => theme.typography.secondaryFont};
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
letter-spacing: 0.02em;
color: ${({ theme }) => theme.color.modalText};
`

export const CloseIcon = styled(X)`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.color.modalText};
  user-select: none;
  margin-right: 10px;
`;
