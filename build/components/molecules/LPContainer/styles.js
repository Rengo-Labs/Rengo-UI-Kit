import styled from "styled-components";
export var LiquidityWrapped = styled.div.withConfig({
  displayName: "styles__LiquidityWrapped",
  componentId: "sc-1xlmdj6-0"
})(["display:flex;flex-direction:column;gap:16px;@media (min-width:430px){}"]);
export var TitleWrapped = styled.div.withConfig({
  displayName: "styles__TitleWrapped",
  componentId: "sc-1xlmdj6-1"
})(["display:flex;flex-direction:row;width:100%;"]);
export var LiquidityTitle = styled.div.withConfig({
  displayName: "styles__LiquidityTitle",
  componentId: "sc-1xlmdj6-2"
})(["font-size:18px;line-height:26px;color:", ";justify-content:left;flex:1;letter-spacing:0.02em;"], function (props) {
  return props.theme.color.modalText;
});
export var ToggleWrapped = styled.div.withConfig({
  displayName: "styles__ToggleWrapped",
  componentId: "sc-1xlmdj6-3"
})(["justify-content:right;flex:1;"]);