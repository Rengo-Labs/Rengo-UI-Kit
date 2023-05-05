import {
  Eye,
  MoreHorizontal,
  PlusCircle,
  Shuffle,
  Star,
  Trash2
} from 'react-feather'
import styled from 'styled-components'
import { ImageProps } from '../../molecules/Menu/types'

export interface Props {
  hidden?: boolean
  actionsDialogActive?: boolean
}

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

export const TokenPairWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.color.default};
  align-self: center;
`

export const FavoriteIcon = styled.img`
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.color.default};
  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }
`

export const ActionsWrapper = styled.div<Props>`
  display: flex;
  width: 132px;
  height: 171px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${({ theme }) => theme.background.searchInput};
  box-shadow: 5px 5px 8px 8px rgba(70, 52, 243, 0.1);
  border-radius: 16px;
  align-items: center;
  right: 50px;
  top: 10px;
  display: ${({ actionsDialogActive }) =>
    actionsDialogActive ? 'flex;' : 'none;'};
`

export const ActionsInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  height: 82%;
  width: 72%;
  gap: 20px;
`

export const ActionItem = styled.div<Props>`
  display: flex;
  gap: 10px;

  @media (min-width: 800px) {
    display: ${({ hidden }) => (hidden ? 'none;' : 'flex;')};
    gap: ${({ hidden }) => (hidden ? '0px;' : '10px;')};
  }

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }
`

export const ActionName = styled.p`
  display: none;
  display: flex;
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.modalText};
`

export const DeleteIcon = styled(Trash2)`
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }
`

export const ShuffleIcon = styled(Shuffle)`
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }
`

export const AddLiquidityIcon = styled(PlusCircle)`
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }
`

export const SeeActionsIconWrapper = styled.div<Props>`
  display: ${({ actionsDialogActive }) =>
    actionsDialogActive ? 'flex' : 'flex'};
  justify-content: ${({ actionsDialogActive }) =>
    actionsDialogActive ? 'center' : 'center'};
  align-items: ${({ actionsDialogActive }) =>
    actionsDialogActive ? 'center' : 'center'};
  width: 32px;
  height: 32px;
  border-radius: ${({ actionsDialogActive }) =>
    actionsDialogActive ? '6px' : '0'};
  background-color: ${({ actionsDialogActive }) =>
    actionsDialogActive ? '#AA9FF9' : 'transparent'};
  margin-right: 12px;
  user-select: none;
  position: relative;
`

export const SeeActionsIcon = styled(MoreHorizontal)<Props>`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;

  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }
`

export const ViewIcon = styled(Eye)`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;

  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.img.attrs<ImageProps>(({ width, height }) => ({
  width: width,
  height: height,
}))<ImageProps>`
  &:first-child {
    margin-right: -15px
  }
`;
