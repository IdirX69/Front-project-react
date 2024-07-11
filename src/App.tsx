import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { UserProvider, useUser } from "./contexte/UserContext";
import LoginForm from "./pages/LoginForm";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/Product/AdminDashboard";
import Products from "./pages/Product/Products";
import AddProduct from "./pages/Product/AddProduct";
import EditProduct from "./pages/Product/EditProduct";
import Categories from "./pages/categories/Categories";
import AddCategories from "./pages/categories/AddCategories";

function App() {
  const { user } = useUser();
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          //products routes
          <Route path="/products" element={<Products />} />
          <Route path="/products/new" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          //
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/new" element={<AddCategories />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
