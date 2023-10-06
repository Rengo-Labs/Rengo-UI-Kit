import styled from 'styled-components';
export var BurgerButtonStyled = styled.button.attrs(function (props) {
  return props;
}).withConfig({
  displayName: "styles__BurgerButtonStyled",
  componentId: "sc-1ns0mm4-0"
})(["display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;&:focus{outline:none;}& div{width:2rem;height:0.25rem;background:#FFFFFF;border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;:first-child{transform:", ";}:nth-child(2){opacity:", ";transform:", ";}:nth-child(3){transform:", ";}}"], function (props) {
  return props.open ? 'rotate(45deg)' : 'rotate(0)';
}, function (props) {
  return props.open ? '0' : '1';
}, function (props) {
  return props.open ? 'translateX(20px)' : 'translateX(0)';
}, function (props) {
  return props.open ? 'rotate(-45deg)' : 'rotate(0)';
});