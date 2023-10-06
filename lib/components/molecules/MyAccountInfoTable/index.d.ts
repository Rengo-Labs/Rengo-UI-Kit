import React from 'react';
export declare enum MyAccountInfoDataTypes {
    String = "string",
    Link = "link"
}
export type DataKeyValues = {
    key: string;
    type: MyAccountInfoDataTypes;
    value: string;
};
export interface MyAccountInfoTableProps {
    data: DataKeyValues[];
}
/**

    A table component to display account information with headers and corresponding data
    @component
    @param {MyAccountInfoTableProps} props - The props object containing the data to display
    @param {DataKeyValues[]} props.data - The array of data objects, containing the key, type, and value of the data to display
    @property {string} key - The key for the data object
    @property {string} type - The type of the data object. Valid options are 'string' or 'link'
    @property {string} value - The value of the data object
    @return {JSX.Element} The MyAccountInfoTable component
*/
export declare const MyAccountInfoTable: ({ data }: MyAccountInfoTableProps) => React.JSX.Element;
