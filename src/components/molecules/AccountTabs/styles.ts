import { Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

export const Item = styled.div`
  width: 100%;
`;

export const TabContent = styled(Row)`
  background-color: ${({ theme }) => theme.color.tab.background};
  border-radius: 0 0 16px 16px;
  height: 100%;
`;