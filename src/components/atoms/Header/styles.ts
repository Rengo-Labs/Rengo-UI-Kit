import styled from 'styled-components';

type TTextStyle = {
  isTitle?: boolean;
}

export const WrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
  width:100%;
  max-height: 42px;
  padding: 8px 24px 8px 32px;
  border-radius: 16px 16px 0 0;
  background-color: ${({theme}) => theme.color.primary.default};
`

export const TextStyle = styled.p<TTextStyle>`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: ${({isTitle}) => isTitle ? 600 : 400};
  text-transform: capitalize;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${({theme}) => theme.color.white};
`