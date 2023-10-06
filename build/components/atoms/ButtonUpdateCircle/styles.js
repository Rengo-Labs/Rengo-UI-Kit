import styled from "styled-components";
export var Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-ecix3y-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;&:hover{opacity:1;}&:active{opacity:0.8;}&:focus{opacity:0.8;}&:disabled{opacity:0.3;}"]);
export var TrailCircular = styled.path.withConfig({
  displayName: "styles__TrailCircular",
  componentId: "sc-ecix3y-1"
})(["stroke:", ""], function (props) {
  return props.isPrincipal ? props.theme.color.primary.default : '#CCC';
});