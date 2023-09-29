import styled from 'styled-components';
import { Column } from '../../atoms';
export var Wrapper = styled(Column).withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-14ci57f-0"
})(["background-color:", ";border-radius:16px;height:390px;display:flex;flex-direction:column;gap:2px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.tab.background;
});