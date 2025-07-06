import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from "./components/Navbar";
//import SearchBar from "./components/SearchBar";
//import SalaryFilter from "./components/SalaryFilter";
//import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
//<Route path="/" element={<LoginPage />} />

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
