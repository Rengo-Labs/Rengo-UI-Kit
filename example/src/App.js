import React, {useState} from 'react'
import {UiProvider, theme} from "rengo-ui-kit";
import {Container, Row, Column, Toggle, Button, ButtonIcon, Loader, Input, Header, Tabs, KeyPairText, TokenOption} from "rengo-ui-kit"
import ethLogo from './assets/eth-logo.svg'
import downwardsArrowIcon from './assets/downwards-arrow-icon.svg'
import {AlertTriangle} from 'react-feather'


const App = () => {
    const [selectedTheme, setSelectedTheme] = useState('default')
    const [tabs, setTabs] = useState([
        {
            id: 1,
            text: 'Price',
            isActive: true
        },
        {
            id: 2,
            text: 'More Info',
            isActive: false
        }
    ])
    const handleToggleTheme = () => {
        const theme = selectedTheme === 'default' ? 'dark' : 'default'
        setSelectedTheme(theme)
    };

    const handlerInput = (value) => {
      console.log('handlerInput', value)
    }

    const inputValidator = (value) => {
      console.log('validating', value);
    }
    
    const handlerTab = (id) => {
        setTabs(tabs.map(tab => {
            if (tab.id === id) {
                tab.isActive = true
            } else {
                tab.isActive = false
            }
            return tab
        }))
    }

    return (
        <UiProvider theme={theme[selectedTheme]}>
            <>
                <Container>
                    <Row>
                        <Column props={{xs: 12}}>
                            <div style={{background: 'darkblue'}}>
                                <Toggle isActive={selectedTheme === 'dark'} toggle={handleToggleTheme}/>
                            </div>
                        </Column>
                    </Row>
                </Container>
                <Container props={{fluid: true}}>
                    <Row>
                        <Column props={{xs: 12, sm: 3, md: 4, lg: 12}}>
                            <h1>Test 1</h1>
                        </Column>
                        <Column props={{xs: 12, sm: 3, md: 4, lg: 12}}>
                            <h1>Test 2</h1>
                        </Column>
                        <Column props={{xs: 12, sm: 3, md: 4, lg: 12}}>
                            <h1>Test 3</h1>
                        </Column>
                    </Row>
                </Container>
                <Container>
                    <Row props={{center: 'xs'}}>
                        <Column props={{xs: 4}}>
                            <h1>Test 4</h1>
                        </Column>
                        <Column props={{xs: 4}}>
                            <Button type="small" props={{onClick: () => console.log('clicked')}}> max </Button>
                        </Column>
                        <Column props={{xs: 4}}>
                            <Button type="large" props={{onClick: () => console.log('clicked')}}> Swap </Button>
                        </Column>
                    </Row>
                </Container>
                <Container >
                  <ButtonIcon
                    startIcon={ethLogo}
                    name={'ETH'}
                    endIcon={downwardsArrowIcon}
                    actionCallBack={() => console.log('ButtonIcon clicked')} />
                </ Container>
                <Container>
                  <Input
                    placeholder="PlaceHolder_input"
                    helperText="Something is wrong!"
                    type="icon-label-helper-text"
                    status=''
                    label='Label test'
                    // Icon={<AlertTriangle color="red" size={24} />}
                    Icon={ <ButtonIcon
                      startIcon={ethLogo}
                      name={'ETH'}
                      endIcon={downwardsArrowIcon}
                      actionCallBack={() => console.log('ButtonIcon clicked')} />}
                    iconSize="large"
                    onChange={handlerInput}
                    validator={inputValidator} />
                </Container>
                <Container>
                    <Row>
                        <Column props={{xs: 12}}>
                            <Loader/>
                        </Column>
                    </Row>
                    <Row>
                        <Column props={{xs: 12}}>
                            <Header text='From' balance='2020.0000'/>
                        </Column>
                        <Column props={{xs: 12}}>
                            <Tabs tabs={tabs} onClick={handlerTab}/>
                        </Column>
                        <Column props={{xs: 12}}>
                            <TokenOption tokenImg={ethLogo} token='ETH' option1/>
                            <TokenOption tokenImg={ethLogo} token='CSPR' />
                        </Column>
                        <Column props={{xs: 12}}>
                            <KeyPairText keyText='Price' valueText='1.4589'/>
                            <KeyPairText keyText='24H%' valueText='85.10' isPorcentage />
                        </Column>
                    </Row>
                </Container>
            </>
        </UiProvider>
    )
}
export default App
