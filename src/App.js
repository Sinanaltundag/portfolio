// import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import { AppProvider} from "./Context/SessionContext";
// import { ThemeConProvider, useThemeContext } from "./Context/ThemeContext";
import Router from "./Router/Router";

// const darkTheme = createTheme({
//   palette: {
//     mode: 'light',
//   },
// });

function App() {
// const {theme}=useGlobalContext()

  return (
    <div className="App">
    <AppProvider>
    {/* <ThemeProvider theme={theme}> */}
      <Router />
      {/* </ThemeProvider> */}
      </AppProvider>
    </div>
  );
}

export default App;
