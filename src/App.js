import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Companies from "./Pages/CompanyList/CompanyList";
import CompanyDetails from "./Pages/CompanyDetails/ComapnyDetails";
import AddCompany from "./Pages/AddCompany/AddCompany";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register.jsx/Register";
import ForgetPassword from "./Pages/ForgotPassword/ForgotPassword";


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNavbar = ["/", "/login", "/register", "/forget-password"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Sidebar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
        <Route path="/add-company" element={<AddCompany />} />
      </Routes>
    </>
  );
}

export default App;
