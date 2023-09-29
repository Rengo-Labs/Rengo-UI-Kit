import React from "react";
import { InnerWrapper, LeftWrapper, RightWrapper, TokenInfo, Wrapper } from "./styles";
import { useDeviceType } from "../../../hooks";
import { DeviceType } from "../../../hooks/types";

/**
  A component that displays the token information for a transaction in text form only,
  including the token names and their respective values.
  @component
  @param {object} props - The props object.
  @param {Array<string>} props.tokenInfo - An array of token information to be displayed.
  Each element in the array should be a string with the format "token name: token value".
  @return {JSX.Element} - The rendered TransactionDetailsTextOnly component.
*/

export var TransactionDetailsTextOnly = function TransactionDetailsTextOnly(_ref) {
  var tokenInfo = _ref.tokenInfo;
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(InnerWrapper, null, /*#__PURE__*/React.createElement(LeftWrapper, {
    isMobile: isMobile
  }, "Price"), /*#__PURE__*/React.createElement(RightWrapper, null, tokenInfo && tokenInfo.map(function (info) {
    return /*#__PURE__*/React.createElement(TokenInfo, {
      key: "token-info".concat(info)
    }, info);
  }))));
};