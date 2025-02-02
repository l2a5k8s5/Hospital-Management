import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import { Context } from "./main";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./Components/Login";
import AddNewDoctor from "./Components/AddNewDoctor";
import AddNewAdmin from "./Components/AddNewAdmin";
import Messages from "./Components/Messages";
import Doctors from "./Components/Doctors";
import Sidebar from "./Components/Sidebar";


const App = () => {
  const { isAuthenticated, setIsAuthenticated   ,setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/admin/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <Router>
       <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/doctor/addnew" element={<AddNewDoctor/>}/>
        <Route path="/admin/addnew" element={<AddNewAdmin/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;