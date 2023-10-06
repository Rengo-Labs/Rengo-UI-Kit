import { IconSize, Status, Type } from "./types";
interface Props {
    status?: Status;
    type?: Type;
    iconSize?: IconSize;
    hasBackground?: boolean;
    iconWrapperBackground?: string;
    textAlign?: string;
}
export declare const InputWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const InputInnerWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const LabelStyled: import("styled-components").StyledComponent<"label", any, Props, never>;
export declare const HelperText: import("styled-components").StyledComponent<"span", any, Props, never>;
export declare const InputStyled: import("styled-components").StyledComponent<"input", any, Props, never>;
export declare const IconWrapper: import("styled-components").StyledComponent<"div", any, Props, never>;
export declare const RightAdornmentWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
