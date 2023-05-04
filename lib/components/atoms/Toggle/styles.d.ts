import { ReactElement } from "react";
import { Variant } from "./types";
interface Props {
    isActive?: boolean;
    Icon?: ReactElement;
    variant?: Variant;
    invertStyleWhenActive?: boolean;
}
export declare const ToggleWrapper: import("styled-components").StyledComponent<"label", any, Props, never>;
export declare const ToggleInput: import("styled-components").StyledComponent<"input", any, {
    type: "checkbox";
}, "type">;
export declare const ToggleHandle: import("styled-components").StyledComponent<"span", any, Props, never>;
export declare const ToggleButton: import("styled-components").StyledComponent<"button", any, Props, never>;
export declare const LabelText: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const SwitcherWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
