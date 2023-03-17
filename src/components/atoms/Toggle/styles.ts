import styled from "styled-components";
const IconWrapper = styled.div<{ isActive?: boolean }>`
  opacity: ${({isActive}) => (isActive ? 0.8 : 0.4)};

  :hover {
    opacity: 1;
  }
`
const StyledToggle = styled.div`
  display: flex;
  width: fit-content;
  cursor: pointer;
  text-decoration: none;
  margin-top: 1rem;
  color: white;

  :hover {
    text-decoration: none;
  }
`

export {
    IconWrapper,
    StyledToggle
}
