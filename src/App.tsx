import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import WebsiteHeader from "./components/WebsiteHeader";
import WebsiteLayout from "./layouts/WebsiteLayout";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";

import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import { CategoryType } from "./types";
import { categoryList } from "./api/category";
import ProductAdmin from "./pages/ProductAdmin";
import { getAll, read, updateProduct } from "./api/products";
import ProductCategoryAdminDetail from "./pages/ProductAdminCategoryDetail";
import CategoryAdmin from "./pages/CategoryAdmin";
import CategoryEdit from "./pages/CategoryEdit";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WebsiteMain from "./components/WebsiteMain";
import { AdminGuard } from "./guards/AdminGuard";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
function App() {
  
  const [products, setProducts] = useState([]);

  return (
    <Wrapper>
      <Routes>
        
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<WebsiteMain/>}></Route>
          <Route path="category/:id" element={<WebsiteMain/>}/>
          <Route path="product-detail/:id" element={<ProductDetail/>}/>
        <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="cart" element={<CartPage/>}/>
        </Route>
    
        <Route path="admin" element={<AdminGuard><AdminLayout/></AdminGuard>}>
          <Route index element={<ProductAdmin/>}/>
          <Route path="category/:id" element={<ProductCategoryAdminDetail />} />
          <Route path="create" element={<ProductAdd />} />
          <Route path="product/edit/:id" element={<ProductEdit />} />
          <Route path="category" element={<CategoryAdmin/>}/>
          <Route path="category/edit/:id" element={<CategoryEdit/>}/>
         
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
