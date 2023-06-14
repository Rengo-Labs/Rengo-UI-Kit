/// <reference types="react" />
import { RemoveLiquidityDialogProps } from "./types";
/**
 React component for a Remove Liquidity dialog box.
 @component
 @param {function} closeCallback - A function to be called when the dialog is closed, passing the liquidity pool state as an optional argument.
 @param {TokenData[]} liquidityPoolData - An array of token data for the liquidity pool.
 @param {string} isOpen - The status of the liquidity pool.
 @param {boolean} disabledButton - The status of the remove liquidity button.
 @param {boolean} disabledAllowanceButton - The status of the approve button.
 @param {boolean} isRemoveLiquidityCSPR - The status of the remove liquidity CSPR.
 @param {function} handleChangeInput - A function to be called when the input is changed.
 @param {function} handleToggle - A function to be called when the toggle is changed.
 @param {function} handleRemoveLiquidity - A function to be called when the remove liquidity button is clicked.
 @param {CalculatedAmounts} calculatedAmounts - The calculated amounts for the liquidity pool.

 @returns {JSX.Element} - A JSX element representing the Remove Liquidity dialog box.
 */
export declare const RemoveLiquidityDialog: ({ closeCallback, liquidityPoolData, isOpen, disabledButton, disabledAllowanceButton, isRemoveLiquidityCSPR, handleChangeInput, handleToggle, handleRemoveLiquidity, handleAllowanceLiquidity, calculatedAmounts, showAllowance, defaultValue, showToggle, }: RemoveLiquidityDialogProps) => JSX.Element;
