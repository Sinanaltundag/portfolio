import { Routes, Route } from "react-router-dom";
import AdminPanel from "../pages/Admin/AdminPanel";
import SignIn from "../pages/Admin/SignIn";
import ClassNotes from "../pages/ClassNotes/ClassNotes";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import Page404 from "../helpers/Page404";
import PrivateRouter, { AdminRouter } from "./PrivateRouter";
import SignUp from "../pages/Admin/SignUp";
import { Box, ThemeProvider } from "@mui/material";
import { useCustomTheme } from "../Context/ThemeContext";
import { BlogProvider } from "../Context/DataContext";
import Details from "../pages/ClassNotes/ClassNotesComponents/Details";
import Profile from "../pages/Profile/Profile";
import UserInfo from "../pages/Admin/UserInfo";

const Router = () => {
  const { theme } = useCustomTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <BlogProvider>
          <Navbar />
          <Box
            backgroundColor="background.paper"
            style={{ minHeight: "100vh" }}
          >
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Main" element={<Main />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="details" element={<Details />}>
              {/* for shared link */}
                <Route path=":topic/:blogid" element={<Details />} />
              </Route>
              <Route path="/Class%20Notes" element={<ClassNotes />} />
              <Route path="/UserInfo" element={<UserInfo />} />
              <Route path="/AdminPanel" element={<AdminRouter />}>
                <Route path="" element={<AdminPanel />} />
              </Route>
              <Route path="/Profile" element={<PrivateRouter />}>
                <Route path="" element={<Profile />} />
              </Route>
              
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Box>
        </BlogProvider>
      </ThemeProvider>
    </>
  );
};

export default Router;
