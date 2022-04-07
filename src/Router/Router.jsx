import React from 'react'
import { Routes, Route } from "react-router-dom";
import LogOut from '../components/Admin/LogOut';
import SignIn from '../components/Admin/SignIn';
import ClassNotes from '../components/ClassNotes/ClassNotes';
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
import Page404 from '../helpers/Page404';


const Router = () => {
  return (
    <> 
    
    <Navbar/>
        <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Main" element={<Main/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Class%20Notes" element={<ClassNotes/>} />
        
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/Logout" element={<LogOut/>} />
       
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </>
  )
}

export default Router