import React from "react";
import { BottomSubContainer, CloseButton, Container, DialogHeader, DialogHeaderContainer, DialogTitle, InnerContainer, SliderContainer, ToggleContainer, TopSubContainer, TransactionsContainer, TransactionsInnerContainer } from "./styles";
import { Button, Dialog, Icons, Slider, Toggle, TransactionDetails, TransactionDetailsTextOnly } from "../../atoms";
import { Distribution } from "../../atoms/TransactionDetails/types";
import { useTheme } from "styled-components";
import { Variant } from "../../atoms/Toggle/types";
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
export var RemoveLiquidityDialog = function RemoveLiquidityDialog(_ref) {
  var closeCallback = _ref.closeCallback,
    liquidityPoolData = _ref.liquidityPoolData,
    isOpen = _ref.isOpen,
    disabledButton = _ref.disabledButton,
    disabledAllowanceButton = _ref.disabledAllowanceButton,
    isRemoveLiquidityCSPR = _ref.isRemoveLiquidityCSPR,
    handleChangeInput = _ref.handleChangeInput,
    handleToggle = _ref.handleToggle,
    handleRemoveLiquidity = _ref.handleRemoveLiquidity,
    handleAllowanceLiquidity = _ref.handleAllowanceLiquidity,
    calculatedAmounts = _ref.calculatedAmounts,
    showAllowance = _ref.showAllowance,
    defaultValue = _ref.defaultValue,
    showToggle = _ref.showToggle;
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  var theme = useTheme();
  var handlePercentageChange = function handlePercentageChange(value) {
    handleChangeInput(value);
  };
  var handleCSPRChange = function handleCSPRChange(e) {
    handleToggle(e.target.checked);
  };
  var handleClose = function handleClose() {
    closeCallback();
  };
  var handleSubmit = function handleSubmit() {
    handleRemoveLiquidity();
  };
  var handleAllowance = function handleAllowance() {
    handleAllowanceLiquidity();
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
  }, /*#__PURE__*/React.createElement(DialogHeader, null, /*#__PURE__*/React.createElement(DialogTitle, null, "Remove Liquidity"), /*#__PURE__*/React.createElement(CloseButton, {
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
    key: "transaction-details-".concat(liquidityPoolData.id, "-remove-liquidity"),
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
  })), /*#__PURE__*/React.createElement(TransactionsInnerContainer, null, /*#__PURE__*/React.createElement(TransactionDetails, {
    key: "transaction-details-".concat(liquidityPoolData.id, "-").concat(liquidityPoolData.firstName, "-remove-liquidity"),
    containerWidth: "80%",
    distribution: Distribution.SpaceBetween,
    Icon: liquidityPoolData.firstIcon,
    iconSize: 45,
    iconWidth: 40,
    iconHeight: 40,
    tokenNames: [liquidityPoolData.firstName],
    tokenNameSymbols: [liquidityPoolData.firstSymbol],
    amount: "".concat(calculatedAmounts.firstAmount)
  })), /*#__PURE__*/React.createElement(TransactionsInnerContainer, null, /*#__PURE__*/React.createElement(TransactionDetails, {
    key: "transaction-details-".concat(liquidityPoolData.id, "-").concat(liquidityPoolData.secondName, "-remove-liquidity-c"),
    containerWidth: "80%",
    distribution: Distribution.SpaceBetween,
    Icon: liquidityPoolData.secondIcon,
    iconSize: 45,
    iconWidth: 40,
    iconHeight: 40,
    tokenNames: [liquidityPoolData.secondName],
    tokenNameSymbols: [liquidityPoolData.secondSymbol],
    amount: "".concat(calculatedAmounts.secondAmount)
  }))), /*#__PURE__*/React.createElement(TransactionDetailsTextOnly, {
    tokenInfo: ["1 ".concat(liquidityPoolData.firstSymbol, " = ").concat(liquidityPoolData.firstRate, " ").concat(liquidityPoolData.secondSymbol), "1 ".concat(liquidityPoolData.secondSymbol, " = ").concat(liquidityPoolData.secondRate, " ").concat(liquidityPoolData.firstSymbol)]
  })), /*#__PURE__*/React.createElement(BottomSubContainer, null, showAllowance ? /*#__PURE__*/React.createElement(Button, {
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
        return handleSubmit();
      }
    }
  }, "Remove Liquidity"), showToggle && /*#__PURE__*/React.createElement(ToggleContainer, null, /*#__PURE__*/React.createElement(Toggle, {
    isActive: isRemoveLiquidityCSPR,
    toggle: function toggle(e) {
      return handleCSPRChange(e);
    },
    variant: Variant.Default,
    labelText: "Remove liquidity CSPR"
  }))))));
};