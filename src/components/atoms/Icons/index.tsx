import React from 'react'
import * as Icon from 'react-feather'
import {IconProps} from 'react-feather'
export interface IconsProps extends IconProps {
    name: string
    color?: string
    size?: number
}

export const iconNames = Object.keys(Icon)
export const Icons = ({name, color, size} : IconsProps) => {
   for (const key of iconNames) {
       if (key === name) {
           const IconComponent = Icon[key as keyof typeof Icon]
           return <IconComponent color={color} size={size} />
       }
   }

   return null
}
