import { Ref } from 'react';
interface Column {
    key: string;
    name: string;
    isSorteable: boolean;
}
interface TableHeaderProps {
    columns: Column[];
    onSort: (key: string, isAscending: boolean) => void;
    cryptoColumnRef?: Ref<HTMLTableCellElement>;
}
export declare const TableHeader: ({ columns, onSort, cryptoColumnRef }: TableHeaderProps) => JSX.Element;
export default TableHeader;
