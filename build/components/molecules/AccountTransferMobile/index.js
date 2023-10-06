import React from 'react';
import { InnerContainer, Wrapper, Title, Subtitle, H5, IconWrapper, CheckIcon, CopyIcon } from './styles';
export var AccountTransferMobile = function AccountTransferMobile(_ref) {
  var deploy_hash = _ref.deploy_hash,
    block_hash = _ref.block_hash,
    antiquity = _ref.antiquity,
    of = _ref.of,
    forValue = _ref.forValue,
    transference_id = _ref.transference_id,
    amount = _ref.amount,
    price = _ref.price,
    widthIcon = _ref.widthIcon,
    heightIcon = _ref.heightIcon,
    handleCopy = _ref.handleCopy;
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(InnerContainer, null, /*#__PURE__*/React.createElement(IconWrapper, null, /*#__PURE__*/React.createElement(Title, {
    isPrimary: true
  }, "Deploy Hash"), /*#__PURE__*/React.createElement(Subtitle, null, antiquity)), /*#__PURE__*/React.createElement(IconWrapper, null, /*#__PURE__*/React.createElement(CheckIcon, {
    width: widthIcon,
    height: heightIcon
  }), /*#__PURE__*/React.createElement(IconWrapper, null, /*#__PURE__*/React.createElement(Subtitle, null, deploy_hash), /*#__PURE__*/React.createElement(CopyIcon, {
    width: widthIcon,
    height: heightIcon,
    onClick: handleCopy
  })))), /*#__PURE__*/React.createElement(InnerContainer, null, /*#__PURE__*/React.createElement(Title, null, "Block Hash"), /*#__PURE__*/React.createElement(Subtitle, null, block_hash)), /*#__PURE__*/React.createElement(InnerContainer, null, /*#__PURE__*/React.createElement(Title, null, "Of"), /*#__PURE__*/React.createElement(Subtitle, null, of)), /*#__PURE__*/React.createElement(InnerContainer, null, /*#__PURE__*/React.createElement(Title, null, "For"), /*#__PURE__*/React.createElement(Subtitle, null, forValue)), /*#__PURE__*/React.createElement(InnerContainer, null, /*#__PURE__*/React.createElement(Title, null, "Transference Id"), /*#__PURE__*/React.createElement(Subtitle, null, transference_id)), /*#__PURE__*/React.createElement(InnerContainer, null, /*#__PURE__*/React.createElement(Title, null, "Cost"), /*#__PURE__*/React.createElement(Subtitle, null, amount, " CSPR"), /*#__PURE__*/React.createElement(H5, null, "$", price)));
};