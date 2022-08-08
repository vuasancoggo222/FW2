import { Button, Descriptions, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { read } from '../api/products'
import { Breadcrumb, Menu } from 'antd';
import styled from 'styled-components';
import {ShoppingCartOutlined} from '@ant-design/icons'
import { getProductByCate } from '../api/category';
import Title from 'antd/lib/skeleton/Title';
type Props = {}
const BreadcrumbStyle : React.CSSProperties = {
marginTop : '20px',
marginLeft: '200px'  
}
const ButtonStyle : React.CSSProperties = {
  width : '233px',
  height : '48px',
  marginRight : '15px',
  marginTop: '200px'
}
const CartStyle : React.CSSProperties = {
  border : '1px solid #D70018',
  borderRadius : '4px',
  marginRight : '8px'
}
const ProductDetail = (props: Props) => {
    const [detail,setDetail] = useState({})
    const [cart,setCart] = useState([])
    const [relationProduct,setRelationProduct] = useState([])
    const {id} = useParams()
    const cateId = detail.cateId
    useEffect(()=>{
      const readCate = async () =>{
        try {
          const {data} = await getProductByCate(cateId)
          console.log();
          setRelationProduct(data.products)
        } catch (error) {
          console.log(error);
        }
      }
      readCate()
    },[cateId])
    useEffect(()=>{
        const getProductDetail = async () =>{
           try {
            const {data} = await read(id)
            setDetail(data)
           } catch (error) {
                message.error('Something wrong')
           }
        }
        getProductDetail()
    },[id])
    const addToCart = (product:any) =>{
        const cart = JSON.parse(localStorage.getItem('cart') as string)|| []
        const existProduct = cart.find((item: { id: any; }) => item.id == product.id)
        if(!existProduct){
          cart.push({...product,quantity:1})
        }
        else{
          existProduct.quantity += 1
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }
  return (
    <>
     <Breadcrumb style={BreadcrumbStyle}>
    <Breadcrumb.Item>
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Link to={`/product-detail/${id}`}>{detail?.name}</Link>
    </Breadcrumb.Item>
  </Breadcrumb>
    <Container>
      <Name>{detail.name}</Name>
      <Content>
        <Img src="https://picsum.photos/358/358"/>
        <Detail>
            <Price>{detail.saleOffPrice}<OriginalPrice>{detail.originalPrice}</OriginalPrice></Price>
            <Description>{detail.description}</Description>
            <Button type="primary" danger style={ButtonStyle}>Mua Ngay</Button>
            <AddToCart><Button onClick={()=>addToCart(detail)}  style={CartStyle}><ShoppingCartOutlined/></Button></AddToCart>
             <span>Thêm vào giỏ hàng</span>
        </Detail>
      </Content>
            <span>Sản phẩm cùng loại</span>
      <RelationProduct>
      {relationProduct.map((item:any) => {
         return (
          <Product key={item.id}>
          <ProductImg src="https://i.picsum.photos/id/945/160/160.jpg?hmac=pEL1S7u7Azmfa0Noc3PRdZkN2uToyuNuXEYADQdsRCQ" alt="" />
          <ProductName><Link  to={`/product-detail/${item.id}`}>{item.name}</Link></ProductName>
          <Price>{item.saleOffPrice}<OriginalPrice>{item.originalPrice}</OriginalPrice></Price>
          </Product>
         )
       })}
       
      </RelationProduct>
      <Feature>
        <Center>Đặc điểm nổi bật</Center>
        {detail.feature}  
      </Feature>
    </Container>
    </>
  )
}
const Container = styled.div`
padding : 0 175px 50px 200px;
`
const Product = styled.div`
width : 200px;
height : 386px;
padding : 15px;
`
const ProductImg = styled.img`
`
const Center = styled.div`
text-align: center;
font-size : 20px;
color : #D70018;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
`
const ProductName = styled.span`
display :block;
margin-top : 10px;
`
const Name = styled.span`
font-size : 16px;
padding : 15px 0;
display : block;
`
const Content = styled.div`
display : grid;
grid-template-columns : 1fr 1fr
`
const Img = styled.img`
width : 358px;
height : 358px
`
const Detail = styled.div`

`
const Price = styled.span`
font-size : 24px;
color : #D70018;
`
const OriginalPrice = styled.span`
margin-left : 10px;
font-size : 14px;
color : #707070;
`
const Description = styled.div`
margin: 15px 0;
`
const AddToCart = styled.div`
display : inline-block;
`
const RelationProduct = styled.div`
display : grid;
grid-template-columns : 1fr 1fr 1fr 1fr 1fr
`
const Feature = styled.div`
margin-top : 20px
`
export default ProductDetail