import styled from "styled-components";

export const IconStyled = styled.img<any>`
    width: 30px;
    height: 30px;
    cursor: pointer;
  
    &:hover {
        opacity: 1;
    }
  
    &:active {
        opacity: 0.8;
    }
  
    &:disabled {
        opacity: 0.3;
    }
`;
