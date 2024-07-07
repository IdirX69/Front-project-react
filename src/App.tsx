import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/LoginForm";
import { UserProvider, useUser } from "./contexte/UserContext";
import Navigation from "./components/Navigation";
import AddArticle from "./components/AddArticle";
import LoginForm from "./pages/LoginForm";

function App() {
  const { user } = useUser();
  return (
    <UserProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-article" element={<AddArticle />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
