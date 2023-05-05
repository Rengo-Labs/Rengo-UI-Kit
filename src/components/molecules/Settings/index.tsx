import React from 'react'
import {Button, Input, Row, SettingOption, Dialog} from '../../atoms'
import {CloseIcon, Text, Wrapper} from './styles'
import {Status, Type} from '../../atoms/Input/types'
export interface SettingsProps {
    slippageToleranceValue: number
    customNodeUrlValue: string
    handleSave: (slippage: number, node: string ) => void
    handleClose: () => void
    isOpen: boolean
}
export const Settings = ({
                             slippageToleranceValue = 0.1,
                             customNodeUrlValue = '',
                             handleSave,
                             handleClose,
                             isOpen
                         }: SettingsProps) => {
    const [slippageTolerance, setSlippageTolerance] = React.useState<number>(slippageToleranceValue)
    const [customNodeUrl, setCustomNodeUrl] = React.useState<string>(customNodeUrlValue)

    const handleSlippageTolerance = (value: number) => {
        setSlippageTolerance(value)
    }

    const handlerInput = (value: string) => {
        setCustomNodeUrl(value)
    }

    const handleSaveButton = () => {
        handleSave(slippageTolerance, customNodeUrl)
    }

    return (
        <Dialog onClose={handleClose} isOpen={isOpen}>
            <Wrapper props={{xs: 12}}>
                <Row className='align-items-center justify-content-between'>
                    <Text>Slippage Tolerance</Text>
                    <CloseIcon size={16} onClick={handleClose}/>
                </Row>
                <Row className='align-items-center justify-content-between py-1'>
                    <SettingOption value={0.1} handleValue={handleSlippageTolerance}/>
                    <SettingOption value={0.5} handleValue={handleSlippageTolerance}/>
                    <SettingOption value={1.0} handleValue={handleSlippageTolerance}/>
                    <SettingOption
                        value={slippageTolerance}
                        handleValue={handleSlippageTolerance}
                        isInput
                    />
                </Row>
                <Row>
                    <Text>You have a custom node URL?</Text>
                </Row>
                <Row className='p-1'>
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
