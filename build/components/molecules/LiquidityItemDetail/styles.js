import styled from 'styled-components';
import { X } from 'react-feather';
export var Container = styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-11ovi6l-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;padding:10px;background-color:", ";border-radius:16px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.tab.background;
});
export var Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-11ovi6l-1"
})(["display:flex;justify-content:space-around;align-items:center;width:100%;"]);
export var KeyPairWrapper = styled.div.withConfig({
  displayName: "styles__KeyPairWrapper",
  componentId: "sc-11ovi6l-2"
})(["display:flex;justify-content:center;align-items:center;gap:10px;"]);
export var KeyStyle = styled.div.withConfig({
  displayName: "styles__KeyStyle",
  componentId: "sc-11ovi6l-3"
})(["font-family:", ";font-style:normal;font-weight:600;font-size:14px;line-height:18px;letter-spacing:0.02em;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.secondaryFont;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.keyPairText.keyTextColor;
});
export var ValueStyle = styled.div.withConfig({
  displayName: "styles__ValueStyle",
  componentId: "sc-11ovi6l-4"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.secondaryFont;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.default;
});
export var CloseIcon = styled(X).withConfig({
  displayName: "styles__CloseIcon",
  componentId: "sc-11ovi6l-5"
})(["cursor:pointer;transition:all 0.2s ease-in-out;color:", ";user-select:none;margin-right:10px;"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.modalText;
});