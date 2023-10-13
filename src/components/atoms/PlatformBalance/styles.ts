import styled from 'styled-components'

export const WrappedPlatformBalance = styled.div<any>`
  font-family: ${({ theme }) => theme.typography.primaryFont};
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.02em;
  padding-top: ${(props) => props.paddingTop ?? '0'};
  color: ${({theme}) => theme.defaultColor};
`;