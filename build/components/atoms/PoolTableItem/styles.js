import { Eye, MoreHorizontal, PlusCircle, Shuffle, Trash2 } from 'react-feather';
import styled from 'styled-components';
export var TR = styled.tr.withConfig({
  displayName: "styles__TR",
  componentId: "sc-1bonc1k-0"
})(["gap:15px;height:108px;border-bottom:1px solid #EAEBEC;border-bottom:", ";display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;"], function (_ref) {
  var theme = _ref.theme;
  return "1px solid ".concat(theme.border.default);
});
export var TD = styled.td.withConfig({
  displayName: "styles__TD",
  componentId: "sc-1bonc1k-1"
})(["min-height:32px;display:flex;align-items:center;justify-content:", ";flex-wrap:wrap;gap:8.94px;padding-left:", ";padding-right:", ";overflow-wrap:anywhere;"], function (_ref2) {
  var isLastItem = _ref2.isLastItem;
  return isLastItem ? 'center' : 'flex-start';
}, function (_ref3) {
  var isFirstItem = _ref3.isFirstItem;
  return isFirstItem ? '16.94px' : 0;
}, function (_ref4) {
  var isLastItem = _ref4.isLastItem;
  return isLastItem ? '23px' : 0;
});
export var Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1bonc1k-2"
})(["display:grid;grid-template-columns:1fr 5fr;align-items:center;justify-content:flex-start;width:100%;"]);
export var TokenPairWrapper = styled.div.withConfig({
  displayName: "styles__TokenPairWrapper",
  componentId: "sc-1bonc1k-3"
})(["display:flex;align-items:center;justify-content:flex-start;gap:6px;"]);
export var TextContainer = styled.div.withConfig({
  displayName: "styles__TextContainer",
  componentId: "sc-1bonc1k-4"
})(["display:flex;justify-content:space-around;align-items:center;flex:1;"]);
export var Text = styled.p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1bonc1k-5"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;color:", ";align-self:center;", " ", ""], function (props) {
  return props.theme.typography.secondaryFont;
}, function (props) {
  return props.theme.color.default;
}, function (props) {
  return props.linkable ? 'cursor: pointer;' : '';
}, function (props) {
  return props.linkable ? '&:hover{ color: blue; }' : '';
});
export var FavoriteIcon = styled.img.withConfig({
  displayName: "styles__FavoriteIcon",
  componentId: "sc-1bonc1k-6"
})(["user-select:none;cursor:pointer;transition:all 0.2s ease-in-out;color:", ";&:active{transform:scale(0.9);filter:brightness(0.8);}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.default;
});
export var ActionsWrapper = styled.div.withConfig({
  displayName: "styles__ActionsWrapper",
  componentId: "sc-1bonc1k-7"
})(["display:flex;width:132px;height:171px;position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;background:", ";box-shadow:5px 5px 8px 8px rgba(70,52,243,0.1);border-radius:16px;align-items:center;right:50px;top:10px;display:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.background.searchInput;
}, function (_ref7) {
  var actionsDialogActive = _ref7.actionsDialogActive;
  return actionsDialogActive ? 'flex;' : 'none;';
});
export var ActionsInnerWrapper = styled.div.withConfig({
  displayName: "styles__ActionsInnerWrapper",
  componentId: "sc-1bonc1k-8"
})(["width:100%;display:flex;justify-content:space-around;display:flex;flex-direction:column;height:82%;width:72%;gap:20px;"]);
export var ActionItem = styled.div.withConfig({
  displayName: "styles__ActionItem",
  componentId: "sc-1bonc1k-9"
})(["display:flex;gap:10px;@media (min-width:800px){display:", ";gap:", ";}cursor:pointer;transition:all 0.2s ease-in-out;&:active{transform:scale(0.9);filter:brightness(0.8);}"], function (_ref8) {
  var hidden = _ref8.hidden;
  return hidden ? 'none;' : 'flex;';
}, function (_ref9) {
  var hidden = _ref9.hidden;
  return hidden ? '0px;' : '10px;';
});
export var ActionName = styled.p.withConfig({
  displayName: "styles__ActionName",
  componentId: "sc-1bonc1k-10"
})(["display:none;display:flex;font-family:", ";font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;color:", ";"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.typography.secondaryFont;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.color.modalText;
});
export var DeleteIcon = styled(Trash2).withConfig({
  displayName: "styles__DeleteIcon",
  componentId: "sc-1bonc1k-11"
})(["user-select:none;cursor:pointer;transition:all 0.2s ease-in-out;&:active{transform:scale(0.9);filter:brightness(0.8);}"]);
export var ShuffleIcon = styled(Shuffle).withConfig({
  displayName: "styles__ShuffleIcon",
  componentId: "sc-1bonc1k-12"
})(["user-select:none;cursor:pointer;transition:all 0.2s ease-in-out;&:active{transform:scale(0.9);filter:brightness(0.8);}"]);
export var AddLiquidityIcon = styled(PlusCircle).withConfig({
  displayName: "styles__AddLiquidityIcon",
  componentId: "sc-1bonc1k-13"
})(["user-select:none;cursor:pointer;transition:all 0.2s ease-in-out;&:active{transform:scale(0.9);filter:brightness(0.8);}"]);
export var SeeActionsIconWrapper = styled.div.withConfig({
  displayName: "styles__SeeActionsIconWrapper",
  componentId: "sc-1bonc1k-14"
})(["display:", ";justify-content:", ";align-items:", ";width:32px;height:32px;border-radius:", ";background-color:", ";margin-right:12px;user-select:none;position:relative;"], function (_ref12) {
  var actionsDialogActive = _ref12.actionsDialogActive;
  return actionsDialogActive ? 'flex' : 'flex';
}, function (_ref13) {
  var actionsDialogActive = _ref13.actionsDialogActive;
  return actionsDialogActive ? 'center' : 'center';
}, function (_ref14) {
  var actionsDialogActive = _ref14.actionsDialogActive;
  return actionsDialogActive ? 'center' : 'center';
}, function (_ref15) {
  var actionsDialogActive = _ref15.actionsDialogActive;
  return actionsDialogActive ? '6px' : '0';
}, function (_ref16) {
  var actionsDialogActive = _ref16.actionsDialogActive;
  return actionsDialogActive ? '#AA9FF9' : 'transparent';
});
export var SeeActionsIcon = styled(MoreHorizontal).withConfig({
  displayName: "styles__SeeActionsIcon",
  componentId: "sc-1bonc1k-15"
})(["cursor:pointer;transition:all 0.2s ease-in-out;user-select:none;&:active{transform:scale(0.9);filter:brightness(0.8);}"]);
export var ViewIcon = styled(Eye).withConfig({
  displayName: "styles__ViewIcon",
  componentId: "sc-1bonc1k-16"
})(["cursor:pointer;transition:all 0.2s ease-in-out;user-select:none;&:active{transform:scale(0.9);filter:brightness(0.8);}"]);
export var IconWrapper = styled.div.withConfig({
  displayName: "styles__IconWrapper",
  componentId: "sc-1bonc1k-17"
})(["display:flex;justify-content:center;align-items:center;"]);
export var Icon = styled.img.attrs(function (_ref17) {
  var width = _ref17.width,
    height = _ref17.height;
  return {
    width: width,
    height: height
  };
}).withConfig({
  displayName: "styles__Icon",
  componentId: "sc-1bonc1k-18"
})(["&:first-child{margin-right:-15px}"]);