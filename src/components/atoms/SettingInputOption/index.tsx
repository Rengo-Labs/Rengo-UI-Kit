import React, {ChangeEvent} from "react";
import {WrapperStyled, InputWrapper, Text, InputOption} from "./styles";

interface SettingInputOptionProps {
    value: string
    placeholder?: string
    handleValue: (value: string) => void
}

export const SettingInputOption = ({ value, placeholder = "_ _ _", handleValue}: SettingInputOptionProps) => {
    return (
        <WrapperStyled>
            <InputWrapper>
                <InputOption
                    value={value}
                    placeholder={placeholder}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleValue(e.target.value)
                    }
                />
                <Text>%</Text>
            </InputWrapper>
        </WrapperStyled>

    )
}
