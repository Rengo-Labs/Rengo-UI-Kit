import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 0.8;
  }

  &:focus {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.3;
  }
`;
export const TrailCircular = styled.path<any>`
  stroke: ${props => props.isPrincipal ? props.theme.color.primary.default : '#CCC'}
`;
