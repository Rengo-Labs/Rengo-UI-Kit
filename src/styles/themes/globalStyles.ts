import {createGlobalStyle, css} from 'styled-components'
// @ts-ignore
import Epilogue from '../../fonts/Epilogue/EpilogueRegular.ttf'
// @ts-ignore
import EpilogueBold from '../../fonts/Epilogue/EpilogueBold.ttf'
// @ts-ignore
import EpilogueLight from '../../fonts/Epilogue/EpilogueLight.ttf'
// @ts-ignore
import MyriadPro from '../../fonts/MyriadPro/MyriadProRegular.otf'
// @ts-ignore
import MyriadProSemiBold from '../../fonts/MyriadPro/MyriadProBold.otf'
// @ts-ignore
import MyriadProLight from '../../fonts/MyriadPro/MyriadProLight.otf'

const customFonts = () => {
    return css`
      @font-face {
        font-family: "Epilogue";
        src: local(${Epilogue}), url(${Epilogue}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "EpilogueBold";
        src: local(${EpilogueBold}), url(${EpilogueBold}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "EpilogueLight";
        src: local(${EpilogueLight}), url(${EpilogueLight}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "MyriadPro";
        src: local(${MyriadPro}), url(${MyriadPro}) format("opentype");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "MyriadProSemiBold";
        src: local(${MyriadProSemiBold}), url(${MyriadProSemiBold}) format("opentype");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "MyriadProLight";
        src: local(${MyriadProSemiBold}), url(${MyriadProLight}) format("opentype");
        font-weight: normal;
        font-style: normal;
      }
    `
}
const createPaddingMargin = () => {
    let styles = ''
    for (let i = 0; i <= 9; i++) {
        styles += `
        .p-${i} {
          padding:${i}rem;
        }
        .pl-${i}{
          padding-left:${i}rem;
        }
        .pr-${i}{
          padding-right:${i}rem;
        }
        .px-${i}{
          padding-left:${i}rem;
          padding-right:${i}rem;
        }   
        .py-${i}{
          padding-top:${i}rem;
          padding-bottom:${i}rem;
        }
        .m-${i} {
          margin:${i}rem;
        }
        .ml-${i}{
          margin-left:${i}rem;
        }
        .mr-${i}{
          margin-right:${i}rem;
        }
        .mx-${i}{
          margin-left:${i}rem;
          margin-right:${i}rem;
        }   
        .my-${i}{
          margin-top:${i}rem;
          margin-bottom:${i}rem;
        }
        .px-auto{
          padding-left:auto;
          padding-right:auto;
        }
        .mx-auto{
          margin-left:auto;
          margin-right:auto;
        }
     
        `
    }
    return css`
      ${styles}
    `
}

export const GlobalStyles = createGlobalStyle`
  ${customFonts()}

  body {
    font-family: ${(props: any) => props.theme.typography.primaryFont};
    background-color: ${(props: any) => props.theme.color.background};
    margin: 0;
    padding: 0;
    color: ${(props: any) => props.theme.color.foreground};
    line-height: 1.5;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .no-gutters > .wrap,
  .no-gutters > [class*='wrap-'] {
    padding-right: 0;
    padding-left: 0;
  }

  img,
  video,
  iframe {
    max-width: 100%;
  }

  .align-end {
    display: flex;
    align-items: flex-end;
  }

  .align-right {
    margin-right: auto;
  }

  .align-left {
    margin-left: auto;
  }

  .align-start {
    display: flex;
    align-items: flex-start;
  }

  .align-center {
    display: flex;
    align-items: center;
  }

  .flex-column {
    flex-direction: column;
  }

  .justify-content-center {
    display: flex;
    justify-content: center;
  }

  .justify-content-end {
    display: flex;
    justify-content: flex-end;
  }

  .justify-content-start {
    display: flex;
    justify-content: start;
  }

  .justify-content-between {
    display: flex;
    justify-content: space-between;
  }

  .justify-content-around {
    display: flex;
    justify-content: space-around;
  }

  .justify-content-intial {
    display: flex;
    justify-content: initial;
  }

  .justify-content-inherit {
    display: flex;
    justify-content: inherit;
  }

  .align-items-start {
    display: flex;
    align-items: flex-start;
  }

  .align-items-end {
    display: flex;
    align-items: flex-end;
  }

  .align-items-center {
    display: flex;
    align-items: center;
  }

  .align-items-baseline {
    display: flex;
    align-items: baseline;
  }

  .align-items-stretch {
    display: flex;
    align-items: stretch;
  }

  .align-items-initial {
    display: flex;
    align-items: initial;
  }

  .align-items-inherit {
    display: flex;
    align-items: inherit;
  }

  .object-fit-content {
    object-fit: content;
  }

  .object-fit-fill {
    object-fit: fill;
  }

  .object-fit-cover {
    object-fit: cover;
  }

  .object-fit-scale-down {
    object-fit: scale-down;
  }

  .object-fit-none {
    object-fit: none;
  }

  ${createPaddingMargin()}
`
