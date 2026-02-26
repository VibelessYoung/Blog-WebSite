import axios from "axios";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/Navbar";
import "./styles/Style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8000";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
