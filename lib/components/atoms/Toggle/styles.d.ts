import { ReactElement } from "react";
import { Variant } from "./types";
interface Props {
    isActive?: boolean;
    Icon?: ReactElement;
    variant?: Variant;
    invertStyleWhenActive?: boolean;
}
export declare const ToggleWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, Props>> & string;
export declare const ToggleInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void) | import("react").RefObject<HTMLInputElement> | null | undefined;
}>, never>, never>> & string;
export declare const ToggleHandle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, Props>> & string;
export declare const ToggleButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, Props>> & string;
export declare const LabelText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
export declare const SwitcherWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export {};
