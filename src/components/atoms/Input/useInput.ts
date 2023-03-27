import { ChangeEvent, ReactNode } from "react"
import { IconSize, Status, Type } from "./types";
interface userInputProps {
  status?: Status;
  type?: Type;
  placeholder?: string
  label?: string
  helperText?: string
  rightAdornment?: ReactNode | string
  Icon?: ReactNode
  iconSize?: IconSize
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validator?: (e: ChangeEvent<HTMLInputElement>) => void;
}

type FunctionType = (...args: any[]) => any;

const callAll = (...fns: any[]) => {
  return (...args: any): void => {
    fns.forEach(fn => {
      if (fn) {
        fn && fn(...args);
      }
    });
  };
};

export const useInput = () => {
  
  const getInputProps = ({ onChange, validator,...props}: userInputProps) => {
    return {
      onChange: callAll(onChange, validator),
      ...props
    }
  }

  return {
    getInputProps
  }
}