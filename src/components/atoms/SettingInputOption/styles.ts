import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2px;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 4px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.background.default};
  border: 1px solid ${({ theme }) => theme.border.default};
  cursor: pointer;
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
  width: 100%;
`

export const InputOption = styled.input`
  width: 100%;
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
