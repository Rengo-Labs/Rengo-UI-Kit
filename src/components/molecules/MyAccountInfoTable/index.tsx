import React from 'react'
import {Column, Container, ContainerMobile, KeyItem, Row, ValueItem} from './styles'
import { Icons, KeyValueText } from '../../atoms'
import DOMPurify from 'dompurify'
import { useDeviceType } from '../../../hooks'
import { DeviceType } from '../../../hooks/types'
import { MyAccountInfoTableMobile } from './MyAccountInfoTableMobile'

export enum MyAccountInfoDataTypes {
  String = 'string',
  Link = 'link'
}

export type DataKeyValues = {
  key: string
  type: MyAccountInfoDataTypes
  value: string
}

export interface MyAccountInfoTableProps {
  data: DataKeyValues[]
}

const SubItem = (text: string) => (
  <>
    <Icons name='CornerDownRight' fill='transparent' size={24} color='#B3B3B3' />
    {text}
  </>
)

const HEADERS = [
  {
    id: '862453d0-8ba1-4d66-9298-d92840f7db19',
    content: 'Public Key',
    isStrongContent: true,
    type: 'item',
    alignment: 'left'
  },
  {
    id: '43a81a69-baea-48dd-8ae6-d5789ca4b4f5',
    content: 'Account Hash',
    isStrongContent: true,
    type: 'item',
    alignment: 'left'
  },
  {
    id: 'e5690fdb-712e-4adf-a6f4-c7fa503b2a6e',
    content: 'Total reward received',
    isStrongContent: false,
    type: 'item',
    alignment: 'left'
  },
  {
    id: '4c04bc5e-0ab1-4e9b-a507-89dc569294aa',
    content: 'Delegated Participation',
    isStrongContent: false,
    type: 'item',
    alignment: 'left'
  },
  {
    id: '3eee674f-4a0c-4263-bea6-d6025bf31e62',
    content: 'Total Balance',
    type: 'sub-item',
    isStrongContent: false,
    alignment: 'center'
  },
  {
    id: 'df7fc928-d98f-40a3-b5c9-e1c2354b902f',
    content: 'Liquidity',
    type: 'sub-item',
    isStrongContent: false,
    alignment: 'center'
  },
  {
    id: '368954d5-ddce-47dd-92b7-83e8c7d33fbb',
    content: 'In Rescue',
    type: 'sub-item',
    isStrongContent: false,
    alignment: 'center'
  },
  {
    id: '368954d5-ddce-47dd-92b7-83e8c7d3332b',
    content: 'Raw Data',
    type: 'item',
    isStrongContent: false,
    alignment: 'left'
  },
]

/**

    A table component to display account information with headers and corresponding data
    @component
    @param {MyAccountInfoTableProps} props - The props object containing the data to display
    @param {DataKeyValues[]} props.data - The array of data objects, containing the key, type, and value of the data to display
    @property {string} key - The key for the data object
    @property {string} type - The type of the data object. Valid options are 'string' or 'link'
    @property {string} value - The value of the data object
    @return {JSX.Element} The MyAccountInfoTable component
*/

export const MyAccountInfoTable = ({ data }: MyAccountInfoTableProps) => {
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE
  
  DOMPurify.addHook('afterSanitizeAttributes', (node) => {
    if (node.nodeName === 'A') {
      node.setAttribute('target', '_blank')
    }
  });

  const sanitizedMessage = (content: string) => DOMPurify.sanitize(content);

  return (
      isMobile ? (
        <ContainerMobile>
          <MyAccountInfoTableMobile headers={HEADERS} data={data} />
        </ContainerMobile>
      ) : (
      <Container>
        <Column >
          {HEADERS.map((header, idx) => (
            <Row key={header.id}>
              <KeyItem isStrong={header.isStrongContent} alignment={header.alignment}>
                {header.type === 'sub-item' ? SubItem(header.content) : header.content}
              </KeyItem>
              {data[idx].type === MyAccountInfoDataTypes.Link ? (
                <ValueItem dangerouslySetInnerHTML={{__html: sanitizedMessage(data[idx].value)}} />
              ) : (
                <ValueItem>{data[idx].value}</ValueItem>
              )}
              
            </Row>
          ))}
        </Column>
      </Container>
    )
  )
}
