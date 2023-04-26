interface SliderProps {
    callback: (selectedPercentage: number) => void;
}
/**
 * The Slider component allows the user to select a percentage value by dragging a slider
 *
 * @param {SliderProps} props - The props passed to the Slider component
 * @param {function} props.callback - {(selectedPercentage: number) => void} - Callback function called when the percentage value changes
 * @returns {JSX.Element} - A React element representing the Slider component
*/
export declare const Slider: ({ callback }: SliderProps) => JSX.Element;
export {};
