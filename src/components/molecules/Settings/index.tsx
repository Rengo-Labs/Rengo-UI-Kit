import React from 'react'
import { Button, Input, Row, SettingOption } from '../../atoms'
import { CloseIcon, Text, Wrapper } from './styles'
import { Status, Type } from '../../atoms/Input/types'

export const Settings = () => {
  const [slippageTolerance, setSlippageTolerance] = React.useState<number>(0.1)
  const [customNodeUrl, setCustomNodeUrl] = React.useState<string>('')

  const handleSlippageTolerance = (value: number) => {
    setSlippageTolerance(value)
  }

  const handlerInput = (value: string) => {
    console.log(value)
    setCustomNodeUrl(value)
  }

  return (
    <Wrapper props={{ xs: 12 }} className='py-1 px-2'>
      <Row className='align-items-center justify-content-between'>
        <Text>Slippage Tolerance</Text>
        <CloseIcon size={16} />
      </Row>
      <Row className='align-items-center justify-content-between py-1'>
        <SettingOption value={0.1} handleValue={handleSlippageTolerance} />
        <SettingOption value={0.5} handleValue={handleSlippageTolerance} />
        <SettingOption value={1.0} handleValue={handleSlippageTolerance} />
        <SettingOption
          value={slippageTolerance}
          handleValue={handleSlippageTolerance}
          isInput
        />
      </Row>
      <Row>
        <Text>You have a custome node URL?</Text>
      </Row>
      <Row className='p-1'>
        <Input
          placeholder='Node URL'
          helperText='Something is wrong!'
          type={Type.Plain}
          status={Status.Default}
          label='Label test'
          onChange={handlerInput}
          hasBackground
        />
      </Row>
      <Row>
        <Button type='large' props={{ onClick: () => console.log('clicked') }}>
          Swap
        </Button>
      </Row>
    </Wrapper>
  )
}
