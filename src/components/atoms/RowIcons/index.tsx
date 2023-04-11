import React from "react"
import { Container, IconContainer, TokenFullName, TokenName, Image, TokenContainer, TokenNamesContainer } from "./styles"
import { IconSize } from "./types"

interface Props {
  tokenName: string
  tokenFullName: string
  iconPath?: string
  iconSize: IconSize
}

export const RowIcons = ({ tokenName, tokenFullName, iconPath, iconSize }: Props) => {
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