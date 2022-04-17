import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "../pages/Admin/AdminPanel";
import SignIn from "../pages/Admin/SignIn";
import ClassNotes from "../components/ClassNotes/ClassNotes";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Page404 from "../helpers/Page404";
import PrivateRouter from "./PrivateRouter";
import SignUp from "../pages/Admin/SignUp";

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Class%20Notes" element={<ClassNotes />} />
{/*! signin sayfasına login yapan girmemeli */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/AdminPanel" element={<PrivateRouter />}>
          <Route path="" element={<AdminPanel />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default Router;
