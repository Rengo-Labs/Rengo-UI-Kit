export interface IAccountDeployBody {
    deploy_hash?: string;
    block_hash?: string;
    antiquity?: string;
    contract?: string;
    contractRedirect: () => void;
    handleCopy?: () => void;
    entry_point?: string;
    amount?: string;
    cost?: string;
    price?: string;
    widthIcon?: number;
    heightIcon?: number;
}
/**
 * Renders a body from deploy table
 * @param {number} id - Id of the transfer
 * @param {string} deploy_hash - Deploy hash of the transfer
 * @param {string} block_hash - Block hash of the transfer
 * @param {string} antiquity - Antiquity of the transfer
 * @param {string} contract - Contract of the transfer
 * @param {function} contractRedirect - Redirect to the telnet
 * @param {string} entry_point - Entry point of the transfer
 * @param {string} amount - Amount of the transfer
 * @param {string} cost - Cost of the transfer
 * @param {string} price - Price of the transfer
 * @param {number} widthIcon - Width of the icon
 * @param {number} heightIcon - Height of the icon
 * @returns {JSX.Element} - Body from deploy table
 */
export declare const AccountDeployBody: ({ deploy_hash, block_hash, antiquity, contract, contractRedirect, entry_point, amount, cost, price, widthIcon, heightIcon }: IAccountDeployBody) => JSX.Element;
