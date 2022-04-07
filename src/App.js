import "./App.css";
import { AppProvider } from "./Context/SessionContext";
import Router from "./Router/Router";

function App() {
  return (
    <div className="App">
    <AppProvider>
      <Router />
      </AppProvider>
    </div>
  );
}

export default App;
