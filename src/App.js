import "./App.css";
import Router from "./Router/Router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { MyThemeProvider } from "./Context/ThemeContext";




function App() {

  return (
    <div className="App">
    
    <MyThemeProvider>
      <Router />
      </MyThemeProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={2}
      />
    </div>
  );
}

export default App;
