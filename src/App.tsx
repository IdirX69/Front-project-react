import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { UserProvider } from "./contexte/UserContext";
import LoginForm from "./pages/LoginForm";
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
import UserInfos from "./components/UserInfos";
import OrdersList from "./components/OrdersList";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/account/infos" element={<UserInfos />} />
            <Route path="/account/orders" element={<OrdersList />} />
            <Route path="/account" element={<Account />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/cart" element={<Cart />} />
            //products routes
            <Route path="/products" element={<Products />} />
            <Route path="/products/new" element={<AddProduct />} />
            <Route path="/products/edit/:id" element={<EditProduct />} />
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
