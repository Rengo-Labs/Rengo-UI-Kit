import styled from 'styled-components'

export const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerContainer = styled.div`
  width: 386px;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: ${({ theme }) => `1px solid ${theme.border.default}`};
  /* border-bottom: ${({ theme }) => `1px solid ${theme.border.default}`}; */
`;

export const ViewTokenListTitle = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.primary.default};
`;

export const PopularTokens = styled.div`
  height: 84px;
  /* width: 386px; */
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  border-bottom: ${({ theme }) => `1px solid ${theme.border.default}`};
  margin: 16px auto;
`;

export const PopularTokensTitle = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.primary.default};
  letter-spacing: 0.02em;
`;

export const PopularTokensItemsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const TokenListContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
`;

export const SectionTitle = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.primary.default};
  letter-spacing: 0.02em;
`;