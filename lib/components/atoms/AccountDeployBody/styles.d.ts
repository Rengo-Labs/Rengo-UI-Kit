/// <reference types="react" />
import { ImageProps } from '../../molecules/Menu/types';
export interface Props {
    hidden?: boolean;
    actionsDialogActive?: boolean;
}
export declare const TR: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, never>> & string;
export declare const TD: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, {
    isFirstItem?: boolean | undefined;
}>> & string;
export declare const TDInnerContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const Text: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>> & string;
export declare const TextLink: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}, never>> & string;
export declare const TDText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}, never>> & string;
export declare const IconWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const CheckIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react-feather").IconProps, never>> & string & Omit<import("react-feather").Icon, keyof import("react").Component<any, {}, any>>;
export declare const AlertIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react-feather").IconProps, never>> & string & Omit<import("react-feather").Icon, keyof import("react").Component<any, {}, any>>;
export declare const Icon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, Omit<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> & {
    ref?: ((instance: HTMLImageElement | null) => void) | import("react").RefObject<HTMLImageElement> | null | undefined;
}>, ImageProps>, ImageProps>> & string;
