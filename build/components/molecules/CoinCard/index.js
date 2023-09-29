import React from 'react';
import { CoinCardWrapped, CoinCardFooter, InputWrapped, ButtonWrapped } from './styles';
import { Header, Button, Input, TextIconTouchable } from '../../atoms';
import { Type, Status } from '../../atoms/Input/types';
/***
 *
 * @param startIcon - it shows the selected token icon currently
 * @param endIcon - it shows the arrow icon to show a token list to be selected
 * @param iconSize
 * @param title - Text
 * @param tokenBalance - it's the total balance of the selected token.
 * @param tokenName - it's the token name of the selected token.
 * @param tokenPrice - it's the token price expressed in usd.
 * @param placeholder - it's the label value which is shown in the input
 * @param onChangeToken - Token selector's listener
 * @param onChangeValue - Card value's listener
 * @param validator - it's a validator of this token input
 * @param value - value which will be loaded in the card input
 * @constructor
 */
export var CoinCard = function CoinCard(_ref) {
  var startIcon = _ref.startIcon,
    endIcon = _ref.endIcon,
    iconSize = _ref.iconSize,
    title = _ref.title,
    tokenBalance = _ref.tokenBalance,
    tokenName = _ref.tokenName,
    tokenPrice = _ref.tokenPrice,
    placeholder = _ref.placeholder,
    onChangeToken = _ref.onChangeToken,
    onChangeValue = _ref.onChangeValue,
    validator = _ref.validator,
    value = _ref.value,
    gasFee = _ref.gasFee,
    disabled = _ref.disabled;
  var onHalfButton = function onHalfButton() {
    onChangeValue(parseFloat(tokenBalance) / 2);
  };
  var onMaxButton = function onMaxButton() {
    var maxBalance = tokenName === 'CSPR' && gasFee ? parseFloat(tokenBalance) - gasFee : parseFloat(tokenBalance);
    onChangeValue(maxBalance);
  };
  return /*#__PURE__*/React.createElement(CoinCardWrapped, {
    id: title
  }, /*#__PURE__*/React.createElement(Header, {
    text: title,
    balance: tokenBalance
  }), /*#__PURE__*/React.createElement(InputWrapped, null, /*#__PURE__*/React.createElement(Input, {
    placeholder: placeholder,
    helperText: "",
    label: "",
    status: Status.Default,
    type: Type.Number,
    rightAdornment: '',
    Icon: /*#__PURE__*/React.createElement(TextIconTouchable, {
      startIcon: startIcon,
      name: tokenName,
      endIcon: endIcon,
      actionCallBack: onChangeToken,
      background: "transparent",
      isUpperCase: false
    }),
    value: value,
    iconSize: iconSize,
    onChange: onChangeValue,
    validator: validator,
    hasBackground: true,
    iconWrapperBackground: "transparent",
    disabled: disabled
  })), /*#__PURE__*/React.createElement(CoinCardFooter, null, /*#__PURE__*/React.createElement(ButtonWrapped, {
    left: true
  }, "$ ", tokenPrice), /*#__PURE__*/React.createElement(ButtonWrapped, {
    left: false
  }, /*#__PURE__*/React.createElement(Button, {
    type: "small",
    props: {
      onClick: function onClick() {
        return onHalfButton();
      }
    }
  }, "Half"), /*#__PURE__*/React.createElement(Button, {
    type: "small",
    props: {
      onClick: function onClick() {
        return onMaxButton();
      }
    }
  }, "Max"))));
};