import axios from "axios";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Blogs from "./components/pages/Blogs";
import BlogsDetail from "./components/pages/BlogsDetail";
import AuthCheck from "./components/AuthCheck";
import Protected from "./components/Protected";

import "./styles/Style.css";
import bgImageMain from "./assets/Images/bg-l.jpg";
import MyBlogs from "./components/pages/MyBlogs";
import Update from "./components/pages/Update";
import Search from "./components/pages/Search";
import Page404 from "./components/pages/Page404";

// Axios Configuration
axios.defaults.baseURL = "http://localhost:8000";

// Main Layout Component
function AppContent() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Global Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-sm"
        style={{ backgroundImage: `url(${bgImageMain})` }}
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-purple-950/85 to-indigo-950/95" />

      {/* Decorative Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl" />

      {/* Home Hero Welcome Text */}
      {location.pathname === "/" && (
        <div className="absolute inset-0 z-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.35)] animate-pulse">
                Welcome
              </span>
            </h1>

            <p className="mt-4 text-gray-300 text-sm sm:text-base lg:text-lg font-medium tracking-wide">
             وبسایت انشتار مقاله ، بلاگ و پست
            </p>

            <div className="mt-6 h-1 w-40 mx-auto rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>
        </div>
      )}

      {/* Main Application Layer */}
      <div className="relative z-10">
        <Navbar />

        {/* Page Content */}
        <main className="pt-28">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<div />} />

            {/* Auth Pages */}
            <Route element={<AuthCheck />}>
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
            </Route>

            {/* Blog Pages */}
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/BlogDetail/:id" element={<BlogsDetail />} />
            <Route element={<Protected />}>
              <Route path="/Create" element={<Create />} />
              <Route path="/blog/MyBlogs" element={<MyBlogs />} />
              <Route path="/blog/UpdateBlog/:id" element={<Update />} />
            </Route>
            <Route path="/Search" element={<Search />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

// Root App Component
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
