import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { NotificationMessage } from '../../../src/components'

export default {
    title: 'Components/Molecules/NotificationMessage',
    component: NotificationMessage
} as ComponentMeta<typeof NotificationMessage>

// Create a master template for mapping args to render the NotificationMessage component
const Template: ComponentStory<typeof NotificationMessage> = (args) => (
    <NotificationMessage {...args} />
)

export const Default = Template.bind({})
Default.args = {
    isOpen: true,
    onClose: () => console.log('NotificationMessage'),
    title: 'Liquidity correctly removed',
    subtitle: "Checking the progress of your <a href='/deploy' target='_blank'>deploy</a>.",
    type: 'success'
}
export const Info = Template.bind({})
Info.args = {
    isOpen: true,
    isOnlyNotification: true,
    onClose: () => console.log('NotificationMessage'),
    title: 'Liquidity correctly removed',
    subtitle: "Checking the progress of your <a href='/deploy' target='_blank'>deploy</a>.",
    type: 'info'
}
export const Error = Template.bind({})
Error.args = {
    isOpen: true,
    isOnlyNotification: true,
    onClose: () => console.log('NotificationMessage'),
    title: 'Liquidity correctly removed',
    subtitle: "Checking the progress of your <a href='/deploy' target='_blank'>deploy</a>.",
    type: 'error'
}

let visible = true
const setVisibility = () => {
    console.log('setVisibility')
    visible = !visible
}
export const WithAutoClose = Template.bind({})
WithAutoClose.args = {
    isOpen: visible,
    isOnlyNotification: visible,
    onClose: setVisibility,
    title: 'Liquidity correctly removed',
    subtitle: "Checking the progress of your <a href='/deploy' target='_blank'>deploy</a>.",
    type: 'success',
    autoCloseDelay: 7000
}
