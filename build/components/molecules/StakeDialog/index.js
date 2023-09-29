import React from "react";
import { BottomSubContainer, CloseButton, Container, DialogHeader, DialogHeaderContainer, DialogTitle, InnerContainer, SliderContainer, TopSubContainer, TransactionsContainer, TransactionsInnerContainer } from "./styles";
import { Button, Dialog, Icons, Slider, TransactionDetails } from "../../atoms";
import { Distribution } from "../../atoms/TransactionDetails/types";
import { useTheme } from "styled-components";
import { useDeviceType } from "../../../hooks";
import { DeviceType } from "../../../hooks/types";

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
export var StakeDialog = function StakeDialog(_ref) {
  var titleDialog = _ref.titleDialog,
    titleConfirmButton = _ref.titleConfirmButton,
    closeCallback = _ref.closeCallback,
    liquidityPoolData = _ref.liquidityPoolData,
    isOpen = _ref.isOpen,
    disabledButton = _ref.disabledButton,
    disabledAllowanceButton = _ref.disabledAllowanceButton,
    handleChangeInput = _ref.handleChangeInput,
    handleAction = _ref.handleAction,
    handleAllowance = _ref.handleAllowance,
    calculatedAmounts = _ref.calculatedAmounts,
    showAllowance = _ref.showAllowance,
    defaultValue = _ref.defaultValue;
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  var theme = useTheme();
  var handlePercentageChange = function handlePercentageChange(value) {
    handleChangeInput(value);
  };
  var handleClose = function handleClose() {
    closeCallback();
  };
  return /*#__PURE__*/React.createElement(Dialog, {
    isOpen: isOpen,
    onClose: function onClose() {
      return closeCallback();
    }
  }, /*#__PURE__*/React.createElement(Container, {
    isMobile: isMobile
  }, /*#__PURE__*/React.createElement(DialogHeaderContainer, {
    isMobile: isMobile
  }, /*#__PURE__*/React.createElement(DialogHeader, null, /*#__PURE__*/React.createElement(DialogTitle, null, titleDialog), /*#__PURE__*/React.createElement(CloseButton, {
    onClick: handleClose
  }, /*#__PURE__*/React.createElement(Icons, {
    name: "X",
    size: 23,
    color: theme.color.modalText
  })))), /*#__PURE__*/React.createElement(InnerContainer, {
    isMobile: isMobile
  }, /*#__PURE__*/React.createElement(TopSubContainer, null, /*#__PURE__*/React.createElement(SliderContainer, null, /*#__PURE__*/React.createElement(Slider, {
    defaultValue: defaultValue,
    callback: handlePercentageChange
  })), /*#__PURE__*/React.createElement(TransactionsContainer, null, /*#__PURE__*/React.createElement(TransactionsInnerContainer, null, /*#__PURE__*/React.createElement(TransactionDetails, {
    key: "transaction-details-".concat(liquidityPoolData.id, "-stake"),
    containerWidth: "80%",
    distribution: Distribution.SpaceBetween,
    Icon: liquidityPoolData.firstIcon,
    OptIcon: liquidityPoolData.secondIcon,
    iconSize: 45,
    iconWidth: 40,
    iconHeight: 40,
    tokenNames: [liquidityPoolData.firstName, liquidityPoolData.secondName],
    tokenNameSymbols: [liquidityPoolData.firstSymbol, liquidityPoolData.secondSymbol],
    amount: "".concat(calculatedAmounts.lpAmount)
  })))), /*#__PURE__*/React.createElement(BottomSubContainer, null, showAllowance ? /*#__PURE__*/React.createElement(Button, {
    type: "large",
    props: {
      disabled: disabledAllowanceButton,
      onClick: function onClick() {
        return handleAllowance();
      },
      style: {
        padding: 0
      }
    }
  }, "Approve ", calculatedAmounts.allowance, " ", liquidityPoolData.tokenName) : /*#__PURE__*/React.createElement(Button, {
    type: "large",
    props: {
      disabled: disabledButton,
      onClick: function onClick() {
        return handleAction();
      }
    }
  }, titleConfirmButton)))));
};