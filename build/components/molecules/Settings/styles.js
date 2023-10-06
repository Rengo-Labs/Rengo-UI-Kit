import styled from 'styled-components';
import { X } from 'react-feather';
import { Column } from '../../atoms';
export var Wrapper = styled(Column).withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-tr2wpf-0"
})(["background-color:", ";border-radius:16px;padding:1rem 2rem 1rem 2rem;"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.tab.background;
});
export var Text = styled.p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-tr2wpf-1"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:18px;line-height:26px;letter-spacing:0.02em;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.secondaryFont;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.modalText;
});
export var CloseIcon = styled(X).withConfig({
  displayName: "styles__CloseIcon",
  componentId: "sc-tr2wpf-2"
})(["cursor:pointer;transition:all 0.2s ease-in-out;color:", ";user-select:none;margin-right:10px;"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.modalText;
});