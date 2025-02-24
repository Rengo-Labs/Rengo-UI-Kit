/// <reference types="react" />
type TTextStyle = {
    isTitle?: boolean;
};
export declare const WrapperStyle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const TextStyle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, TTextStyle>> & string;
export {};
