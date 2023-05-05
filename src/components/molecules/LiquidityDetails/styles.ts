import styled from 'styled-components'
import { Column } from '../../atoms'

export const Wrapper = styled(Column)`
  background-color: ${({ theme }) => theme.color.tab.background};
  border-radius: 16px;
  height: 390px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
