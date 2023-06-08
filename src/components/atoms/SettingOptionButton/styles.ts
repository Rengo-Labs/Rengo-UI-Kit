import styled from 'styled-components';

export const WrapperStyled = styled.div<{isSelect: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 4px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.background.default};
  border: 1px solid ${({ theme }) => theme.border.default};
  cursor: pointer;
  
    ${({ isSelect, theme }) => isSelect && `
        background-color: ${theme.color.primary.default};
        p {
         color:  ${theme.color.white};
        }
        border: 1px solid ${theme.color.primary.default};
    `}
`;

export const InputWrapperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.default};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  max-width: 48px;
  max-height: 26px;
  border: none;
  background-color: transparent;
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.02em;
  text-align: center;
  color: ${({ theme }) => theme.color.default};
  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme}) =>theme.color.default};
  }
`;
