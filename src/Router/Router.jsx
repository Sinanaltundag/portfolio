import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminPanel from '../components/Admin/AdminPanel';
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
        <Route path="/AdminPanel" element={<AdminPanel/>} />
       
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </>
  )
}

export default Router