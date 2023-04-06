import React, { useState } from 'react'
import { Wrapper } from './styles'
import { Dialog } from '../Dialog'
import { Input } from '../../atoms'
import { Status, Type } from '../../atoms/Input/types'

export const CreatePoolDialog = () => {
  const [see, setSee] = useState('')

  const inputHandler = (value: string) => {
    console.log('CHECK input value', value);
  }

  const handlerInput = (value: string) => {
    console.log(value)
    setSee(value)
  }

  return (
    <Dialog>
      <Wrapper>
        <Input
          placeholder='Node URL'
          helperText='Something is wrong!'
          type={Type.Plain}
          status={Status.Default}
          label='Label test'
          onChange={handlerInput}
          hasBackground={false}
          />
      </Wrapper>
    </Dialog>
  )
}