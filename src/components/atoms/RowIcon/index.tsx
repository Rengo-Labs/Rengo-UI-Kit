import React from "react"
import { 
  Container,
  IconContainer,
  TokenFullName,
  TokenName,
  Image,
  TokenContainer,
  TokenNamesContainer } from "./styles"
import { RowIconProps } from "./types"

export const RowIcon = ({ tokenName, tokenFullName, iconPath, iconSize }: RowIconProps) => {
  return (
    <Container>
      <TokenContainer>
        <IconContainer>
          {iconPath && (
            <Image src={iconPath} alt='token' iconSize={iconSize} />
          )}
       
        </IconContainer>

        <TokenNamesContainer>
          <TokenName>{tokenName}</TokenName>
          <TokenFullName>{tokenFullName}</TokenFullName>
        </TokenNamesContainer>
        
      </TokenContainer>
    </Container>
  )
}