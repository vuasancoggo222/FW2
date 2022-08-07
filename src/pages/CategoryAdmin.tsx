import { Button, Space, Typography } from 'antd'
import Table, { ColumnsType } from 'antd/lib/table'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { categoryList, readCategory, updateCategory } from '../api/category'
import { CategoryType } from '../types'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'; 3
type Props = {}

const CategoryAdmin = (props: Props) => {
    const [category,setCategory] = useState([])
    useEffect(()=>{
        const getCategories = async () =>{
            try {
                const {data} = await categoryList()
                console.log(data);
                
                setCategory(data)
            } catch (error) {
                console.log(error);
                
            }
        }
        getCategories()

    },[])
    const onChangeStatus = async (id: any) => {
        console.log(id);
        
        const {data} = await readCategory(id)
        let statusNew = 2;
        if(data.status == 0) {
            statusNew = 1
        }else{
            statusNew = 0
        }
        const dataUpdate = {...data, status: statusNew }
    
        await updateCategory(id,dataUpdate)
        const dataNew = await  categoryList();
        setCategory(dataNew.data)
      }
    const columns: ColumnsType<CategoryType> = [
        {
            title: 'Tên danh mục',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: status => <span>{status ? "Disabled" : 'Avaiable'}</span>
        },
        {
            title: 'Chức năng',
            dataIndex: 'id',
            key : 'id',
            render: id => <Space>
                <Button danger onClick={() => {
                        onChangeStatus(id)
                    }}  ><span>Change</span></Button>
                <Button type="primary"><Link to={`/admin/category/edit/${id}`}>Edit</Link></Button>
            </Space>
              ,
        },
    ];
    return (
        <>
            <Breadcrumb>
                <Typography.Title level={2} style={{ margin: 0 }}>
                  Sản Phẩm
                </Typography.Title>
                <Link to="/admin/create">
                    <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
                </Link>
            </Breadcrumb>
            <Table columns={columns} dataSource={category} />
        </>
    )
}
const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
export default CategoryAdmin