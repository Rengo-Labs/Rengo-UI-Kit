import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.table.header.background};
  border-radius: 16px;
`;

export const ContainerMobile = styled(Container)`
  flex-direction: column;
  background-color: transparent;
  border-radius: 0px;
  gap: 16px;
  overflow: scroll;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ColumnMobile = styled(Column)`
  background-color: ${({ theme }) => theme.color.table.header.background};
  border-radius: 8px;
`;

export const Row = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  border-bottom: ${({ theme }) =>  `1px solid ${theme.border.default}` };
`;

export const RowMobile = styled.div<{ isLast: boolean, isSubItem: boolean }>`
  display: flex;
  flex-direction: ${({ isSubItem }) => isSubItem ? 'row' : 'column' };
  align-items: ${({ isSubItem }) => isSubItem ? 'center' : 'none' };
  padding: ${({ isSubItem }) => isSubItem ? '0 8px 0 16px' : '0' };
  border-bottom: ${({ theme, isLast }) => isLast ? 'none' : `1px solid ${theme.border.default}` };
`;

export const KeyItem = styled.div<{ isStrong?: boolean, alignment: string }>`
  width: 195px;
  display: flex;
  align-items: center;
  font-weight: ${({ isStrong }) => isStrong ? '600' : '400' };
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-size: 16px;
  line-height: 32px;
  color: ${({ theme }) => theme.color.default};
  letter-spacing: 0.02em;
  
  gap: 12px;
  padding: ${({ alignment }) => alignment === 'center' ? '4px 16px 4px 48px' : '4px 16px 4px 24px' };
`;

export const KeyItemMobile = styled(KeyItem)<{ type: string }>`
  width: 100%;
  padding: 16px 0 4px 16px;
  font-size: 16px;
  line-height: 19px;
  font-weight: ${({ type }) => type === 'sub-item' ? '400' : '600' };
`;

export const ValueItem = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  color: ${({ theme }) => theme.color.default};
  letter-spacing: 0.02em;

  a {
    color: ${({ theme }) => theme.color.default};
    text-decoration: none;
  }
`;

export const ValueItemMobile = styled(ValueItem)`
  padding: 4px 16px 8px 16px;
  line-height: 19px;
  overflow-wrap: anywhere;
`;

export const ImgContainerMobile = styled.div`
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
