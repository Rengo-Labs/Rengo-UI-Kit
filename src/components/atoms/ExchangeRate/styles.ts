import styled from 'styled-components';

export const ExchangeRateContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExchangeRateRow = styled.section`
    position: relative;
    display: flex;
    width: 100%;
`;

export const ExchangeRateColumn = styled.section`
    padding-right: 10px;
    font-family: ${({theme}) => theme.typography.secondaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.02em;
    text-align: right;
    color: ${({ theme }) => theme.defaultColor};
`;
