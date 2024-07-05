import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { UserProvider, useUser } from "./contexte/UserContext";
import Navigation from "./components/Navigation";
import AddArticle from "./pages/AddArticle";

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
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
