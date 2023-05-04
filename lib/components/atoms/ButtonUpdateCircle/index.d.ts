export interface IButtonUpdateCircle {
    getProgress: () => number;
    clearProgress?: () => void;
    strokeWidth: number;
    handlerAction: () => Promise<void>;
}
export declare const ButtonUpdateCircle: ({ getProgress, clearProgress, strokeWidth, handlerAction }: IButtonUpdateCircle) => JSX.Element;
