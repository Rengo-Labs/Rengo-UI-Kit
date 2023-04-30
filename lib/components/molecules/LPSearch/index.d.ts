export interface LPSearchProps {
    handleOnlyShowStaked: (showStaked: boolean) => boolean;
}
/**
 * A search component for LP tokens.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.handleOnlyShowStaked - A callback function that takes a boolean parameter and returns a boolean. This function is called when the user toggles the "show staked only" checkbox.
 * @returns {JSX.Element} The rendered LPSearch component.
*/
export declare const LPSearch: ({ handleOnlyShowStaked }: LPSearchProps) => JSX.Element;
