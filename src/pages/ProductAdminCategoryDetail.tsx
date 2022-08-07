
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Typography, Button, Table, Space } from 'antd';
import { Link, useParams } from 'react-router-dom'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { getAll,changeStatus, read, updateProduct } from "../api/products";
import { getProductByCate } from "../api/category";

const { Paragraph } = Typography

interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
    id : string | number
}

const ProductCategoryAdmin = () => {
  const [dataSource,setDataTable] = useState([])
  const [categoryName,setCategoryName] = useState('')
  const {id} = useParams()
  useEffect(()=>{
   const getProductCate = async ()=>{
    try {
      const {data} = await getProductByCate(id)
      setDataTable(data.products)
      setCategoryName(data.name)
    } catch (error) {
      console.log(error);
    }
   }
   getProductCate()
  },[id])
 
  
    const columns: ColumnsType<DataType> = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Đặc điểm',
            dataIndex: 'feature',
            key: 'feature',
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
    ];
    return (
        <>
            <Typography.Title level={2} style={{ margin: 0 }}>
                   {categoryName}
                </Typography.Title>
            <Table columns={columns} dataSource={dataSource} />
            </>
    )
    }
export default ProductCategoryAdmin