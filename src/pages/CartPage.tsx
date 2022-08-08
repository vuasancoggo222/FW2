import React from 'react'
import styled from 'styled-components'

type Props = {}

const CartPage = (props: Props) => {
    const cart = JSON.parse(localStorage.getItem('cart') as string)
    console.log(cart);
    
  return (
   <CartContainer>
    <CartNav>
        <Span>Trở về</Span>
        <Span>Giỏ hàng</Span>
    </CartNav>
    <CartMain>
       {cart.map((item: any) =>{
            return (
               <Wrap>
                  <Img src="https://picsum.photos/173/173" />
                <CartInfo>
                    <CartName>{item.name}</CartName>
                    <Price>{item.saleOffPrice}<OriginalPrice>{item.originalPrice}</OriginalPrice></Price>
                    <br />
                    <span>Chọn số lượng</span>:<Input value={item.quantity} />
                </CartInfo>
               </Wrap>    
            )
        })}
    </CartMain>
   </CartContainer>
  )
}
const CartContainer = styled.div`
margin :  0 auto;
`
const CartNav = styled.div`
display : flex;
justify-content : left
`
const Span = styled.span`
font-size : 16px;
color : #D70018;
margin-right : 200px;
`
const CartMain = styled.div`=
padding : 10px;
`
const Img = styled.img`
margin-right : 25px;
`
const CartInfo = styled.div``
const Price = styled.span`
font-size : 15px;
color : #D70018;
`
const CartName = styled.div``
const OriginalPrice = styled.span`
margin-left : 10px;
font-size : 14px;
color : #707070;
`
const Input = styled.input`
`
const Wrap = styled.div`
display : flex;
margin : 20px 0
`
export default CartPage