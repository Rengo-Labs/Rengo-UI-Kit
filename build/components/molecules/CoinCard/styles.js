import styled from "styled-components";
export var CoinCardWrapped = styled.div.withConfig({
  displayName: "styles__CoinCardWrapped",
  componentId: "sc-11hu484-0"
})(["display:flex;flex-direction:column;padding:0px 0px 8px;border-radius:16px;background:", ";@media (min-width:430px){}"], function (_ref) {
  var theme = _ref.theme;
  return theme.background.coinCard;
});
export var CoinCardFooter = styled.div.withConfig({
  displayName: "styles__CoinCardFooter",
  componentId: "sc-11hu484-1"
})(["display:flex;padding:0px 8px 8px 16px;@media (min-width:430px){padding:0px 32px 8px 48px;}"]);
export var InputWrapped = styled.div.withConfig({
  displayName: "styles__InputWrapped",
  componentId: "sc-11hu484-2"
})(["padding:12px 8px 8px 8px;@media (min-width:430px){padding:16px 32px 8px 32px;}"]);
export var ButtonWrapped = styled.div.withConfig({
  displayName: "styles__ButtonWrapped",
  componentId: "sc-11hu484-3"
})(["display:flex;flex:1;gap:8px;font-size:14px;line-height:18px;letter-spacing:0.02em;justify-content:", ";"], function (props) {
  return props.left ? 'left' : 'right';
});