export interface theme {
    layout: {
        breakpoints: number[]
        container: number[]
        columns: number
        gutter: string
    }
    typography: {
        primaryFont: string
        secondaryFont: string
        buttonFont: string
        inputFont: string
        h1: string
        h2: string
        h3: string
        h4: string
        h5: string
        h6: string
        p: string
        small: string
    }
    color: {
        default: string
        accent1: string
        accent2: string
        accent3: string
        accent4: string
        accent5: string
        accent6: string
        accent7: string
        accent8: string
        foreground: string
        grey: string
        borderhover: string
        white: string
        black: string
        darkGrey: string
        lavender: string
        modalText: string
        textInactive: string
        error: {
            lighter: string
            light: string
            default: string
            dark: string
        }
        primary: {
            default: string
            dark: string
        }
        success: {
            lighter: string
            light: string
            default: string
            dark: string
        }
        warning: {
            lighter: string
            light: string
            default: string
            dark: string
        }
        keyPairText: {
            keyTextColor: string
            valueIsPorcentageTextColor: string
            valueTextColor: string
        }
        tokenOption: {
            tokenOptionBackgroundColor: string
            tokenOptionTextColor: string
            tokenOption1Color: string
            tokenOption2Color: string
        }
        tab: {
            background: string
            borderActive: string
            borderInactive: string
            textActive: string
            textInactive: string
        },
        toggleButton: {
          default: string
        },
        table: {
          header: {
            background: string
            text: string
          },
          body: {
            text: string
          }
        }
    }
    shadow: {
        small: string
        medium: string
        large: string
        sticky: string
        hover: string
        custom: string
    }
    background: {
      default: string
      searchInput: string
      coinCard: string
      menu: string
      gasFeeInput: string
      palePink: string
      lightGray: string
      teaGreen: string
      sliderThumb: string
      inactiveLavander: string
      icon: string
    }
    border: {
      darkLilac: string
      greenMantis: string
      redValencia: string
      veryLightPurple: string
      redCinnabar: string
      greenMalachite: string
      green: string
      red: string
      lightBlue: string
      table: string
      slider: string
      default: string
      dialog: string
    },
    defaultColor: string
    primaryColor: string
    secondaryColor: string
    errorColor: string
    errordarkColor: string
    successColor: string
    successdarkColor: string
    warningColor: string
    warningdarkColor: string
    borderColor: string

    backgroundColor: string
    subbackgroundColor: string
    subbackgroundInverseColor: string

    texttitleColor: string
    textColor: string
    subtextColor: string
    primarybtntextColor: string
    btntextColor: string
    btntextHoverColor: string

    loadingColor: string
    loadinglabelColor: string
    btndisabledbackgroundColor: string
    btnbackgroundColor: string
    btnsmallbackgroundColor: string
    borderHoverColor: string
}

export const defaultTheme: theme = {
    layout: {
        breakpoints: [430, 770, 768, 1024, 1200],
        container: [640, 720, 960, 1400],
        columns: 12,
        gutter: '15px'
    },
    typography: {
        primaryFont:
            '"Epilogue", "MyriadPro", sans-serif;',
        secondaryFont:
            '"MyriadPro", "Epilogue", sans-serif;',
        buttonFont:
            '"MyriadPro", "Epilogue", sans-serif;',
        inputFont:
            '"Epilogue", "MyriadPro", sans-serif;',
        h1: '3rem',
        h2: '2.25rem',
        h3: '1.5rem',
        h4: '1.25rem',
        h5: '1rem',
        h6: '0.875rem',
        p: '1rem',
        small: '0.875rem'
    },
    color: {
        default: '#545454',
        accent1: '#fafafa',
        accent2: '#EAEAEA',
        accent3: '#999',
        accent4: '#888',
        accent5: '#666',
        accent6: '#444',
        accent7: '#333',
        accent8: '#111',
        foreground: '#000',
        grey: '#F9F9F9',
        borderhover: '#000',
        white: '#FFFFFF',
        black: '#000',
        darkGrey: '#545454',
        lavender: '#E3DFFD',
        modalText: '#715FF5',
        textInactive: '#767676',
        error: {
            lighter: '#F7D4D6',
            light: '#FF1A1A',
            default: '#ED6767',
            dark: '#C50000'
        },
        primary: {
            default: '#715FF5',
            dark: '#715FF5'
        },
        success: {
            lighter: '#D3E5FF',
            light: '#3291FF',
            default: '#8AED67',
            dark: '#0761D1'
        },
        warning: {
            lighter: '#FFEFCF',
            light: '#F7B955',
            default: '#F5A623',
            dark: '#AB570A'
        },
        keyPairText: {
            keyTextColor: '#080808',
            valueIsPorcentageTextColor: '#008A0F',
            valueTextColor: '#715FF5'
        },
        tokenOption: {
            tokenOptionBackgroundColor: '#D9D8E7',
            tokenOptionTextColor: '#080808',
            tokenOption1Color: '#715FF5',
            tokenOption2Color: '#3DCBAD',
        },
        tab: {
            background: '#fff',
            borderActive: '#715FF5',
            borderInactive: '#F5F5F5',
            textActive: '#715FF5',
            textInactive: '#767676'
        },
        toggleButton: {
          default: '#6EEBD0',
        },
        table: {
          header: {
            background: '#FFFFFF',
            text: '#715FF5'
          },
          body: {
            text: '#545454'
          }
        }
    },
    shadow: {
        small: '0 0 0 1px #EAEAEA',
        medium: '0 0 0 1px #EAEAEA',
        large: '0 0 0 1px #EAEAEA',
        sticky: '0 0 0 1px #EAEAEA',
        hover: '0 0 0 1px #000',
        custom: '#EAEAEA 0px 5px 10px'
    },
    background: {
      default: '#F4FBFE',
      searchInput: '#FFFFFF',
      coinCard: '#FFFFFF',
      menu: '#715FF5',
      gasFeeInput: '#E3DFFD',
      palePink: '#E7C1C1',
      lightGray: '#D9D9D9',
      teaGreen: '#CCE7C1',
      sliderThumb: '#FF00FF',
      inactiveLavander: '#C6BFFB',
      icon: '#E5F5FC'
    },
    border: {
      darkLilac: '#8D7FF7',
      greenMantis: '#73E751',
      redValencia: '#E75151',
      veryLightPurple: '#AA9FF9',
      redCinnabar: '#E83C3C',
      greenMalachite: '#64E83C',
      green: '#1DC90A',
      red: '#C90A0A',
      lightBlue: '#1FE9D0',
      table: '#E3DFFD',
      slider: '#715FF5',
      default: '#EAEBEC',
      dialog: '#EAEBEC'
    },
    defaultColor: '#ccc',
    primaryColor: '#0ab',
    secondaryColor: 'rgb(0,0,0)',
    errorColor: '#FF0000',
    errordarkColor: '#CC0000',
    successColor: '#3291FF',
    successdarkColor: '#0366D6',
    warningColor: '#F5A623',
    warningdarkColor: '#F7B955',
    borderColor: 'rgb(234, 234, 234)',

    backgroundColor: '#fff',
    subbackgroundColor: '#fafafa',
    subbackgroundInverseColor: '#fff',

    texttitleColor: '#111111',
    textColor: '#444444',
    subtextColor: '#888888',
    primarybtntextColor: '#5B4BC9',
    btntextColor: '#FFFFFF',
    btntextHoverColor: 'rgb(0, 0, 0)',

    loadingColor: ' #1e1e1e',
    loadinglabelColor: '#666',
    btndisabledbackgroundColor: 'rgb(250, 250, 250)',
    btnbackgroundColor: '#7AEDD4',
    btnsmallbackgroundColor: '#715FF5',
    borderHoverColor: 'rgb(0, 0, 0)',
}

export const darkTheme: theme = {
    layout: {
        breakpoints: [430, 770, 768, 1024, 1200],
        container: [640, 720, 960, 1400],
        columns: 12,
        gutter: '15px'
    },
    typography: {
        primaryFont:
            '"Epilogue", "MyriadPro", sans-serif;',
        secondaryFont:
            '"MyriadPro", "Epilogue", sans-serif;',
        buttonFont:
            '"Epilogue", "MyriadPro", sans-serif;',
        inputFont:
            '"Epilogue", "MyriadPro", sans-serif;',
        h1: '3rem',
        h2: '2.25rem',
        h3: '1.5rem',
        h4: '1.25rem',
        h5: '1rem',
        h6: '0.875rem',
        p: '1rem',
        small: '0.875rem'
    },
    color: {
        default: '#FFFFFF',
        accent1: '#111',
        accent2: '#333',
        accent3: '#444',
        accent4: '#666',
        accent5: '#888',
        accent6: '#999',
        accent7: '#EAEAEA',
        accent8: '#FAFAFA',
        foreground: '#FFF',
        grey: '#F9F9F9',
        borderhover: '#FFF',
        white: '#fff',
        black: '#000',
        darkGrey: '#545454',
        lavender: '#E3DFFD',
        modalText: '#FFFFFF',
        textInactive: '#FFFFFF',
        error: {
            lighter: '#F7D4D6',
            light: '#FF1A1A',
            default: '#E00',
            dark: '#C50000'
        },
        primary: {
            default: '#715FF5',
            dark: '#715FF5'
        },
        success: {
            lighter: '#D3E5FF',
            light: '#3291FF',
            default: '#0070F3',
            dark: '#0761D1'
        },
        warning: {
            lighter: '#FFEFCF',
            light: '#F7B955',
            default: '#F5A623',
            dark: '#AB570A'
        },
        keyPairText: {
            keyTextColor: '#FFFFFF',
            valueIsPorcentageTextColor: '#008A0F',
            valueTextColor: '#715FF5'
        },
        tokenOption: {
            tokenOptionBackgroundColor: '#241E52',
            tokenOptionTextColor: '#FFFFFF',
            tokenOption1Color: '#715FF5',
            tokenOption2Color: '#3DCBAD'
        },
        tab: {
            background: '#3A308B',
            borderActive: '#FFFFFF',
            borderInactive: '#241E52',
            textActive: '#FFFFFF',
            textInactive: '#A99EFB'
        },
        toggleButton: {
          default: '#6EEBD0',
        },
        table: {
          header: {
            background: '#3A308B',
            text: '#FFFFFF'
          },
          body: {
            text: '#FFFFFF'
          }
        }
    },
    shadow: {
        small: '0 0 0 1px #333',
        medium: '0 0 0 1px #333',
        large: '0 0 0 1px #333',
        sticky: '0 0 0 1px #333',
        hover: '0 0 0 1px #FFF',
        custom: '#111 0px 5px 10px'
    },
    background: {
      default: '#241E52',
      searchInput: '#241E52',
      coinCard: '#3A308B',
      menu: '#3A308B',
      gasFeeInput: '#241E52',
      palePink: '#E7C1C1',
      lightGray: '#D9D9D9',
      teaGreen: '#CCE7C1',
      sliderThumb: '#FF00FF',
      inactiveLavander: '#C6BFFB',
      icon: '#3A308B'
    },
    border: {
      darkLilac: '#8D7FF7',
      greenMantis: '#73E751',
      redValencia: '#E75151',
      veryLightPurple: '#AA9FF9',
      redCinnabar: '#E83C3C',
      greenMalachite: '#64E83C',
      green: '#1DC90A',
      red: '#C90A0A',
      lightBlue: '#1FE9D0',
      table: '#241E52',
      slider: '#241E52',
      default: '#241E52',
      dialog: '#EAEBEC'
    },
    defaultColor: '#fafafa',
    primaryColor: '#0ab',
    secondaryColor: '#666666',
    errorColor: '#FF0000',
    errordarkColor: '#CC0000',
    successColor: '#3291FF',
    successdarkColor: '#0366D6',
    warningColor: '#F5A623',
    warningdarkColor: '#F7B955',
    borderColor: 'rgb(136, 136, 136)',
    backgroundColor: 'rgb(0, 0, 0)',
    subbackgroundColor: '#111',
    subbackgroundInverseColor: '#111',
    texttitleColor: '#ffff',
    textColor: '#f4f4f4',
    subtextColor: '#888888',
    primarybtntextColor: '#5B4BC9',
    btntextColor: '#FFFFFF',
    btntextHoverColor: 'rgb(255, 255, 255)',
    btndisabledbackgroundColor: '#272727',
    btnbackgroundColor: '#7AEDD4',
    btnsmallbackgroundColor: '#715FF5',
    loadingColor: ' #fff',
    loadinglabelColor: '#f1f1ff1',
    borderHoverColor: 'rgb(255, 255, 255)'
}
