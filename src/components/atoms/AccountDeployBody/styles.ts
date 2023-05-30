import styled from 'styled-components'
import { ImageProps } from '../../molecules/Menu/types'
import { CheckCircle, AlertTriangle  } from 'react-feather'

export interface Props {
  hidden?: boolean
  actionsDialogActive?: boolean
}

export const TR = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.border.default};
  &:last-child {
    border-bottom: none;
  }
`
export const TD = styled.td<{ isFirstItem?: boolean }>`
  flex: 1;
  min-height: 32px;
  padding: 10px 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: ${({ isFirstItem }) =>
    isFirstItem ? 'flex-start' : 'center'};
  flex-wrap: wrap;
  gap: 8.94px;
  overflow-wrap: anywhere;
`

export const TDInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Text = styled.p`
  font-family: ${(props) => props.theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.color.default};
  align-self: center;
`

export const TextLink = styled(Text)`
  color: ${({ theme }) => theme.color.textLinkLight };
  cursor: pointer;
`

export const TDText = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  align-self: flex-start;
  color: ${(props) => props.theme.color.primary.Text};
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const CheckIcon = styled(CheckCircle)`
  color: ${(props) => props.theme.background.searchInput};
  fill: ${(props) => props.theme.border.greenMalachite};
`

export const AlertIcon = styled(AlertTriangle)`
  color: ${(props) => props.theme.background.searchInput};
  fill: red;
`

export const Icon = styled.img.attrs<ImageProps>(({ width, height }) => ({
  width: width,
  height: height
}))<ImageProps>`
  &:first-child {
    margin-right: -15px;
  }
`
