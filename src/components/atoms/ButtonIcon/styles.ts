import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  order: 0;
  flex-grow: 0;
  background-color: #F7FCFE;
  max-width: 91px;
  height: 30px;
  padding: 0px;
  cursor: pointer;
  user-select: none;

  @media (min-width: 430px) {
    padding: 0px 10px 0px 0px;
    max-width: 104px;
    height: 46px;
    align-items: center;

  }
`;

export const NameStyled = styled.p`
  font-family: 'Myriad Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #545454;
`;