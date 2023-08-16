import React from 'react'
import {Button, Input, Row, SettingOption, Dialog, SettingOptionButton, SettingInputOption} from '../../atoms'
import {CloseIcon, Text, Wrapper} from './styles'
import {Status, Type} from '../../atoms/Input/types'
export interface SettingsProps {
    slippageToleranceValue: string
    customNodeUrlValue: string
    handleSave: (slippage: string, node: string ) => void
    handleClose: () => void
    isOpen: boolean
}
export const Settings = ({
                             slippageToleranceValue = "0.1",
                             customNodeUrlValue = '',
                             handleSave,
                             handleClose,
                             isOpen
                         }: SettingsProps) => {
    const [slippageTolerance, setSlippageTolerance] = React.useState<string>(slippageToleranceValue)
    const [customNodeUrl, setCustomNodeUrl] = React.useState<string>(customNodeUrlValue)
    const [isCustomInput, setIsCustomInput] = React.useState<boolean>(false)
    const valuesToSettingOption = ["0.1", "0.5", "1.0"]

    const handleSlippageTolerance = (value: string) => {
        setSlippageTolerance(value)
        setIsCustomInput(false)
    }

    const handleCustomSlippageTolerance = (value: string) => {
        setSlippageTolerance(value)
    }

    const handlerInput = (value: string) => {
        setCustomNodeUrl(value)
    }

    const handleSaveButton = () => {
        handleSave(slippageTolerance, customNodeUrl)
    }

    const handleCustomInput = () => {
        setIsCustomInput(!isCustomInput)
    }

    return (
        <Dialog
          onClose={handleClose}
          isOpen={isOpen}>
            <Wrapper props={{xs: 12}}>
                <Row className='align-items-center justify-content-between'>
                    <Text>Slippage Tolerance</Text>
                    <CloseIcon size={16} onClick={handleClose}/>
                </Row>
                <Row className='align-items-center justify-content-between py-1'>
                    {
                        valuesToSettingOption.map((value, index) => {
                            return (
                                <SettingOption key={index} value={value} handleValue={handleSlippageTolerance} isSelect={!isCustomInput && slippageTolerance === value}/>
                            )
                        })
                    }
                    <SettingOptionButton value='Custom' handleValue={handleCustomInput} isSelect={isCustomInput || !valuesToSettingOption.includes(slippageTolerance)} />
                </Row>
                <Row>
                    {isCustomInput &&
                        <SettingInputOption value={slippageTolerance} handleValue={handleCustomSlippageTolerance}/>
                    }
                </Row>
                <Row>
                    <Text>You have a custom node URL?</Text>
                </Row>
                <Row className='m-1'>
                    <Input
                        placeholder='Node URL'
                        helperText='Something is wrong!'
                        type={Type.Plain}
                        value={customNodeUrl}
                        status={Status.Default}
                        label='Label test'
                        onChange={handlerInput}
                        hasBackground
                    />
                </Row>
                <Row>
                    <Button type='large' props={{onClick:handleSaveButton}}>
                        Save
                    </Button>
                </Row>
            </Wrapper>
        </Dialog>
    )
}
