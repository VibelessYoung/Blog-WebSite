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
      {location.pathname === "/" && (
        <h1 className="sm:text-9xl text-6xl font-black text-purple-500 animate-pulse text-center" style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}>
          welcome
        </h1>
      )}
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
