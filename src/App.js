import "./styles.css";
import Navbar from "./Components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import ApiPro from "./routes/ApiPro";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apipro" element={<ApiPro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>

      <Navbar />
    </div>
  );
}
