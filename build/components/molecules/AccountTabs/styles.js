import { Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
export var Item = styled.div.withConfig({
  displayName: "styles__Item",
  componentId: "sc-tdbr5h-0"
})(["width:100%;"]);
export var TabContent = styled(Row).withConfig({
  displayName: "styles__TabContent",
  componentId: "sc-tdbr5h-1"
})(["background-color:", ";border-radius:0 0 16px 16px;height:100%;"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.tab.background;
});