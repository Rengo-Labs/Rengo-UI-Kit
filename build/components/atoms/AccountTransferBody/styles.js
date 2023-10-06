import styled from 'styled-components';
import { CheckCircle } from 'react-feather';
export var TR = styled.tr.withConfig({
  displayName: "styles__TR",
  componentId: "sc-vqq4zs-0"
})(["display:flex;align-items:center;justify-content:space-evenly;gap:15px;width:100%;border-bottom:1px solid ", ";&:last-child{border-bottom:none;}"], function (props) {
  return props.theme.border.default;
});
export var TD = styled.td.withConfig({
  displayName: "styles__TD",
  componentId: "sc-vqq4zs-1"
})(["flex:1;min-height:32px;padding:", ";display:flex;align-items:center;justify-content:", ";flex-wrap:wrap;gap:8.94px;overflow-wrap:anywhere;"], function (_ref) {
  var isFirstItem = _ref.isFirstItem;
  return isFirstItem ? '10px 0 10px 10px' : '10px 0 10px 0';
}, function (_ref2) {
  var isFirstItem = _ref2.isFirstItem;
  return isFirstItem ? 'flex-start' : 'center';
});
export var TDInnerContainer = styled.div.withConfig({
  displayName: "styles__TDInnerContainer",
  componentId: "sc-vqq4zs-2"
})(["display:flex;flex-direction:column;"]);
export var Text = styled.p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-vqq4zs-3"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:16px;line-height:24px;text-align:center;letter-spacing:0.02em;color:", ";align-self:center;"], function (props) {
  return props.theme.typography.secondaryFont;
}, function (props) {
  return props.theme.color.default;
});
export var TDText = styled(Text).withConfig({
  displayName: "styles__TDText",
  componentId: "sc-vqq4zs-4"
})(["font-style:normal;font-weight:400;font-size:12px;line-height:16px;letter-spacing:0.02em;align-self:flex-start;color:", ";"], function (props) {
  return props.theme.color.primary.Text;
});
export var IconWrapper = styled.div.withConfig({
  displayName: "styles__IconWrapper",
  componentId: "sc-vqq4zs-5"
})(["display:flex;justify-content:center;align-items:center;gap:5px;"]);
export var CheckIcon = styled(CheckCircle).withConfig({
  displayName: "styles__CheckIcon",
  componentId: "sc-vqq4zs-6"
})(["color:", ";fill:", ";"], function (props) {
  return props.theme.background.searchInput;
}, function (props) {
  return props.theme.border.greenMalachite;
});
export var Icon = styled.img.attrs(function (_ref3) {
  var width = _ref3.width,
    height = _ref3.height;
  return {
    width: width,
    height: height
  };
}).withConfig({
  displayName: "styles__Icon",
  componentId: "sc-vqq4zs-7"
})(["&:first-child{margin-right:-15px;}"]);