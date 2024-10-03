import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { UserProvider } from "./contexte/UserContext";
import LoginRegister from "./pages/LoginRegister";
import AdminDashboard from "./pages/Product/AdminDashboard";
import Products from "./pages/Product/Products";
import AddProduct from "./pages/Product/AddProduct";
import EditProduct from "./pages/Product/EditProduct";
import Categories from "./pages/categories/Categories";
import AddCategories from "./pages/categories/AddCategories";
import Cart from "./pages/Cart";
import { CartProvider } from "./contexte/CartContext";
import Orders from "./pages/Orders";
import Account from "./pages/Account";
import AllProducts from "./pages/AllProducts";

import Error from "./pages/Error";
import UserOrders from "./pages/UserOrders";
import ProductInfo from "./pages/ProductInfo";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/account/orders" element={<UserOrders />} />
            <Route path="/account/infos" element={<Account />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/cart" element={<Cart />} />
            //products routes
            <Route path="/products" element={<Products />} />
            <Route path="/products/new" element={<AddProduct />} />
            <Route path="/products/edit/:id" element={<EditProduct />} />
            <Route path="/products/:id" element={<ProductInfo />} />
            <Route path="/products/all" element={<AllProducts />} />
            //categories routes
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/new" element={<AddCategories />} />
            //orders routes
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
