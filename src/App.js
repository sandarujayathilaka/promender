import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContent from "./pages/content/AppContent";
import Home from "./pages/home/Home"
import Registration from "./pages/register/MainReg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AppContent />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path= "" element={<Home/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

