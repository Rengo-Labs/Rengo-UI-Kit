import React, {ChangeEvent} from "react";
import {WrapperStyled, InputWrapper, Text, InputOption} from "./styles";

interface SettingInputOptionProps {
    value: number
    placeholder?: string
    handleValue: (value: number) => void
}

export const SettingInputOption = ({ value, placeholder = "_ _ _", handleValue}: SettingInputOptionProps) => {
    return (
        <WrapperStyled>
            <InputWrapper>
                <InputOption
                    value={value}
                    placeholder={placeholder}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleValue(Number(e.target.value))
                    }
                />
                <Text>%</Text>
            </InputWrapper>
        </WrapperStyled>

    )
}
