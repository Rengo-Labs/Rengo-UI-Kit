import React, { useState } from 'react'
import { UiProvider, theme } from 'rengo-ui-kit'
import ethToken from './assets/eth-token.svg'
import tetherToken from './assets/tether-token.svg'
import ethCsprPair from './assets/eth-cspr-pair.svg'
import {
  Container,
  Row,
  Column,
  Toggle,
  Button,
  ButtonIcon,
  Loader,
  Input,
  Header,
  Tabs,
  TransactionDetails,
  TransactionDetailsTextOnly,
  KeyPairText,
  TokenOption,
  KeyValueText,
  KeyValueInput,
  InputType,
  SettingOption,
  HorizontalCard,
  Icons,
  SwapTabs,
} from 'rengo-ui-kit'
import ethLogo from './assets/eth-logo.svg'
import downwardsArrowIcon from './assets/downwards-arrow-icon.svg'
import { AlertTriangle, Star } from 'react-feather'

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState('default')
  const [SlippageTolerance, setSlippageTolerance] = useState(0.05)
  const [settingOption, setSettingOption] = useState('')
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

  const inputValidator = (value) => {
    console.log('validating', value)
  }

  const handleToggleTheme = () => {
    const theme = selectedTheme === 'default' ? 'dark' : 'default'
    setSelectedTheme(theme)
  }

  const handlerInput = (value) => {
    console.log('handlerInput', value)
  }

  const handlerTab = (id) => {
    setTabs(
      tabs.map((tab) => {
        if (tab.id === id) {
          tab.isActive = true
        } else {
          tab.isActive = false
        }
        return tab
      })
    )
  }

  const handleSlippageTolerance = (value) => {
    console.log('handleSlippageTolerance', value)
    setSlippageTolerance(value)
  }

  const handleSettingOption = (value) => {
    console.log('handleSettingOption', value)
    setSettingOption(value)
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
            startIcon={ethToken}
            name={'ETH'}
            endIcon={downwardsArrowIcon}
            actionCallBack={() => console.log('ButtonIcon clicked')}
          />
        </Container>
        <Container>
          <Input
            placeholder='PlaceHolder_input'
            helperText='Something is wrong!'
            type='icon-label-helper-text'
            status=''
            label='Label test'
            // Icon={<AlertTriangle color="red" size={24} />}
            Icon={
              <ButtonIcon
                startIcon={ethToken}
                name={'ETH'}
                endIcon={downwardsArrowIcon}
                actionCallBack={() => console.log('ButtonIcon clicked')}
              />
            }
            iconSize='large'
            onChange={handlerInput}
            validator={inputValidator}
          />
        </Container>
        <Container>
          <Row>
            <Column props={{ xs: 12 }}>
              <Loader />
            </Column>
          </Row>
          <Row>
            <Column props={{ xs: 4 }}>
              <Header text='From' balance='2020.0000' />
              <Tabs tabs={tabs} onClick={handlerTab} />
              <KeyValueText
                keyText='Swapping Through'
                valueText='CasperSwap Pool'
              />
            </Column>
            <Column props={{ xs: 4 }}>
              <Row>
                <Column props={{ xs: 4 }}>
                  <TokenOption tokenImg={ethLogo} token='ETH' option1 />
                </Column>
                <Column props={{ xs: 2 }} />
                <Column props={{ xs: 4 }}>
                  <TokenOption tokenImg={ethLogo} token='CSPR' />
                </Column>
              </Row>
            </Column>
            <Column props={{ xs: 4 }}>
              <Row>
                <Column props={{ xs: 4 }}>
                  <KeyPairText keyText='Price' pairText='1.4589' />
                </Column>
                <Column props={{ xs: 2 }} />
                <Column props={{ xs: 4 }}>
                  <KeyPairText keyText='24H%' pairText='85.10' isPorcentage />
                </Column>
              </Row>
            </Column>
          </Row>
          <Row>
            <Column props={{ xs: 12 }}>
              <SwapTabs tokenImg={ethLogo}/>
            </Column>
          </Row>
          <Row>
            <Column props={{ xs: 4 }}>
              <KeyValueInput
                keyText='Slippage Tolerance'
                value={SlippageTolerance}
                inputType={InputType.GASFEE}
                onChange={handleSlippageTolerance}
              />
            </Column>
            <Column props={{xs: 2}}>
            <SettingOption value='0.1' handleValue={handleSettingOption}/>
            </Column>
            <Column props={{xs: 2}}>
            <SettingOption value={settingOption} handleValue={handleSettingOption} isInput/>
            </Column>
          </Row>
        </Container>
        <Container>
          <div
            style={{
              margin: '30px 0 30px 0',
              minWidth: '350px',
              maxWidth: '450px',
              height: '66px',
              background: 'white'
            }}
          >
            <TransactionDetails
              // distribution='space-between'
              distribution='space-evenly'
              Icon={ethCsprPair}
              // Icon={tetherToken}
              iconSize={45}
              LeftAdornment={<Icons name="Star" color='#715FF5' size={24} />}
              // LeftAdornmentCallback={() => console.log('favorite clicked')}
              tokenNames={['Wrapper Ether', 'Wrapper Casper']}
              // tokenNames={['Wrapper Ether']}
              tokenNameSymbols={['WETH', 'CSPR']}
              // tokenNameSymbols={['WETH']}
              // tokenFullName='WETH'
              amount='0,3'
              // amount='1000000'
            />
          </div>
        </Container>
        <Container>
          <div
            style={{
              margin: '30px 0 30px 0',
              minWidth: '350px',
              maxWidth: '450px',
              height: '66px',
              background: 'white'
            }}
          >
            <TransactionDetailsTextOnly
              tokenInfo={[
                '1 Wrapper Ether = 391.361884674 Wrapper Casper',
                '1 Wrapper Casper = 0.002555180 Wrapper Ether'
              ]}
            />
          </div>
        </Container>
        <Container>
          <div style={{ width: '100%', padding: '20px 0 20px 0'}}>
            <HorizontalCard
                icon={ethCsprPair}
                hasFavorite={true}
                tokenPairs={['ETH', 'CSPR']}
                pairsLiquidity={[
                  { name: 'Pooled (WCSPR)', value: '1543.804256310 WCSPR' },
                  { name: 'Pooled (WETH)', value: '0.016286696 WETH' }
                ]}
                userPoolInfo={['5.00100931 LP', '0.19%']}
                trashHandler={() => console.log('horizontal card: delete')}
                swapHandler={() => console.log('horizontal card: swap')}
                viewHandler={() => console.log('horizontal card: view')}
                addLiquidityHandler={() => console.log('horizontal card: add liquidity')}
                favoriteHandler={() => console.log('horizontal card: favorite')}
            />
          </div>
        </Container>
      </>
    </UiProvider>
  )
}
export default App
