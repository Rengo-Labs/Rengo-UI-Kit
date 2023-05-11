import { IDeployHeader } from '../AccountDeployTable';
import { ITransferHeader } from '../AccountTransferTable';
export interface AccountTabsProps {
    tabDefault?: number;
    deployData: IDeployHeader[];
    transferData: ITransferHeader[];
    widthIcon?: number;
    heightIcon?: number;
}
/**
 * Render a Tabs.
 * @param {any} tabDefault - The default tab to show.
 * @param {IDeployHeader[]} deployData - The data to show in the deploy table.
 * @param {ITransferHeader[]} transferData - The data to show in the transfer table.
 * @param {number} widthIcon - The width of the icon.
 * @param {number} heightIcon - The height of the icon.
 * @returns  {JSX.Element} The rendered two tabs, the first one with a deploy table and the second one with a transfer table.
 */
export declare const AccountTabs: ({ tabDefault, deployData, transferData, widthIcon, heightIcon }: AccountTabsProps) => JSX.Element;
