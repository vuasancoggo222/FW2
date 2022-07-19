const { Header, Footer, Sider, Content } = Layout;
import { Layout, Menu } from 'antd';
import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../components/AdminHeader'
import AdminSider from '../components/AdminSider';
type Props = {}
const Flex: React.CSSProperties ={
  display:'flex'
}
const AdminLayout = (props: Props) => {
  return (
    <Layout>
    <AdminHeader/>
    <Layout>
    <AdminSider/>
      <Outlet/>
    </Layout>
  </Layout>
  )
}

export default AdminLayout