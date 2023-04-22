import React from "react"
import {
    Container,
    IconContainer,
    TokenFullName,
    TokenName,
    Image,
    TokenContainer,
    TokenNamesContainer
} from "./styles"
import {RowIconProps} from "./types"

/**
 A reusable component to display a token with its icon, name, and full name in a row format.
 @component
 @param {Object} props - The component props.
 @param {string} props.tokenName - The token name to be displayed.
 @param {string} props.tokenFullName - The full name of the token to be displayed.
 @param {string} props.Icon - The path to the icon image or the svg of the token to be displayed.
 @param {number} props.iconSize - The size of the token icon to be displayed.
 @param {function} [props.onSelectToken] - onSelectToken select token.
 @return {JSX.Element} - The JSX markup of the component.
 */

export const RowIcon = ({tokenName, tokenFullName, Icon, iconSize, onSelectToken}: RowIconProps) => {
    return (
        <Container>
            <TokenContainer onClick={onSelectToken}>
                <IconContainer>
                    <Image src={Icon as string} alt='token' iconSize={iconSize}/>
                </IconContainer>
                <TokenNamesContainer>
                    <TokenName>{tokenName}</TokenName>
                    <TokenFullName>{tokenFullName}</TokenFullName>
                </TokenNamesContainer>
            </TokenContainer>
        </Container>
    )
}
