import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { categoryList, readCategory, updateCategory } from '../api/category'
import { Button, Form, Input, message, Select } from 'antd';
import { getAll } from '../api/products';
const { Option } = Select;

type Props = {}

const CategoryEdit = (props: Props) => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
		console.log('Success:', values);
		try {
			await updateCategory(id,values)
			message.success("Cập nhật thành công")
      await categoryList()
			navigate('/admin/category')
    
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	};
	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
  const formStyle : React.CSSProperties = {
    marginTop : '30px',
    textAlign : 'center'
  }
    const {id} = useParams()
  
        const getCategories = async ()=>{
                const {data} = await readCategory(id)
                console.log(data);
                form.setFieldsValue(data) 
        }
        getCategories()
  return (
    <Form  labelCol={{ span: 6 }}
    wrapperCol={{ span: 8 }}
    autoComplete="off"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    initialValues={{ status : true, }}
    style={formStyle}>
      <Form.Item label="Category Name" name="name" rules={[{ required: true, message:"Please input product name"},{min: 2 , message : "Category name must be at least 2 characters"}]}>
        <Input />
      </Form.Item>
      <Form.Item>
							<Button type="primary" htmlType="submit">
								Update
							</Button>
						</Form.Item>
    </Form>
  )
}

export default CategoryEdit