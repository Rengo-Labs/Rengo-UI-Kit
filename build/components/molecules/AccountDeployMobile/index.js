import React from 'react';
import { InnerContainer, Wrapper, Title, Subtitle, H5, IconWrapper, CheckIcon, CopyIcon, SubtilteLink, AlertIcon } from './styles';
export var AccountDeployMobile = function AccountDeployMobile(_ref) {
  var deploy_hash = _ref.deploy_hash,
    block_hash = _ref.block_hash,
    antiquity = _ref.antiquity,
    contract = _ref.contract,
    contractRedirect = _ref.contractRedirect,
    handleCopy = _ref.handleCopy,
    entry_point = _ref.entry_point,
    amount = _ref.amount,
    amountSymbol = _ref.amountSymbol,
    cost = _ref.cost,
    price = _ref.price,
    widthIcon = _ref.widthIcon,
    heightIcon = _ref.heightIcon,
    errorMessage = _ref.errorMessage;
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(InnerContainer, null, /*#__PURE__*/React.createElement(IconWrapper, null, /*#__PURE__*/React.createElement(Title, {
    isPrimary: true
  }, "Deploy Hash"), /*#__PURE__*/React.createElement(Subtitle, null, antiquity)), /*#__PURE__*/React.createElement(IconWrapper, null, errorMessage ? /*#__PURE__*/React.createElement(AlertIcon, {
    width: widthIcon,
    height: heightIcon
  }) : /*#__PURE__*/React.createElement(CheckIcon, {
    width: widthIcon,
    height: heightIcon
  }), /*#__PURE__*/React.createElement(IconWrapper, null, /*#__PURE__*/React.createElement(Subtitle, null, deploy_hash), /*#__PURE__*/React.createElement(CopyIcon, {
    width: widthIcon,
    height: heightIcon,
    onClick: handleCopy
  })))), /*#__PURE__*/React.createElement(InnerContainer, null, /*#__PURE__*/React.createElement(Title, null, "Block Hash"), /*#__PURE__*/React.createElement(Subtitle, null, block_hash)), /*#__PURE__*/React.createElement(InnerContainer, null, /*#__PURE__*/React.createElement(Title, null, "Amount"), /*#__PURE__*/React.createElement(Subtitle, null, amount, " ", amountSymbol)), /*#__PURE__*/React.createElement(InnerContainer, null, /*#__PURE__*/React.createElement(Title, null, "Cost"), /*#__PURE__*/React.createElement(Subtitle, null, cost, " CSPR"), /*#__PURE__*/React.createElement(H5, null, "$", price)), /*#__PURE__*/React.createElement(InnerContainer, null, /*#__PURE__*/React.createElement(Title, null, "Contract"), /*#__PURE__*/React.createElement(Subtitle, null, entry_point), /*#__PURE__*/React.createElement(SubtilteLink, {
    onClick: contractRedirect
  }, contract)));
};