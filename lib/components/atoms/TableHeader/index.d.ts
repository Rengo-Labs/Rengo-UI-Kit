import React, { Ref } from 'react';
interface Column {
    key: string;
    name: string;
    isSorteable: boolean;
    width?: string;
}
interface TableHeaderProps {
    columns: Column[];
    onSort: (key: string, isAscending: boolean) => void;
    HeadTRRef?: Ref<HTMLTableCellElement>;
    centerItems?: boolean;
}
export declare const TableHeader: ({ columns, onSort, HeadTRRef, centerItems }: TableHeaderProps) => React.JSX.Element;
export default TableHeader;
