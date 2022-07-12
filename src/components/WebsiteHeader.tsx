import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import styled from 'styled-components'
import LogoWebSite from '../assets/anhhtus-logo 2.png'
type Props = {}
const HeaderStyle: React.CSSProperties = {
  backgroundColor : '#D70018',
  padding : '4px 358px 4px 305px',
};
const WebsiteHeader = (props: Props) => {
  return (
    <Header style={HeaderStyle}>
     <Logo src={LogoWebSite}/>
    </Header>
  )
}
const Logo = styled.img`
margin-top:-5px;
width: 65px;
height:auto;
`

export default WebsiteHeader