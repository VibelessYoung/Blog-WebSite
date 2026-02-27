import axios from "axios";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/Navbar";
import "./styles/Style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import bgImageMain from "./assets/Images/bg-l.jpg";

axios.defaults.baseURL = "http://localhost:8000";

function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImageMain})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <BrowserRouter>
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
