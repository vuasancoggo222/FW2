import { PhoneOutlined, LaptopOutlined, TabletFilled, AudioOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components';

import LogoImage from '../assets/anhhtus-logo 2.png'

const { Header, Content, Sider } = Layout;

const navLink : React.CSSProperties = {
  textAlign : 'center',
}



type Props = {

}

const AdminLayout = (props: Props) => {

  
  return (
    <Layout>
    <HeaderCustom>
      <Logo src={LogoImage} />
    </HeaderCustom>
    <Layout>
      <Sider
        
        width={200}
        className="site-layout-background">
           <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}

        >
               <Link style={navLink}  to={`/admin`}><Menu.Item>Tất cả sản phẩm</Menu.Item></Link>
               <Link style={navLink}  to={`/admin/category`}><Menu.Item>Tất cả danh mục</Menu.Item></Link>
        </Menu>
        <Menu>
      
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <ContentCustom>
          <Outlet />
        </ContentCustom>
      </Layout>
    </Layout>
  </Layout>
  )
}


const HeaderCustom = styled(Header)`
    background-color: #00B0D7;
    height: 64px;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 64px;
    height: auto;
`

const ContentCustom = styled(Content)`
  min-height: 100vh;
`

export default AdminLayout;