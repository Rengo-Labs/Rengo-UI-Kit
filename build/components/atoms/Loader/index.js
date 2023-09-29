import React from 'react';
import { Wrapper, AnimatedImg } from './styles';
import Logo from '../../../assets/loader/logo.svg';
import initialSvg from '../../../assets/loader/initial.svg';
import variant2 from '../../../assets/loader/variant2.svg';
import variant3 from '../../../assets/loader/variant3.svg';
import variant4 from '../../../assets/loader/variant4.svg';
import variant5 from '../../../assets/loader/variant5.svg';
import variant6 from '../../../assets/loader/variant6.svg';
import variant7 from '../../../assets/loader/variant7.svg';
import variant8 from '../../../assets/loader/variant8.svg';
import variant9 from '../../../assets/loader/variant9.svg';
import variant10 from '../../../assets/loader/variant10.svg';
import variant11 from '../../../assets/loader/variant11.svg';
import variant12 from '../../../assets/loader/variant12.svg';
import variant13 from '../../../assets/loader/variant13.svg';
import variant14 from '../../../assets/loader/variant14.svg';
import variant15 from '../../../assets/loader/variant15.svg';
import variant16 from '../../../assets/loader/variant16.svg';
import variant17 from '../../../assets/loader/variant17.svg';
import variant18 from '../../../assets/loader/variant18.svg';
import variant19 from '../../../assets/loader/variant19.svg';
var percentValues = [initialSvg, variant2, variant3, variant4, variant5, variant6, variant7, variant8, variant9, variant10, variant11, variant12, variant13, variant14, variant15, variant16, variant17, variant18, variant19, variant18, variant19];
export var Loader = function Loader(_ref) {
  var children = _ref.children,
    props = _ref.props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(AnimatedImg, {
    percentValues: percentValues
  }, /*#__PURE__*/React.createElement("img", {
    src: Logo,
    alt: "Logo"
  }))));
};