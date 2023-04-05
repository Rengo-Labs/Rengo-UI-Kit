import styled from 'styled-components'
import { Column } from '../../atoms'

export const Wrapper = styled(Column)`
  background-color: ${({ theme }) => theme.color.tab.background};
  border-radius: 16px;
`;
