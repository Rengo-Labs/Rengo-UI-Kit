import React, { useState } from 'react'
import { PercentageLabel, Wrapper, Input, PercentageContainer } from './style';

interface SliderProps {
  callback: (selectedPercentage: number) => void
}

/**
 * The Slider component allows the user to select a percentage value by dragging a slider
 *
 * @param {SliderProps} props - The props passed to the Slider component
 * @param {function} props.callback - {(selectedPercentage: number) => void} - Callback function called when the percentage value changes
 * @returns {JSX.Element} - A React element representing the Slider component
*/
export const Slider = ({ callback }: SliderProps) => {
  const [value, setValue] = useState<number>(0);

  const handleInputChange = (value: number) => {
    setValue(value);
    callback(value)
  };
  
  return (
    <Wrapper>
      <Input 
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(parseInt(event.target.value))}
        id="slider"
      />
      <PercentageContainer>
        <PercentageLabel
          isSelected={value === 0}
          onClick={() => handleInputChange(0)}>
            0%
        </PercentageLabel>
        <PercentageLabel
          isSelected={value === 25}
          onClick={() => handleInputChange(25)}>
          25%
        </PercentageLabel>
        <PercentageLabel
          isSelected={value === 50}
          onClick={() => handleInputChange(50)}>
          50%
        </PercentageLabel>
        <PercentageLabel
          isSelected={value === 75}
          onClick={() => handleInputChange(75)}>
          75%
        </PercentageLabel>
        <PercentageLabel
          isSelected={value === 100}
          onClick={() => handleInputChange(100)}>
          100%
        </PercentageLabel>
      </PercentageContainer>
  </Wrapper>
  )
}
