import React, { ReactElement } from 'react'
import { ColumnMobile, ContentContainer, ImgContainerMobile, KeyItemMobile, RowMobile, ValueItemMobile } from './styles'
import DOMPurify from 'dompurify';
import { DataKeyValues, MyAccountInfoDataTypes } from '.';
import { Icons } from '../../atoms';

type HeaderItem = {
  id: string;
  content: string | ReactElement;
  isStrongContent: boolean;
  type: string;
  alignment: string;
}

interface MyAccountInfoTableMobileProps {
  headers: HeaderItem[]
  data: DataKeyValues[]
}

/**

    A mobile view table component to display account information with headers and corresponding data
    @component
    @param {MyAccountInfoTableProps} props - The props object containing the data to display
    @param {DataKeyValues[]} props.data - The array of data objects, containing the key, type, and value of the data to display
    @property {string} key - The key for the data object
    @property {string} type - The type of the data object. Valid options are 'string' or 'link'
    @property {string} value - The value of the data object
    @return {JSX.Element} The MyAccountInfoTable component
*/
const Section = (headers: HeaderItem[], data: DataKeyValues[], sanitizedMessage: (arg0: string) => any) => (
  headers.map((header, idx) => (
    <RowMobile
      key={header.id}
      isLast={idx === headers.length - 1}
      isSubItem={header.type === 'sub-item'}>
        {header.type === 'sub-item' && (
          <ImgContainerMobile>
            <Icons name='CornerDownRight' fill='transparent' size={24} color='#B3B3B3' />
          </ImgContainerMobile>
        )}

        <ContentContainer>
          <KeyItemMobile type={header.type} alignment={header.alignment}>{header.content}</KeyItemMobile>
          {data[idx].type === MyAccountInfoDataTypes.Link ? (
            <ValueItemMobile dangerouslySetInnerHTML={{__html: sanitizedMessage(data[idx].value)}} />
          ) : (
            <ValueItemMobile>{data[idx].value}</ValueItemMobile>
          )}

        </ContentContainer>
    </RowMobile>
  )
  )
)

export const MyAccountInfoTableMobile = ({ headers, data }: MyAccountInfoTableMobileProps) => {
  DOMPurify.addHook('afterSanitizeAttributes', (node) => {
    if (node.nodeName === 'A') {
      node.setAttribute('target', '_blank');
    }
  });

  const sanitizedMessage = (content: string) => DOMPurify.sanitize(content);

  const headersOneOffset = headers.slice(0, 2)
  const headersTwoOffset = headers.slice(2)
  const dataTwoOffset = data.slice(2)

  return (
    <>
      <ColumnMobile>
        {Section(headersOneOffset, data, sanitizedMessage)}
        </ColumnMobile>
        <ColumnMobile>
          {Section(headersTwoOffset, dataTwoOffset, sanitizedMessage)}
        </ColumnMobile>
    </>
  )
}