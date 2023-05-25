export interface theme {
    layout: {
        breakpoints: number[];
        container: number[];
        columns: number;
        gutter: string;
    };
    typography: {
        primaryFont: string;
        secondaryFont: string;
        buttonFont: string;
        inputFont: string;
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        p: string;
        small: string;
    };
    color: {
        default: string;
        downRightArrow: string;
        accent1: string;
        accent2: string;
        accent3: string;
        accent4: string;
        accent5: string;
        accent6: string;
        accent7: string;
        accent8: string;
        foreground: string;
        grey: string;
        borderhover: string;
        white: string;
        black: string;
        darkGrey: string;
        lavender: string;
        modalText: string;
        textInactive: string;
        notification: {
            title: string;
            message: string;
            anchor: string;
        };
        error: {
            lighter: string;
            light: string;
            default: string;
            dark: string;
            disconnect: string;
        };
        primary: {
            default: string;
            dark: string;
            text: string;
        };
        success: {
            lighter: string;
            light: string;
            default: string;
            dark: string;
        };
        warning: {
            lighter: string;
            light: string;
            default: string;
            dark: string;
        };
        keyPairText: {
            keyTextColor: string;
            valueIsPorcentageTextColor: string;
            valueTextColor: string;
        };
        tokenOption: {
            tokenOptionBackgroundColor: string;
            tokenOptionTextColor: string;
            tokenOption1Color: string;
            tokenOption2Color: string;
        };
        tab: {
            background: string;
            borderActive: string;
            borderInactive: string;
            textActive: string;
            textInactive: string;
            hover: string;
        };
        toggleButton: {
            active: string;
            default: string;
            invertedActive: string;
        };
        table: {
            header: {
                background: string;
                text: string;
            };
            body: {
                text: string;
            };
        };
        wallet: {
            background: string;
        };
        chart: {
            textColor: string;
            active: string;
            inactive: string;
            background: string;
            secondary: string;
        };
    };
    shadow: {
        small: string;
        medium: string;
        large: string;
        sticky: string;
        hover: string;
        custom: string;
    };
    background: {
        default: string;
        searchInput: string;
        coinCard: string;
        menu: string;
        gasFeeInput: string;
        palePink: string;
        lightGray: string;
        teaGreen: string;
        sliderThumb: string;
        inactiveLavander: string;
        icon: string;
        wallet: {
            copyOption: string;
            connectedOptions: string;
            white: string;
            onHover: string;
            onHoverDisconnect: string;
        };
        toggle: {
            inverted: string;
        };
        notification: {
            default: string;
        };
    };
    border: {
        darkLilac: string;
        greenMantis: string;
        redValencia: string;
        veryLightPurple: string;
        redCinnabar: string;
        greenMalachite: string;
        green: string;
        red: string;
        lightBlue: string;
        table: string;
        slider: string;
        default: string;
        dialog: string;
        wallet: string;
        notification: {
            error: string;
            success: string;
            info: string;
        };
    };
    defaultColor: string;
    primaryColor: string;
    secondaryColor: string;
    errorColor: string;
    errordarkColor: string;
    successColor: string;
    successdarkColor: string;
    warningColor: string;
    warningdarkColor: string;
    borderColor: string;
    backgroundColor: string;
    subbackgroundColor: string;
    subbackgroundInverseColor: string;
    texttitleColor: string;
    textColor: string;
    subtextColor: string;
    primarybtntextColor: string;
    btntextColor: string;
    btntextHoverColor: string;
    loadingColor: string;
    loadinglabelColor: string;
    btndisabledbackgroundColor: string;
    btnbackgroundColor: string;
    btnsmallbackgroundColor: string;
    borderHoverColor: string;
}
export declare const defaultTheme: theme;
export declare const darkTheme: theme;
