import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Pages/UserLogin";
import Home from "./Pages/Home";
import UserSignup from "./Pages/UserSignup";
import Header from "./Components/Header";
import About from "./Pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
