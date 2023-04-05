import React, { useState } from 'react'
import { PercentageLabel, Wrapper, Input, PercentageContainer } from './style';

interface SliderProps {
  callback: (selectedPercentage: number) => void
}

export const Slider = ({ callback }: SliderProps) => {
  const [value, setValue] = useState(50);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPercentage = parseInt(event.target.value)
    setValue(selectedPercentage);
    callback(selectedPercentage)
  };
  
  return (
    <Wrapper>
      <Input 
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleInputChange}
        id="slider"
      />
      <PercentageContainer>
        <PercentageLabel>0%</PercentageLabel>
        <PercentageLabel>25%</PercentageLabel>
        <PercentageLabel>50%</PercentageLabel>
        <PercentageLabel>75%</PercentageLabel>
        <PercentageLabel>100%</PercentageLabel>
      </PercentageContainer>
  </Wrapper>
  )
}