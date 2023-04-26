import { ReactElement, ReactNode } from 'react';
import { Distribution, IconSize } from './types';
interface Props {
    distribution?: Distribution;
    tokenNames?: Array<string>;
    tokenNameSymbol?: ReactNode;
    children?: any;
    leftAdornment?: ReactNode | ReactElement;
    iconSize?: IconSize;
    isLast?: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, Props, never>;
export declare const TokenInnerWrapper: import("styled-components").StyledComponent<"div", any, Props, never>;
export declare const Image: import("styled-components").StyledComponent<"img", any, Props, never>;
export declare const LeftAdornmentWrapper: import("styled-components").StyledComponent<"div", any, Props, never>;
export declare const TokenDetailsWrapper: import("styled-components").StyledComponent<"div", any, Props, never>;
export declare const TokenNamesWrapper: import("styled-components").StyledComponent<"div", any, Props, never>;
export declare const TokenName: import("styled-components").StyledComponent<"p", any, Props, never>;
export declare const TokenFullName: import("styled-components").StyledComponent<"p", any, {}, never>;
export declare const TokenNameSymbol: import("styled-components").StyledComponent<"p", any, {}, never>;
export declare const TokenNameSymbolWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const AmountWrapper: import("styled-components").StyledComponent<"div", any, Props, never>;
export {};
