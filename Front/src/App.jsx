import Home from "./components/Home";
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
      <Routes>
        <Route path="/" element={""}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
