import { ToggleProps } from './types';
/**
  A toggle switch component with customizable variant and label.
  @component
  @param {Object} props - The component props.
  @param {boolean} props.isActive - The current active state of the toggle switch.
  @param {Function} props.toggle - The function to be called when the toggle switch is clicked.
  @param {Variant} [props.variant='default'] - The variant of the toggle switch. The available options are 'default', 'theme-switcher' and 'inverted-colors, if you don't pass any it will be default.
  @param {string} [props.labelText=''] - The label text to be displayed next to the toggle switch.
  @return {JSX.Element}
*/
export declare const Toggle: ({ isActive, toggle, variant, labelText }: ToggleProps) => JSX.Element;
