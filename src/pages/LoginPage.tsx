import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/auth';



type Props = {

}

const LoginPage = (props: Props) => {
    const navigate = useNavigate()
  const onFinish = async  (values: any) => {
  try {
    const {data} = await login(values)
    localStorage.setItem('user',JSON.stringify(data))
    message.success('Login Success')
    navigate('/')
  } catch (error) {
    message.error('Something went wrong ')
  } 
  };
  return (
    <div style={{ margin:"30px auto"}}>
      <Form
      name="normal_login"
      className="login-form"
      style={{  width:"300px"}}
      
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        
      >
    <Input.Password className ="mt-3"
    prefix={<LockOutlined className="site-form-item-icon" />}
      placeholder="Password"
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
      </Form.Item>
      <Form.Item>
        <Button  type="primary" htmlType="submit" style={{ width: "100%"}} className=" mt-3 login-form-button">
          Log in
        </Button><span  style={{marginTop:"10px"}}>You don't have an account ? </span>
        <br /><Link to="/register" className=""> register now!</Link>
      </Form.Item>
    </Form>
    </div>
  )
}

export default LoginPage