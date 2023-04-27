import React from "react";
import { WalletConnectedOptionsDialog } from "../../atoms";
import {Container} from "./styles";
import {Options} from "../../atoms/WalletConnectedOptionsDialog/types";

export interface WalletConnectedOptionsProps {
    closeCallback: () => void
    options: Options[]
    isOpen: boolean
}
export const WalletConnectedOptions = ({closeCallback, options, isOpen}: WalletConnectedOptionsProps) => {
    return (
        <Container>
            <WalletConnectedOptionsDialog closeCallback={closeCallback} options={options} isOpen={isOpen}/>
        </Container>
    )
}
