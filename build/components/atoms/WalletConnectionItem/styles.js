import styled from 'styled-components';
export var Container = styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-wboull-0"
})(["display:flex;justify-content:flex-start;align-items:center;gap:4px;padding:8px;border-radius:8px;cursor:pointer;background:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.wallet.background;
});
export var Icon = styled.img.withConfig({
  displayName: "styles__Icon",
  componentId: "sc-wboull-1"
})(["margin-right:5px;width:24px;height:24px;"]);
export var Text = styled.p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-wboull-2"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:16px;line-height:24px;letter-spacing:0.02em;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.secondaryFont;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.default;
});