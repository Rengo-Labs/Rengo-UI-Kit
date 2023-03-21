import styled, { css, keyframes } from 'styled-components'

// @ts-ignore
import DefaultSvg from './images/default.svg'
// @ts-ignore
import Variant2 from './images/Variant2.svg'
// @ts-ignore
import Variant3 from './images/Variant3.svg'
// @ts-ignore
import Variant4 from './images/Variant4.svg'
// @ts-ignore
import Variant5 from './images/Variant5.svg'
// @ts-ignore
import Variant6 from './images/Variant6.svg'
// @ts-ignore
import Variant7 from './images/Variant7.svg'
// @ts-ignore
import Variant8 from './images/Variant8.svg'
// @ts-ignore
import Variant9 from './images/Variant9.svg'
// @ts-ignore
import Variant10 from './images/Variant10.svg'
// @ts-ignore
import Variant11 from './images/Variant11.svg'
// @ts-ignore
import Variant12 from './images/Variant12.svg'
// @ts-ignore
import Variant13 from './images/Variant13.svg'
// @ts-ignore
import Variant14 from './images/Variant14.svg'
// @ts-ignore
import Variant15 from './images/Variant15.svg'
// @ts-ignore
import Variant16 from './images/Variant16.svg'
// @ts-ignore
import Variant17 from './images/Variant17.svg'
// @ts-ignore
import Variant18 from './images/Variant18.svg'
// @ts-ignore
import Variant19 from './images/Variant19.svg'

const pulse = keyframes`
  0% { background-image: url(${DefaultSvg}); }
  5% { background-image: url(${Variant2});}
  10% { background-image: url(${Variant3}) }
  15% { background-image: url(${Variant4}) }
  20% { background-image: url(${Variant5}) }
  25% { background-image: url(${Variant6}) }
  30% { background-image: url(${Variant7}) }
  35% { background-image: url(${Variant8}) }
  40% { background-image: url(${Variant9}) }
  45% { background-image: url(${Variant10}) }
  50% { background-image: url(${Variant11}) }
  55% { background-image: url(${Variant12}) }
  60% { background-image: url(${Variant13}) }
  65% { background-image: url(${Variant14}) }
  70% { background-image: url(${Variant15}) }
  75% { background-image: url(${Variant16}) }
  80% { background-image: url(${Variant17}) }
  90% { background-image: url(${Variant18}) }
  100% { background-image: url(${Variant19}) }
`

export const Wrapper = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export const AnimatedImg = styled.div`
  animation: ${pulse} 800ms linear infinite;
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 48px;
    height: 58px;
  }
`
