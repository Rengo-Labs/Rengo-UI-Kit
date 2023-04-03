import styled from 'styled-components';

type TValue = {
  isPorcentage?: boolean;
}

export const WrapperStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: .5rem;
  max-width: 105px;
  max-height: 26px;
  `;

export const KeyStyled = styled.div`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.keyPairText.keyTextColor};
  `;

export const ValueStyled = styled.div<TValue>`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${({ isPorcentage, theme }) => isPorcentage ? theme.color.keyPairText.valueIsPorcentageTextColor : theme.color.keyPairText.valueTextColor};
`;