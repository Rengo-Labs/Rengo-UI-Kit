import React from 'react';
import { Footer, Header, HeaderSubtitle, HeaderTitle, MiddleContainer, Subtitle, SubtitleValue, Title, Wrapper } from './styles';
import { Divider } from '../Divider';
export var BalanceMobileItem = function BalanceMobileItem(_ref) {
  var networkLink = _ref.networkLink,
    row = _ref.row,
    heightIcon = _ref.heightIcon,
    widthIcon = _ref.widthIcon;
  var marketprice = row.marketprice,
    mybalance = row.mybalance,
    contractPackage = row.contractPackage,
    crypto = row.crypto,
    cryptoIcon = row.cryptoIcon,
    mycrypto = row.mycrypto,
    h24 = row['24h'],
    d7 = row['7d'],
    d15 = row['15d'],
    d30 = row['30d'];
  var redirectToNetwork = function redirectToNetwork(contractPackage) {
    var link = "".concat(networkLink).concat(contractPackage);
    window.open(link, '_blank');
  };
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(HeaderTitle, null, cryptoIcon && /*#__PURE__*/React.createElement("img", {
    src: cryptoIcon,
    alt: crypto,
    height: heightIcon,
    width: widthIcon
  }), /*#__PURE__*/React.createElement(Title, {
    linkeable: true,
    onClick: function onClick() {
      return redirectToNetwork(contractPackage);
    }
  }, crypto)), /*#__PURE__*/React.createElement(HeaderSubtitle, null, /*#__PURE__*/React.createElement(Subtitle, null, "My Crypto"), /*#__PURE__*/React.createElement(SubtitleValue, null, "$", mycrypto))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(MiddleContainer, null, /*#__PURE__*/React.createElement(HeaderSubtitle, null, /*#__PURE__*/React.createElement(Subtitle, null, "Market Price($)"), /*#__PURE__*/React.createElement(SubtitleValue, null, marketprice)), /*#__PURE__*/React.createElement(HeaderSubtitle, null, /*#__PURE__*/React.createElement(Subtitle, null, "MyBalance($)"), /*#__PURE__*/React.createElement(SubtitleValue, null, mybalance))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Footer, null, /*#__PURE__*/React.createElement(HeaderSubtitle, null, /*#__PURE__*/React.createElement(Subtitle, null, "24 hr"), /*#__PURE__*/React.createElement(SubtitleValue, null, h24)), /*#__PURE__*/React.createElement(HeaderSubtitle, null, /*#__PURE__*/React.createElement(Subtitle, null, "7 days"), /*#__PURE__*/React.createElement(SubtitleValue, null, d7)), /*#__PURE__*/React.createElement(HeaderSubtitle, null, /*#__PURE__*/React.createElement(Subtitle, null, "15 days"), /*#__PURE__*/React.createElement(SubtitleValue, null, d15)), /*#__PURE__*/React.createElement(HeaderSubtitle, null, /*#__PURE__*/React.createElement(Subtitle, null, "30 days"), /*#__PURE__*/React.createElement(SubtitleValue, null, d30))));
};