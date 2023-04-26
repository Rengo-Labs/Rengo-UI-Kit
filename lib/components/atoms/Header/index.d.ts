export interface IHeaderProps {
    text: string;
    balance: string;
}
/**
 * Render a header with title and balance.
 * @param {string} text - The title text to display in the title field.
 * @param {string} balance - The balance to display in the balance field.
 * @returns  {JSX.Element} The rendered the key-value text.
 */
export declare const Header: ({ text, balance }: IHeaderProps) => JSX.Element;
