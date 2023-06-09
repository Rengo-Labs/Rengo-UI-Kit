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
    firstColumnRef?: Ref<HTMLTableCellElement>;
}
export declare const TableHeader: ({ columns, onSort, firstColumnRef }: TableHeaderProps) => React.JSX.Element;
export default TableHeader;
