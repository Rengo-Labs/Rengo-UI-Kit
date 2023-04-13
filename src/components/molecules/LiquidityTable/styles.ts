import styled from 'styled-components'

export const Wrapper = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  background-color: ${({theme}) => theme.color.table.header.background};
  border-radius: 16px;
`