import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppContent from "./pages/content/AppContent";
import Home from "./pages/home/Home"
import TechnicianReg from "./pages/Registration/TechnicianReg";
import MainLogin from "./pages/login/MainLogin";
import MainReg from "./pages/Registration/MainReg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/adminlogin" element={<AppContent />}></Route>
        <Route path="/login" element={<MainLogin />}></Route>
        <Route path="/reg" element={<TechnicianReg />}></Route>
        <Route path="/regmain" element={<MainReg />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

