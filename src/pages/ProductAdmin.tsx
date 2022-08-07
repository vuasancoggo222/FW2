import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Typography, Button, Table, Space } from 'antd';
import { Link } from 'react-router-dom'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { getAll,changeStatus, read, updateProduct } from "../api/products";

const { Paragraph } = Typography

interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
    id : string | number
}

const ProductAdminPage = () => {
    const [dataTable, setDataTable] = useState([])
    const onChangeStatus = async (id: any) => {
        const {data} = await read(id)
        let statusNew = 2;
        if(data.status == 0) {
            statusNew = 1
        }else{
            statusNew = 0
        }
        const dataUpdate = {...data, status: statusNew }
    
        await updateProduct(dataUpdate,id)
        const dataNew = await getAll();
        setDataTable(dataNew.data)
      }
    useEffect(() => {        
        const getProducts = async()=>{
            try {
                const {data} = await getAll()
                console.log(data);
                setDataTable(data)
            } catch (error) {
               console.log(error); 
            } 
        }
        getProducts()
    }, [])

    const columns: ColumnsType<DataType> = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Đặc điểm',
            dataIndex: 'feature',
            key: 'feature',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Giá khuyến mãi',
            dataIndex: 'saleOffPrice',
            key: 'saleOffPrice',
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: status => <span>{status ? "Hết hàng" : 'Còn Hàng'}</span>
        },
        {
            title: 'Chức năng',
            dataIndex: 'id',
            key : 'id',
            render: id => <Space>
                <Button danger onClick={ async() => {
                        onChangeStatus(id)
                    }}  ><span>Change</span></Button>
                <Button type="primary"><Link to={`product/edit/${id}`}>Edit</Link></Button>
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
            <Table columns={columns} dataSource={dataTable} />
        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export default ProductAdminPage