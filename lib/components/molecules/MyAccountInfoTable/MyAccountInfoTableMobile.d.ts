import { ReactElement } from 'react';
import { DataKeyValues } from '.';
type HeaderItem = {
    id: string;
    content: string | ReactElement;
    isStrongContent: boolean;
    type: string;
    alignment: string;
};
interface MyAccountInfoTableMobileProps {
    headers: HeaderItem[];
    data: DataKeyValues[];
}
/**

    A mobile view table component to display account information with headers and corresponding data
    @component
    @param {MyAccountInfoTableProps} props - The props object containing the data to display
    @param {DataKeyValues[]} props.data - The array of data objects, containing the key, type, and value of the data to display
    @property {string} key - The key for the data object
    @property {string} type - The type of the data object. Valid options are 'string' or 'link'
    @property {string} value - The value of the data object
    @return {JSX.Element} The MyAccountInfoTable component
*/
export declare const MyAccountInfoTableMobile: ({ headers, data }: MyAccountInfoTableMobileProps) => JSX.Element;
export {};
