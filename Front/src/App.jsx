import Navbar from "./components/Navbar";
import "./styles/Style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={""}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
