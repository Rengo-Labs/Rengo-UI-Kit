import { AlertTriangle, CheckCircle, Copy} from 'react-feather'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.defaultColor};
  &:last-child {
    border-bottom: 3px solid ${({ theme }) => theme.defaultColor};
  }
`

export const Title = styled.p<{ isPrimary?: boolean }>`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.color.modalText : theme.color.default};
`

export const SubtilteLink = styled(Title)`
  color: ${({ theme }) => theme.color.modalText};
  cursor: pointer;
`

export const Subtitle = styled(Title)`
  color: ${({ theme }) => theme.color.default};
  font-weight: 400;
`

export const H5 = styled.p`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.primary.text};
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
  width: 100%;
  &:first-child {
    margin-bottom: 5px;
  }
`

export const CheckIcon = styled(CheckCircle)`
  color: ${(props) => props.theme.background.searchInput};
  fill: ${(props) => props.theme.border.greenMalachite};
`

export const CopyIcon = styled(Copy)`
  color: ${(props) => props.theme.color.modalText};
  cursor: pointer;
`

export const AlertIcon = styled(AlertTriangle)`
  color: ${(props) => props.theme.background.searchInput};
  fill: red;
`