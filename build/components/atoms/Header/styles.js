import styled from 'styled-components';
export var WrapperStyle = styled.div.withConfig({
  displayName: "styles__WrapperStyle",
  componentId: "sc-imcrah-0"
})(["display:flex;justify-content:space-between;align-items:center;gap:64px;width:100%;max-height:42px;padding:8px 24px 8px 32px;border-radius:16px 16px 0 0;background-color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.primary.default;
});
export var TextStyle = styled.p.withConfig({
  displayName: "styles__TextStyle",
  componentId: "sc-imcrah-1"
})(["font-family:", ";font-style:normal;font-weight:", ";text-transform:capitalize;font-size:18px;line-height:26px;letter-spacing:0.02em;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.secondaryFont;
}, function (_ref3) {
  var isTitle = _ref3.isTitle;
  return isTitle ? 600 : 400;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.white;
});