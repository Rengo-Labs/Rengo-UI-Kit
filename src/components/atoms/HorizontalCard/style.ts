import styled from 'styled-components'
import { Trash2, Shuffle, PlusCircle, Star, MoreHorizontal, Eye } from 'react-feather'
import { Props } from './types';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  background: ${({ theme }) =>  theme.background.wallet.connectedOptions};

  @media (max-width: 900px) {
    height: auto;
    flex-direction: column;
  }
`;

export const TokenInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    height: 50px;
    justify-content: space-between;
  }
`;

export const TokenInfoInnerWrapper = styled.div`
  min-width: 190px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12px;
  gap: 8px;
`;

export const TokenPairsNamesWrapper = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${props => props.linkable ? 'cursor: pointer;':''}
  ${props => props.linkable ? '&:hover{ color: blue; }':''}
`;

export const Image = styled.img<Props>`
  height: 30px;
  :first-child {
    margin-right: -15px;
  }
`;
export const TokenName = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.default};
`;

export const RowWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    gap: 0px;
    display: flex;
    justify-content: space-evenly;
    min-height: 60px;
    padding: 0 12px;
    border-top: ${({ theme }) => `1px solid ${theme.border.table}`};
    border-bottom: ${({ theme }) => `1px solid ${theme.border.table}`};
  }
`;

export const TableRow = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 900px) {
    gap: 0%;
    width: 100%;
  }
`;

export const RowUserPoolInfo = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    height: 60px;
    padding: 0 12px;
    gap: 0px;
  }
`;

export const PairsLiquidityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  @media (max-width: 900px) {
    width: 50%;
    min-height: 60px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PairLiquidityName = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.02em;
`;

export const PairLiquidityValue = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  word-wrap: anywhere;
  color: ${({ theme }) => theme.color.modalText};
`;

export const UserPoolInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;

  @media (max-width: 900px) {
    width: 50%;
    min-height: 60px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const UserPoolInfoName = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.02em;
`;

export const UserPoolInfoValue = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  word-wrap: anywhere;
  color: ${({ theme }) => theme.color.modalText};
`;

export const ActionsWrapper = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 132px;
  margin-right: 32px;

  @media (max-width: 900px) {
    position: absolute;
    width: 117px;
    height: 171px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: ${({ theme }) => theme.background.searchInput};
    box-shadow: 8px 8px 60px 90px rgba(70, 52, 243, 0.1);
    border-radius: 16px;
    align-items: center;
    right: 50px;
    top: 10px;
    display: ${({ actionsDialogActive }) => actionsDialogActive ? 'flex;' : 'none;'};
  }

`;

export const ActionsInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 82%;
    width: 72%;
    gap: 20px;
  }
`;

export const ActionItem = styled.div<Props>`
  display: flex;
  gap: 10px;

  @media (min-width: 840px) {
    display: ${({ hidden }) => hidden ? 'none;' : 'flex;'};
    gap: ${({ hidden }) => hidden ? '0px;' : '10px;'};
  }


  cursor: pointer;
  transition: all 0.2s ease-in-out;
 
  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }
 
`;

export const ActionName = styled.p`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    font-family: ${({theme}) => theme.typography.secondaryFont};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.color.modalText};
  }

`;

export const DeleteIcon = styled(Trash2)`
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
 
  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }
`;

export const ShuffleIcon = styled(Shuffle)`
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
 
  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }
`;

export const AddLiquidityIcon = styled(PlusCircle)`
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
 
  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }
`;

export const FavoriteIcon = styled(Star)`
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
 
  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

export const SeeActionsIconWrapper = styled.div<Props>`
  display: ${({ actionsDialogActive }) => actionsDialogActive ? 'flex' : 'flex'};
  justify-content: ${({ actionsDialogActive }) => actionsDialogActive ? 'center' : 'center'};
  align-items: ${({ actionsDialogActive }) => actionsDialogActive ? 'center' : 'center'};
  width: 32px;
  height: 32px;
  border-radius: ${({ actionsDialogActive }) => actionsDialogActive ? '6px' : '0'};
  background-color: ${({ actionsDialogActive }) => actionsDialogActive ? '#AA9FF9' : 'transparent'};
  margin-right: 12px;
  user-select: none;

`;

export const SeeActionsIcon = styled(MoreHorizontal)<Props>`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;
 
  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }

  @media (min-width: 900px) {
    display: none;
  }
`;


export const ViewIcon = styled(Eye)`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;
 
  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }

  @media (min-width: 800px) {
    display: none;
  }
`;
