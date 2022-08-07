import { Menu, MenuProps, message } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React, { useEffect, useState } from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { categoryList, getProductByCate } from '../api/category';
import { CategoryType } from '../types';
type Props = {
  onSendCates : (data:any) => void
}
const SiderStyle : React.CSSProperties={
  height : '380px'
}
const WebsiteSider = (props: Props) => {
  const navLink : React.CSSProperties = {
    textAlign : 'center',
  }
  const {id} = useParams()
  const [categories, setCategories] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await categoryList();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
      useEffect(()=>{
        const getCategoriesProducts = async () => {
          try {
            const {data} = await getProductByCate(id)
            props.onSendCates(data)
            
          } catch (error) {
            message.error('Something went wrong')
          }
        }
        getCategoriesProducts()
      },[id])
  return (
    <Sider className="site-layout-background" width={220}>
       <Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    style={{ height: '100%', borderRight: 0 }}>
            {categories && categories.map((item:any)=>{
        return (
          <Link style={navLink} key='item.id'  to={`/category/${item.id}`} ><Menu.Item key={item.id}>{item.name}</Menu.Item></Link>
        )
      })}
  </Menu>
  </Sider>
  )
}

export default WebsiteSider