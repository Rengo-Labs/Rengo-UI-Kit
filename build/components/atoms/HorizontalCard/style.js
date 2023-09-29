import styled from 'styled-components';
import { Trash2, Shuffle, PlusCircle, Star, MoreHorizontal, Eye, TrendingUp, MinusCircle, DollarSign } from 'react-feather';
export var Wrapper = styled.div.withConfig({
  displayName: "style__Wrapper",
  componentId: "sc-1xc9drk-0"
})(["position:relative;width:100%;height:72px;display:flex;justify-content:space-between;border-radius:16px;background:", ";gap:15px;@media (max-width:900px){height:auto;flex-direction:column;gap:0;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.background.wallet.connectedOptions;
});
export var TokenInfoWrapper = styled.div.withConfig({
  displayName: "style__TokenInfoWrapper",
  componentId: "sc-1xc9drk-1"
})(["display:flex;justify-content:center;align-items:center;flex:1.4;@media (max-width:900px){height:50px;justify-content:space-between;padding-top:10px;padding-bottom:10px;}"]);
export var TokenInfoInnerWrapper = styled.div.withConfig({
  displayName: "style__TokenInfoInnerWrapper",
  componentId: "sc-1xc9drk-2"
})(["min-width:190px;display:flex;justify-content:flex-start;align-items:center;padding-left:12px;gap:8px;"]);
export var TokenPairsNamesWrapper = styled.div.withConfig({
  displayName: "style__TokenPairsNamesWrapper",
  componentId: "sc-1xc9drk-3"
})(["display:flex;justify-content:center;align-items:center;flex-wrap:wrap;", " ", ""], function (props) {
  return props.linkable ? 'cursor: pointer;' : '';
}, function (props) {
  return props.linkable ? '&:hover{ color: blue; }' : '';
});
export var ImageContainer = styled.div.withConfig({
  displayName: "style__ImageContainer",
  componentId: "sc-1xc9drk-4"
})(["display:flex;align-items:center;width:52px;"]);
export var Image = styled.img.withConfig({
  displayName: "style__Image",
  componentId: "sc-1xc9drk-5"
})(["height:30px;margin-right:-10px;"]);
export var TokenName = styled.p.withConfig({
  displayName: "style__TokenName",
  componentId: "sc-1xc9drk-6"
})(["font-family:", ";font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.secondaryFont;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.default;
});
export var RowWrapper = styled.div.withConfig({
  displayName: "style__RowWrapper",
  componentId: "sc-1xc9drk-7"
})(["width:60%;display:flex;flex-direction:row;gap:15px;flex:6;@media (max-width:900px){width:100%;gap:0px;display:flex;justify-content:space-evenly;min-height:60px;padding:0 12px;border-top:", ";border-bottom:", ";}"], function (_ref4) {
  var theme = _ref4.theme;
  return "1px solid ".concat(theme.border.table);
}, function (_ref5) {
  var theme = _ref5.theme;
  return "1px solid ".concat(theme.border.table);
});
export var TableRow = styled.div.withConfig({
  displayName: "style__TableRow",
  componentId: "sc-1xc9drk-8"
})(["width:95%;display:flex;flex-direction:row;gap:10px;@media (max-width:900px){gap:0%;width:100%;}"]);
export var RowUserPoolInfo = styled.div.withConfig({
  displayName: "style__RowUserPoolInfo",
  componentId: "sc-1xc9drk-9"
})(["display:flex;gap:15px;flex:2.2;flex-direction:row;@media (max-width:900px){width:100%;flex-direction:column;justify-content:space-evenly;height:60px;padding:0 12px;gap:0px;}"]);
export var PairsLiquidityWrapper = styled.div.withConfig({
  displayName: "style__PairsLiquidityWrapper",
  componentId: "sc-1xc9drk-10"
})(["display:flex;flex:", ";flex-direction:column;justify-content:center;@media (max-width:900px){width:50%;min-height:60px;flex-direction:column;align-items:flex-start;}"], function (props) {
  return props.isLastItem ? '0.7' : '1';
});
export var PairsLiquidityMobileWrapper = styled.div.withConfig({
  displayName: "style__PairsLiquidityMobileWrapper",
  componentId: "sc-1xc9drk-11"
})(["display:flex;flex:1;flex-direction:row;justify-content:center;width:100%;padding-left:10px;padding-right:10px;justify-content:flex-start;@media (max-width:900px){min-height:78px;align-items:flex-start;border-top:", ";align-items:center;justify-content:flex-start;}"], function (_ref6) {
  var theme = _ref6.theme;
  return "1px solid ".concat(theme.border.table);
});
export var PairLiquidityName = styled.p.withConfig({
  displayName: "style__PairLiquidityName",
  componentId: "sc-1xc9drk-12"
})(["font-family:", ";font-size:14px;line-height:18px;font-weight:400;letter-spacing:0.02em;@media (max-width:900px){display:grid;align-content:center;justify-self:start;}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.typography.secondaryFont;
});
export var PairLiquidityValue = styled.p.withConfig({
  displayName: "style__PairLiquidityValue",
  componentId: "sc-1xc9drk-13"
})(["font-family:", ";font-weight:600;font-size:14px;line-height:18px;letter-spacing:0.02em;word-wrap:anywhere;color:", ";@media (max-width:900px){display:grid;align-content:center;justify-self:start;}"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.typography.secondaryFont;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.modalText;
});
export var UserPoolInfoWrapper = styled.div.withConfig({
  displayName: "style__UserPoolInfoWrapper",
  componentId: "sc-1xc9drk-14"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;flex:", ";@media (max-width:900px){width:50%;min-height:60px;flex-direction:row;align-items:flex-start;}"], function (props) {
  return props.isLiquidity ? '1.2' : '1';
});
export var MobilleContainer = styled.div.withConfig({
  displayName: "style__MobilleContainer",
  componentId: "sc-1xc9drk-15"
})(["display:flex;flex-direction:column;"]);
export var MobileRow = styled.div.withConfig({
  displayName: "style__MobileRow",
  componentId: "sc-1xc9drk-16"
})(["display:flex;justify-content:space-around;"]);
export var MobileTextContent = styled.div.withConfig({
  displayName: "style__MobileTextContent",
  componentId: "sc-1xc9drk-17"
})(["display:grid;align-items:center;"]);
export var UserPoolInfoMobileWrapper = styled.div.withConfig({
  displayName: "style__UserPoolInfoMobileWrapper",
  componentId: "sc-1xc9drk-18"
})(["display:flex;flex-direction:column;align-items:flex-start;flex:", ";padding-left:10px;padding-right:10px;@media (max-width:900px){min-height:78px;border-top:", ";justify-content:center;}"], function (props) {
  return props.isLiquidity ? '1.2' : '1';
}, function (_ref10) {
  var theme = _ref10.theme;
  return "1px solid ".concat(theme.border.table);
});
export var UserPoolInfoName = styled.p.withConfig({
  displayName: "style__UserPoolInfoName",
  componentId: "sc-1xc9drk-19"
})(["font-family:", ";font-size:14px;line-height:18px;font-weight:400;letter-spacing:0.02em;@media (max-width:800px){display:grid;align-content:center;justify-self:start;}"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.typography.secondaryFont;
});
export var UserPoolInfoValue = styled.p.withConfig({
  displayName: "style__UserPoolInfoValue",
  componentId: "sc-1xc9drk-20"
})(["font-family:", ";font-weight:600;font-size:14px;line-height:18px;letter-spacing:0.02em;word-wrap:anywhere;color:", ";@media (max-width:800px){display:grid;align-content:center;justify-self:start;}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.typography.secondaryFont;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.color.modalText;
});
export var ActionsWrapper = styled.div.withConfig({
  displayName: "style__ActionsWrapper",
  componentId: "sc-1xc9drk-21"
})(["z-index:10;position:absolute;width:155px;height:auto;padding-top:10px;padding-bottom:10px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;background:", ";box-shadow:8px 8px 60px 90px rgba(70,52,243,0.1);border-radius:16px;align-items:center;right:50px;top:10px;display:", ";"], function (_ref14) {
  var theme = _ref14.theme;
  return theme.background.searchInput;
}, function (_ref15) {
  var actionsDialogActive = _ref15.actionsDialogActive;
  return actionsDialogActive ? 'flex;' : 'none;';
});
export var ActionsInnerWrapper = styled.div.withConfig({
  displayName: "style__ActionsInnerWrapper",
  componentId: "sc-1xc9drk-22"
})(["display:flex;flex-direction:column;justify-content:space-between;height:82%;width:72%;gap:20px;"]);
export var ActionItem = styled.div.withConfig({
  displayName: "style__ActionItem",
  componentId: "sc-1xc9drk-23"
})(["display:", ";gap:", ";cursor:pointer;transition:all 0.2s ease-in-out;&:active{transform:scale(0.9);filter:brightness(0.8);}"], function (_ref16) {
  var hidden = _ref16.hidden;
  return hidden ? 'none;' : 'flex;';
}, function (_ref17) {
  var hidden = _ref17.hidden;
  return hidden ? '0px;' : '10px;';
});
export var ActionName = styled.p.withConfig({
  displayName: "style__ActionName",
  componentId: "sc-1xc9drk-24"
})(["display:flex;font-family:", ";font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;color:", ";"], function (_ref18) {
  var theme = _ref18.theme;
  return theme.typography.secondaryFont;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.color.modalText;
});
export var DeleteIcon = styled(Trash2).withConfig({
  displayName: "style__DeleteIcon",
  componentId: "sc-1xc9drk-25"
})(["user-select:none;cursor:pointer;transition:all 0.2s ease-in-out;&:active{transform:scale(0.9);filter:brightness(0.8);}"]);
export var ShuffleIcon = styled(Shuffle).withConfig({
  displayName: "style__ShuffleIcon",
  componentId: "sc-1xc9drk-26"
})(["user-select:none;cursor:pointer;transition:all 0.2s ease-in-out;&:active{transform:scale(0.9);filter:brightness(0.8);}"]);
export var AddLiquidityIcon = styled(PlusCircle).withConfig({
  displayName: "style__AddLiquidityIcon",
  componentId: "sc-1xc9drk-27"
})(["user-select:none;cursor:pointer;transition:all 0.2s ease-in-out;&:active{transform:scale(0.9);filter:brightness(0.8);}"]);
export var AddStakeIcon = styled(TrendingUp).withConfig({
  displayName: "style__AddStakeIcon",
  componentId: "sc-1xc9drk-28"
})(["user-select:none;cursor:pointer;transition:all 0.2s ease-in-out;&:active{transform:scale(0.9);filter:brightness(0.8);}"]);
export var UnStakeIcon = styled(MinusCircle).withConfig({
  displayName: "style__UnStakeIcon",
  componentId: "sc-1xc9drk-29"
})(["user-select:none;cursor:pointer;transition:all 0.2s ease-in-out;&:active{transform:scale(0.9);filter:brightness(0.8);}"]);
export var ClaimIcon = styled(DollarSign).withConfig({
  displayName: "style__ClaimIcon",
  componentId: "sc-1xc9drk-30"
})(["user-select:none;cursor:pointer;transition:all 0.2s ease-in-out;&:active{transform:scale(0.9);filter:brightness(0.8);}"]);
export var FavoriteIcon = styled(Star).withConfig({
  displayName: "style__FavoriteIcon",
  componentId: "sc-1xc9drk-31"
})(["user-select:none;cursor:pointer;transition:all 0.2s ease-in-out;&:active{transform:scale(0.9);filter:brightness(0.8);}@media (min-width:900px){display:none;}"]);
export var SeeActionsIconWrapper = styled.div.withConfig({
  displayName: "style__SeeActionsIconWrapper",
  componentId: "sc-1xc9drk-32"
})(["display:", ";justify-content:", ";align-items:", ";width:32px;height:32px;border-radius:", ";background-color:", ";margin-right:12px;user-select:none;align-self:center;@media (min-width:900px){display:", ";}"], function (_ref20) {
  var hidden = _ref20.hidden;
  return hidden ? 'flex' : 'none';
}, function (_ref21) {
  var actionsDialogActive = _ref21.actionsDialogActive;
  return actionsDialogActive ? 'center' : 'center';
}, function (_ref22) {
  var actionsDialogActive = _ref22.actionsDialogActive;
  return actionsDialogActive ? 'center' : 'center';
}, function (_ref23) {
  var actionsDialogActive = _ref23.actionsDialogActive;
  return actionsDialogActive ? '6px' : '0';
}, function (_ref24) {
  var actionsDialogActive = _ref24.actionsDialogActive;
  return actionsDialogActive ? '#AA9FF9' : 'transparent';
}, function (_ref25) {
  var hidden = _ref25.hidden;
  return hidden ? 'none' : 'flex';
});
export var SeeActionsIcon = styled(MoreHorizontal).withConfig({
  displayName: "style__SeeActionsIcon",
  componentId: "sc-1xc9drk-33"
})(["cursor:pointer;transition:all 0.2s ease-in-out;user-select:none;&:active{transform:scale(0.9);filter:brightness(0.8);}@media (min-width:900px){display:", ";}"], function (_ref26) {
  var hidden = _ref26.hidden;
  return hidden ? 'none' : 'flex';
});
export var ViewIcon = styled(Eye).withConfig({
  displayName: "style__ViewIcon",
  componentId: "sc-1xc9drk-34"
})(["cursor:pointer;transition:all 0.2s ease-in-out;user-select:none;&:active{transform:scale(0.9);filter:brightness(0.8);}@media (min-width:800px){display:none;}"]);