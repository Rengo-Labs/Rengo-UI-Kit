import styled from 'styled-components'

export const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 24px;
`

export const Text = styled.div`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.default};
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.default};
  padding: 4px 16px;
  background-color: ${({ theme }) => theme.background.gasFeeInput};
  border-radius: 4px;
`

export const Input = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.color.default};
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  width: 35px;
  border: none;
  &:focus {
    outline: none;
  }
`;
