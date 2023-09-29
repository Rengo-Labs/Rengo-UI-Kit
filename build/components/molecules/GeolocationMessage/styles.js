import styled from 'styled-components';
// @ts-ignore
import hero from '../../../assets/background/hero.svg';
import logo from '../../../assets/icons/casper-logo.svg';
import tokens from '../../../assets/icons/token-group.svg';
export var Container = styled.section.withConfig({
  displayName: "styles__Container",
  componentId: "sc-ysr290-0"
})(["display:flex;flex-direction:column;align-items:center;background-image:url(", ");width:100vw;height:100vh;background-repeat:no-repeat;background-position:center center;background-attachment:fixed;background-size:cover;justify-content:space-evenly;"], hero);
export var Logo = styled.section.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-ysr290-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;background-image:url(", ");background-repeat:no-repeat;background-position:center;background-size:100% 100%;width:100%;height:60px;overflow-y:hidden;"], logo);
export var Title = styled.section.withConfig({
  displayName: "styles__Title",
  componentId: "sc-ysr290-2"
})(["font-family:", ";font-style:normal;font-weight:bold;font-size:", ";line-height:", ";letter-spacing:0.02em;color:#FFFFFF;width:", ";text-align:center;"], function (_ref) {
  var theme = _ref.theme;
  return theme.typography.primaryFont;
}, function (_ref2) {
  var isMobile = _ref2.isMobile;
  return isMobile ? '35px' : '55px';
}, function (_ref3) {
  var isMobile = _ref3.isMobile;
  return isMobile ? '40px' : '71px';
}, function (_ref4) {
  var isMobile = _ref4.isMobile;
  return isMobile ? '90%' : '60%';
});
export var Icons = styled.section.withConfig({
  displayName: "styles__Icons",
  componentId: "sc-ysr290-3"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;background-image:url(", ");background-repeat:no-repeat;background-position:center;background-size:100% 100%;width:100%;height:57px;"], tokens);