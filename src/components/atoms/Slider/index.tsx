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

  const percentages = [
    { value: 0, name: '0%' },
    { value: 25, name: '25%' },
    { value: 50, name: '50%' },
    { value: 75, name: '75%' },
    { value: 100, name: '100%' },
  ]
  
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
        {percentages.map(item => (
          <PercentageLabel
            key={`percentage-item-${item.value}`}
            isSelected={value === item.value}
            onClick={() => handleInputChange(item.value)}>
              {item.name}
          </PercentageLabel>
        ))}
      </PercentageContainer>
  </Wrapper>
  )
}
