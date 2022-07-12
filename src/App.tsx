import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import WebsiteHeader from './components/WebsiteHeader'
import WebsiteLayout from './layouts/WebsiteLayout'
import styled from 'styled-components'
function App() {
  return (
    <Wrapper>
     <WebsiteLayout/>
    </Wrapper>
  )
}
const Wrapper  = styled.div`
max-width:1777px;
margin:0 auto;
font-family : Roboto,sans-serif;
background-color: #E5E5E5;
`
export default App
