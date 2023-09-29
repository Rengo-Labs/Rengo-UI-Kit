import { createGlobalStyle, css } from 'styled-components';
// @ts-ignore
import Epilogue from '../../fonts/Epilogue/EpilogueRegular.ttf';
// @ts-ignore
import EpilogueBold from '../../fonts/Epilogue/EpilogueBold.ttf';
// @ts-ignore
import EpilogueLight from '../../fonts/Epilogue/EpilogueLight.ttf';
// @ts-ignore
import MyriadPro from '../../fonts/MyriadPro/MyriadProRegular.otf';
// @ts-ignore
import MyriadProSemiBold from '../../fonts/MyriadPro/MyriadProBold.otf';
// @ts-ignore
import MyriadProLight from '../../fonts/MyriadPro/MyriadProLight.otf';
var customFonts = function customFonts() {
  return css(["@font-face{font-family:\"Epilogue\";src:local(", "),url(", ") format(\"truetype\");font-weight:normal;font-style:normal;}@font-face{font-family:\"EpilogueBold\";src:local(", "),url(", ") format(\"truetype\");font-weight:normal;font-style:normal;}@font-face{font-family:\"EpilogueLight\";src:local(", "),url(", ") format(\"truetype\");font-weight:normal;font-style:normal;}@font-face{font-family:\"MyriadPro\";src:local(", "),url(", ") format(\"opentype\");font-weight:normal;font-style:normal;}@font-face{font-family:\"MyriadProSemiBold\";src:local(", "),url(", ") format(\"opentype\");font-weight:normal;font-style:normal;}@font-face{font-family:\"MyriadProLight\";src:local(", "),url(", ") format(\"opentype\");font-weight:normal;font-style:normal;}"], Epilogue, Epilogue, EpilogueBold, EpilogueBold, EpilogueLight, EpilogueLight, MyriadPro, MyriadPro, MyriadProSemiBold, MyriadProSemiBold, MyriadProSemiBold, MyriadProLight);
};
var createPaddingMargin = function createPaddingMargin() {
  var styles = '';
  for (var i = 0; i <= 9; i++) {
    styles += "\n        .p-".concat(i, " {\n          padding:").concat(i, "rem;\n        }\n        .pl-").concat(i, "{\n          padding-left:").concat(i, "rem;\n        }\n        .pr-").concat(i, "{\n          padding-right:").concat(i, "rem;\n        }\n        .px-").concat(i, "{\n          padding-left:").concat(i, "rem;\n          padding-right:").concat(i, "rem;\n        }   \n        .py-").concat(i, "{\n          padding-top:").concat(i, "rem;\n          padding-bottom:").concat(i, "rem;\n        }\n        .m-").concat(i, " {\n          margin:").concat(i, "rem;\n        }\n        .ml-").concat(i, "{\n          margin-left:").concat(i, "rem;\n        }\n        .mr-").concat(i, "{\n          margin-right:").concat(i, "rem;\n        }\n        .mx-").concat(i, "{\n          margin-left:").concat(i, "rem;\n          margin-right:").concat(i, "rem;\n        }   \n        .my-").concat(i, "{\n          margin-top:").concat(i, "rem;\n          margin-bottom:").concat(i, "rem;\n        }\n        .px-auto{\n          padding-left:auto;\n          padding-right:auto;\n        }\n        .mx-auto{\n          margin-left:auto;\n          margin-right:auto;\n        }\n     \n        ");
  }
  return css(["", ""], styles);
};
export var GlobalStyles = createGlobalStyle(["", " body{font-family:", ";background-color:", ";margin:0;padding:0;color:", ";line-height:1.5;overflow-x:hidden;text-rendering:optimizeLegibility;}*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}.no-gutters > .wrap,.no-gutters > [class*='wrap-']{padding-right:0;padding-left:0;}img,video,iframe{max-width:100%;}.align-end{display:flex;align-items:flex-end;}.align-right{margin-right:auto;}.align-left{margin-left:auto;}.align-start{display:flex;align-items:flex-start;}.align-center{display:flex;align-items:center;}.flex-column{flex-direction:column;}.justify-content-center{display:flex;justify-content:center;}.justify-content-end{display:flex;justify-content:flex-end;}.justify-content-start{display:flex;justify-content:start;}.justify-content-between{display:flex;justify-content:space-between;}.justify-content-around{display:flex;justify-content:space-around;}.justify-content-intial{display:flex;justify-content:initial;}.justify-content-inherit{display:flex;justify-content:inherit;}.align-items-start{display:flex;align-items:flex-start;}.align-items-end{display:flex;align-items:flex-end;}.align-items-center{display:flex;align-items:center;}.align-items-baseline{display:flex;align-items:baseline;}.align-items-stretch{display:flex;align-items:stretch;}.align-items-initial{display:flex;align-items:initial;}.align-items-inherit{display:flex;align-items:inherit;}.object-fit-content{object-fit:content;}.object-fit-fill{object-fit:fill;}.object-fit-cover{object-fit:cover;}.object-fit-scale-down{object-fit:scale-down;}.object-fit-none{object-fit:none;}", ""], customFonts(), function (props) {
  return props.theme.typography.primaryFont;
}, function (props) {
  return props.theme.color.background;
}, function (props) {
  return props.theme.color.foreground;
}, createPaddingMargin());