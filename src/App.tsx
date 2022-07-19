import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import WebsiteHeader from './components/WebsiteHeader'
import WebsiteLayout from './layouts/WebsiteLayout'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import ProductCategory from './pages/ProductCategory'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
function App() {
  
  return (
    <Wrapper>
    <Routes>
      <Route path='/' element={<WebsiteLayout/>}></Route>
      <Route path='admin' element={<AdminLayout/>}>
        <Route path="category/:id" element={<ProductCategory/>}/>
        <Route path="create" element={<ProductAdd/>}/>
        <Route path="edit/:id" element={<ProductEdit/>}/>
      </Route>
    </Routes>
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
