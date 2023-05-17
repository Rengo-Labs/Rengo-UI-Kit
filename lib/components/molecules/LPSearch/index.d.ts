import React from 'react';
export interface LPSearchProps {
    handleOnlyShowStaked: (showStaked: boolean) => void;
    handleSearch: (e: string) => void;
    handleReloadButton: () => Promise<void>;
    getProgress: () => number;
    clearProgress?: () => void;
}
/**
  A search component for LP tokens.
  @component
  @param {Object} props - The component props.
  @param {Function} props.handleOnlyShowStaked - A callback function that takes a boolean parameter. This function is called when the user toggles the "show staked only" checkbox.
  @param {Function} props.handleSearch - A callback function that takes a string parameter. This function is called when the user types in the search input.
  @param {Function} props.handleReloadButton - A callback function that returns a Promise. This function is called when the user clicks on the Reload button.
  @param {Function} props.getProgress - A function that returns a number representing the current progress of the reload operation.
  @param {Function} props.clearProgress - A function that clears the current reload progress.
  @returns {JSX.Element} The rendered LPSearch component.
*/
export declare const LPSearch: ({ handleOnlyShowStaked, handleSearch, handleReloadButton, getProgress, clearProgress }: LPSearchProps) => React.JSX.Element;
