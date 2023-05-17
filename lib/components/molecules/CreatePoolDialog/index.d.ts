import React from 'react';
import { CreatePoolDialogProps } from './types';
/**
  React component for creating a pool dialog.
  @param {Object} props - The props object.
  @param {Function} props.closeCallback - The callback function to close the dialog.
  @param {Array} props.tokenListData - An array of TokenData objects containing information about the tokens in the pool. This is an array item example { id: '3d3dfimfw33', name: 'CST', fullName: 'CasperSwap', amount: '1000000' },
  @param {Array} props.popularTokensData - An array of TokenData objects containing information about the popular tokens. The item is similar as the tokenListData item
  @param {function} [props.onSelectToken] - onSelectToken select token.
  @returns {JSX.Element} - The create pool dialog component.
*/
export declare const CreatePoolDialog: ({ isOpen, closeCallback, tokenListData, popularTokensData, onSelectToken, onSelectFavoriteToken, handleViewTokenList }: CreatePoolDialogProps) => React.JSX.Element;
