import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import styled from 'styled-components'

type Props = {}

const WebsiteMain = (props: Props) => {
  return (
    <Content>
      <Main/>
    </Content>
  )
}
//Example Main
const Main = styled.div`
height:300px;
width:100%
`
export default WebsiteMain