import styled from "styled-components";
export const ButtonStyled = styled.button`
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.textColor};
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    outline: none;
    :hover {
        background-color: ${({ theme }) => theme.defaultColor};
    }
    :active {
        background-color: ${({ theme }) => theme.primaryColor};
    }
`;
