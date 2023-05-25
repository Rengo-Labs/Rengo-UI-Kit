import styled from "styled-components";

export const ChartWrapper = styled.div`
  height: 100%;
  max-height: 270px;
`

export const OptionsRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 5px;
`

export const EmptyCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  border-radius: 20px;
  color: ${({ theme}) =>theme.defaultColor};
  font-family: ${({ theme }) => theme.typography.secondaryFont};
`
const Row = styled.div`
  width: 100%;
  display: flex;
  padding: 0;
  align-items: center;
  border-radius: 20px;
  justify-content: space-around;
`

export const AutoRow = styled(Row)`
  flex-wrap: nowrap;
  & > * {
    margin: 6px !important;
  }
  justify-content: space-evenly;
`

export const AutoRowJustify = styled(Row)`
  flex-wrap: nowrap;
  & > * {
    margin: 6px !important;
  }
  justify-content: flex-end;
  gap: 6px;
`

export const OptionButton = styled.div<{active: boolean}>`
  font-weight: 500;
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  width: fit-content;
  white-space: nowrap;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.primary.default};
  background-color: ${({ theme, active }) => active ? theme.color.chart.active : theme.color.chart.inactive};
  color: ${({ theme}) => theme.color.chart.textColor};

  :hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.color.chart.active};
  }
  :active {
    background-color: ${({theme}) => theme.color.chart.active};
  }

  :disabled {
    background-color: ${({theme}) => theme.color.chart.inactive};
  }
`
