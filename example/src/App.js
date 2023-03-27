import React, { useState } from 'react'
import { UiProvider, theme } from 'rengo-ui-kit'
import {
  Container,
  Row,
  Column,
  Button,
  Toggle,
  ButtonIcon,
  Loader,
  KeyPairText,
  TokenOption
} from 'rengo-ui-kit'
import ethLogo from './assets/eth-logo.svg'
import downwardsArrowIcon from './assets/downwards-arrow-icon.svg'

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState('default')
  const handleToggleTheme = () => {
    const theme = selectedTheme === 'default' ? 'dark' : 'default'
    setSelectedTheme(theme)
  }

  return (
    <UiProvider theme={theme[selectedTheme]}>
      <>
        <Container>
          <Row>
            <Column props={{ xs: 12 }}>
              <div style={{ background: 'darkblue' }}>
                <Toggle
                  isActive={selectedTheme === 'dark'}
                  toggle={handleToggleTheme}
                />
              </div>
            </Column>
          </Row>
        </Container>
        <Container props={{ fluid: true }}>
          <Row>
            <Column props={{ xs: 12, sm: 3, md: 4, lg: 12 }}>
              <h1>Test 1</h1>
            </Column>
            <Column props={{ xs: 12, sm: 3, md: 4, lg: 12 }}>
              <h1>Test 2</h1>
            </Column>
            <Column props={{ xs: 12, sm: 3, md: 4, lg: 12 }}>
              <h1>Test 3</h1>
            </Column>
          </Row>
        </Container>
        <Container>
          <Row props={{ center: 'xs' }}>
            <Column props={{ xs: 4 }}>
              <h1>Test 4</h1>
            </Column>
            <Column props={{ xs: 4 }}>
              <Button
                type='small'
                props={{ onClick: () => console.log('clicked') }}
              >
                {' '}
                max{' '}
              </Button>
            </Column>
            <Column props={{ xs: 4 }}>
              <Button
                type='large'
                props={{ onClick: () => console.log('clicked') }}
              >
                {' '}
                Swap{' '}
              </Button>
            </Column>
          </Row>
        </Container>
        <Container>
          <ButtonIcon
            startIcon={ethLogo}
            name={'ETH'}
            endIcon={downwardsArrowIcon}
            actionCallBack={() => console.log('ButtonIcon clicked')}
          />
        </Container>
        <Container>
          <Row>
            <Column props={{ xs: 12 }}>
              <Loader />
            </Column>
          </Row>
          <Row>
            <Column props={{ xs: 8 }}>
              <Row>
                <Column props={{ xs: 2 }}>
                  <TokenOption tokenImg={ethLogo} token='ETH' option1 />
                </Column>
                <Column props={{ xs: 2 }}>
                  <TokenOption tokenImg={ethLogo} token='CSPR' />
                </Column>
                <Column props={{ xs: 2 }}>
              <KeyPairText keyText='Price' valueText='1.4589' />
            </Column>
            <Column props={{ xs: 2 }}>
              <KeyPairText keyText='24H%' valueText='1.4589' isPorcentage />
            </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </>
    </UiProvider>
  )
}
export default App
