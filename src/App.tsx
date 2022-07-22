import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import WebsiteHeader from "./components/WebsiteHeader";
import WebsiteLayout from "./layouts/WebsiteLayout";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import ProductCategory from "./pages/ProductCategory";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import { CategoryType } from "./types";
import { categoryList } from "./api/category";
import ProductAdmin from "./pages/ProductAdmin";
import { getAll, read, updateProduct } from "./api/products";
function App() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [products, setProducts] = useState([]);
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
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}></Route>
        <Route path="admin" element={<AdminLayout/>}>
          <Route index element={<ProductAdmin/>}/>
          <Route path="category/:id" element={<ProductCategory />} />
          <Route path="create" element={<ProductAdd />} />
          <Route path="product/edit/:id" element={<ProductEdit />} />
        </Route>
      </Routes>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 1777px;
  margin: 0 auto;
  font-family: Roboto, sans-serif;
  background-color: #e5e5e5;
`;
export default App;
