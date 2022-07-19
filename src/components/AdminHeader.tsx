import { Header } from 'antd/lib/layout/layout'
import Input from 'rc-input'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoWebSite from '../assets/anhhtus-logo 2.png'
type Props = {}
const HeaderStyle: React.CSSProperties = {
  backgroundColor : '#00B0D7',
  display : 'flex',
  lineHeight: '1.5715',
  justifyContent: 'space-between',
  padding: '3px 86px 4px 24px'
}
const InputStyle: React.CSSProperties ={
  width : '533px',
  height : '34px',
  margin: 'auto 0',
  lineHeight: '57px',
  marginRight:'47px',
  borderRadius :"6px",
  border: 'none',
  
}
const LinkStyle = {
  color: '#FFFFFF',
  fontSize: '16px',
  paddingTop : '15px',
  lineHeight: '50px'
}
const AdminHeader = (props: Props) => {
  return (
    <Header style={HeaderStyle}>
     <Wrap>
     <Logo src={LogoWebSite}/>
      <Heading>Dashboard</Heading>
      <>
      <Input style={InputStyle}/>
      </>
     </Wrap>
      <Wrap>
      <Link to='/admin' style={LinkStyle}>Xin chào Vũ Anh Tú</Link>
      </Wrap>
    </Header>
  )
}
const Logo = styled.img`
width: 65px;
height:57px;
margin-right:115px;
`
const Wrap = styled.div``
const Heading = styled.a`
`
export default AdminHeader