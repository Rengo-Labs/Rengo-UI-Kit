interface Column {
    key: string;
    name: string;
    isSorteable: boolean;
}
interface TableHeaderProps {
    columns: Column[];
    onSort: (key: string, isAscending: boolean) => void;
}
export declare const TableHeader: ({ columns, onSort }: TableHeaderProps) => JSX.Element;
export default TableHeader;
