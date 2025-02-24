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
    containerWidth?: string;
    optIconExists?: boolean;
}
export declare const Wrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props>> & string;
export declare const TokenInnerWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props>> & string;
export declare const Image: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, Props>> & string;
export declare const LeftAdornmentWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props>> & string;
export declare const TokenDetailsWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props>> & string;
export declare const TokenNamesWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props>> & string;
export declare const TokenName: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, Props>> & string;
export declare const TokenFullName: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>> & string;
export declare const TokenNameSymbol: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>> & string;
export declare const TokenNameSymbolWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const AmountWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props>> & string;
export declare const IconImage: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, Props>> & string;
export declare const TokenNamesInnerContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export {};
