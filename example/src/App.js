import React, { useState, useEffect } from 'react'
import { UiProvider, theme } from 'rengo-ui-kit'
import ethToken from './assets/icons/eth-token.svg'
import tetherToken from './assets/icons/tether-token.svg'
import ethCsprPair from './assets/icons/eth-cspr-pair.svg'
import walletIcon from './assets/icons/wallet-icon.svg'
import casperIcon from './assets/casperIcon.svg'
import swapIcon from './assets/swap-icon.svg'
import liquidityIcon from './assets/liquidity.svg'
import balanceIcon from './assets/wallet.svg'
import poolIcon from './assets/pool-icon.svg'
// import casperTextIcon from './assets/textLogo.svg'
import casperTextIcon from './assets/type_logo.svg'

import {
  Container,
  Row,
  Column,
  Toggle,
  Button,
  TextIconTouchable,
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
  Icons,
  SwapTabs,
  HorizontalCard,
  CoinCard,
  LiquidityDetails,
  Settings,
  Slider,
  BalanceTable,
  CreatePoolDialog,
  LiquidityItemDetail,
  RowIcon,
  WalletConnectionButton,
  RemoveLiquidityDialog,
  WalletConnectedOptionsDialog,
  Menu,
  LPContainer,
  WalletConnection,
  PoolTableItem,
  PoolTable,
  LPSearch,
  PoolItemDetails
} from 'rengo-ui-kit'
import ethLogo from './assets/icons/eth-logo.svg'
import downwardsArrowIcon from './assets/icons/downwards-arrow-icon.svg'
import { AlertTriangle, Star } from 'react-feather'
import {
  TOKEN_LIST_DATA_CREATE_POOL,
  POPULAR_TOKEN_LIST_DATA_CREATE_POOL,
  REMOVE_LIQUIDITY_DATA,
  BALANCE_TABLE_DATA,
  WALLET_CONNECTED_OPTIONS,
  WALLETS_DATA,
  POOL_TABLE_DATA
} from './data'

const App = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState('default')
  const [showCreatePoolDialog, setShowCreatePoolDialog] = useState(false)
  const [showRemoveLiquidityDialog, setShowRemoveLiquidityDialog] =
    useState(false)
  const [
    showWalletConnectedOptionsDialog,
    setShowWalletConnectedOptionsDialog
  ] = useState(false)
  const [showConnectionPopup, setShowConnectionPopup] = useState(false)
  const [showItemDetail, setShowItemDetail] = useState(false)
  const [SlippageTolerance, setSlippageTolerance] = useState(0.05)
  const [settingOption, setSettingOption] = useState('')
  const [cardValue, setCardValue] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)
  const [query, setQuery] = useState('')
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

  const firstSelectedToken = {
    amount: '0.016491306',
    allowance: '',
    symbolPair: '',
    chainId: 23456,
    contractHash: '',
    decimals: 2,
    logoURI: '',
    name: 'CSPR',
    packageHash: '',
    symbol: 'CSPR',
    priceUSD: 'CSPR'
  }

  const secondSelectedToken = {
    amount: '351149.146168057',
    allowance: '',
    symbolPair: '',
    chainId: 23456,
    contractHash: '',
    decimals: 2,
    logoURI: '',
    name: 'WETH',
    packageHash: '',
    symbol: 'WETH',
    priceUSD: 'WETH'
  }

  const routes = [
    {
      icon: swapIcon,
      page: 'Swap',
      path: '/swap',
      action: () => redirectTo('/swap')
    },
    {
      icon: liquidityIcon,
      page: 'Liquidity',
      path: '/liquidity',
      action: () => redirectTo('/liquidity')
    },
    {
      icon: balanceIcon,
      page: 'Balance',
      path: '/balance',
      action: () => redirectTo('/balance')
    },
    {
      icon: poolIcon,
      page: 'Pool',
      path: '/pool',
      action: () => redirectTo('/pool')
    }
  ]

  const inputValidator = (value) => {
    console.log('validating', value)
  }

  const handleToggleTheme = () => {
    const theme = selectedTheme === 'default' ? 'dark' : 'default'
    setSelectedTheme(theme)
  }

  const handlerInput = (value) => {
    console.log('handlerInput', value)
    setCardValue(value)
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

  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const handleRemoveLiquidity = (liquidityPool) => {
    setShowRemoveLiquidityDialog(false)
    console.log('RemoveLidityPool', liquidityPool)
  }

  const handleWalletConnect = () => {
    setIsWalletConnected(true)
    setShowWalletConnectedOptionsDialog(true)
  }
  const redirectTo = (page) => {
    console.log('Change to page', page)
  }

  const handleConnectionPopup = (value) => {
    console.log('handleConnectionPopup', value)
    setShowConnectionPopup(false)
  }

  const handleItemDetail = () => {
    console.log('llego aqui')
    setShowItemDetail(false)
  }

  return (
    <UiProvider theme={theme[selectedTheme]}>
      <Menu
        title='casperswap'
        isMobile={true}
        links={routes}
        menuIcon={casperIcon}
        casperIcon={casperTextIcon}
        rightAction={{
          startIcon: ethToken,
          title: 'Connect Wallet',
          background: '#7AEDD4',
          color: '#715FF5',
          onAction: () => setShowConnectionPopup(true)
        }}
        toggle={{
          isActive: selectedTheme === 'dark',
          toggle: handleToggleTheme,
          variant: 'theme-switcher'
        }}
      />
      <>
        <Container>
          <Row>
            <Column props={{ xs: 12 }}>
              <div
                style={{
                  background: 'darkblue',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Toggle
                  isActive={selectedTheme === 'dark'}
                  toggle={handleToggleTheme}
                  variant='theme-switcher'
                  // variant='inverted-colors'
                  // labelText='Show Staked'
                />
              </div>
            </Column>
          </Row>
        </Container>
        <Container props={{ fluid: true }}>
          <Row>
            <Column props={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
              <h1>Test 1</h1>
            </Column>
            <Column props={{ xs: 12, sm: 6, md: 6, lg: 6, lastXs: true }}>
              <h1>Test 2</h1>
            </Column>
            <Column props={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
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
          </Row>
          <Column props={{ xs: 4 }}>
            <Button
              type='large'
              props={{ onClick: () => console.log('clicked') }}
            >
              {' '}
              Swap{' '}
            </Button>
          </Column>
        </Container>
        <Container>
          <TextIconTouchable
            startIcon={ethToken}
            name={'ETH'}
            endIcon={downwardsArrowIcon}
            actionCallBack={() => console.log('TextIconTouchable clicked')}
          />
        </Container>
        <Container>
          <Input
            placeholder='PlaceHolder_input'
            helperText='Something is wrong!'
            type='icon-label-helper-text'
            status=''
            label='Label test'
            hasBackground={true}
            // Icon={<AlertTriangle color="red" size={24} />}
            Icon={
              <TextIconTouchable
                startIcon={ethToken}
                name={'ETH'}
                endIcon={downwardsArrowIcon}
                actionCallBack={() => setShowCreatePoolDialog((prev) => !prev)}
              />
            }
            iconSize='large'
            onChange={handlerInput}
            validator={inputValidator}
          />
        </Container>
        <Container props={{ xs: 12, padding: 0 }}>
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
          </Row>
          <Row>
            <Column props={{ xs: 12, md: 6 }}>
              <SwapTabs tokenImg={ethLogo} />
            </Column>
            <Column props={{ xs: 12, md: 6 }}>
              <LiquidityDetails
                firstSelectedToken={firstSelectedToken}
                secondSelectedToken={secondSelectedToken}
                gasFee={15}
                slippageTolerance={0.05}
              />
            </Column>
          </Row>
          <Row className='my-1'>
            <Column props={{ xs: 12 }}>
              <BalanceTable data={BALANCE_TABLE_DATA} />
            </Column>
          </Row>
          <Container>
            <button onClick={() => setShowConnectionPopup(true)}>Open</button>
            {/* <WalletConnection
              closeCallback={handleConnectionPopup}
              wallets={WALLETS_DATA}
              isOpen={showConnectionPopup}
            /> */}
            <PoolItemDetails
              isOpen={showConnectionPopup}
              closeCallback={handleConnectionPopup}
              token0Icon={ethToken}
              token1Icon={ethToken}
              token0Symbol='ETH'
              token1Symbol='CSPR'
              isFavorite={true}
              handleFavorite={() => console.log('favorite clicked')}
              widthIcon={45}
              heightIcon={45}
              yourLiquidity='71.54'
              assetsPooled='71086.476565058'
              yourShare='136,711.07'
              liqudiity='4,653,213'
              volume7D='4,653,213'
              fees7D='4,653,213'
              apr='4,653,213'
            />
          </Container>
          <Row className='my-1'>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <Column props={{ xs: 12 }}>
              <PoolTable data={POOL_TABLE_DATA} query={query} />
            </Column>
          </Row>
        </Container>
        <Container>
          <div
            style={{
              margin: '30px 0 30px 0',
              maxWidth: '850px',
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
              LeftAdornment={<Icons name='Star' color='#715FF5' size={24} />}
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
          <Column props={{ xs: 9 }}>
            <TransactionDetailsTextOnly
              tokenInfo={[
                '1 Wrapper Ether = 391.361884674 Wrapper Casper',
                '1 Wrapper Casper = 0.002555180 Wrapper Ether'
              ]}
            />
          </Column>
        </Container>
        <Container>
          <div style={{ width: '100%', padding: '20px 0 20px 0' }}>
            <HorizontalCard
              icon={ethCsprPair}
              hasFavorite={true}
              tokenPairs={['ETH', 'CSPR']}
              pairsLiquidity={[
                { name: 'Pooled (WCSPR)', value: '1543.804256310 WCSPR' },
                { name: 'Pooled (WETH)', value: '0.016286696 WETH' }
              ]}
              userPoolInfo={['5.00100931 LP', '0.19%']}
              trashHandler={() => setShowRemoveLiquidityDialog((prev) => !prev)}
              swapHandler={() => console.log('horizontal card: swap')}
              viewHandler={() => console.log('horizontal card: view')}
              itemHandler={() => setShowItemDetail((prev) => !prev)}
              addLiquidityHandler={() =>
                console.log('horizontal card: add liquidity')
              }
              favoriteHandler={() => console.log('horizontal card: favorite')}
            />
          </div>
        </Container>
        <Container>
          <Column props={{ xs: 10, md: 6 }}>
            <Slider
              callback={(selectedPercentage) =>
                console.log('Slider', selectedPercentage)
              }
            />
          </Column>
        </Container>
        <Container>
          <CreatePoolDialog
            isOpen={showCreatePoolDialog}
            closeCallback={() => setShowCreatePoolDialog(false)}
            tokenListData={TOKEN_LIST_DATA_CREATE_POOL}
            popularTokensData={POPULAR_TOKEN_LIST_DATA_CREATE_POOL}
          />
        </Container>
        <Container>
          <Row className='my-2'>
            <RowIcon
              tokenName='WETH'
              tokenFullName='Wrapped Ether'
              Icon={ethLogo}
              iconSize={30}
            />
          </Row>
        </Container>
        <Container>
          <Row className='my-2'>
            <WalletConnectionButton
              startIcon={walletIcon}
              isWalletActive={isWalletConnected}
              walletID='f13c5754-1f0a-4f07-b1ca-dc55e6d778e7'
              onClick={handleWalletConnect}
            />
          </Row>
          <WalletConnectedOptionsDialog
            isOpen={showWalletConnectedOptionsDialog}
            closeCallback={() => setShowWalletConnectedOptionsDialog(false)}
            options={WALLET_CONNECTED_OPTIONS}
          />
        </Container>
        <Container>
          <RemoveLiquidityDialog
            id='f90c4f56-ae0a-4da8-bf3d-541c80c89f87'
            isOpen={showRemoveLiquidityDialog}
            closeCallback={handleRemoveLiquidity}
            liquidityPoolData={REMOVE_LIQUIDITY_DATA}
          />
          <LiquidityItemDetail
            isOpen={showItemDetail}
            closeCallback={handleItemDetail}
          />
        </Container>
        <Container>
          <Row>
            <Column props={{ xs: 6 }}>
              <CoinCard
                startIcon={ethToken}
                endIcon={downwardsArrowIcon}
                iconSize='large'
                tokenBalance='20000.00'
                tokenName='ETH'
                tokenPrice='34.33'
                placeholder='0.000000000'
                onChangeToken={() => console.log('Change token')}
                onChangeValue={handlerInput}
                validator={inputValidator}
                value={cardValue}
              />
            </Column>
          </Row>
        </Container>
        <Container>
          <LPContainer
            title='My Liquidity'
            lpTokens={[
              {
                icon: ethCsprPair,
                isFavorite: true,
                firstSymbol: 'ETH',
                secondSymbol: 'CSPR',
                firstAmount: '200.00000002',
                secondAmount: '4000000.00000122',
                userLP: '10',
                totalLP: '232000',
                onOptionClick: (option, firstSymbol, secondSymbol) => {}
              },
              {
                icon: casperIcon,
                isFavorite: false,
                firstSymbol: 'BTC',
                secondSymbol: 'CSPR',
                firstAmount: '0.05',
                secondAmount: '9000000.00000122',
                userLP: '1.02',
                totalLP: '34000',
                onOptionClick: (option, firstSymbol, secondSymbol) => {}
              },
              {
                icon: tetherToken,
                isFavorite: false,
                firstSymbol: 'USDT',
                secondSymbol: 'CSPR',
                firstAmount: '50.00000002',
                secondAmount: '4000.00000122',
                userLP: '19',
                totalLP: '23000',
                onOptionClick: (option, firstSymbol, secondSymbol) => {}
              }
            ]}
          />
        </Container>
        <Container>
          <LPSearch handleOnlyShowStaked={(e) => console.log('LPSearch', e)} />
        </Container>
      </>
    </UiProvider>
  )
}
export default App
