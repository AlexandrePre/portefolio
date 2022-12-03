import GetChrono from "@components/GetChrono";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Transition from "./Transition";

function App() {
  return (
    <div className="App">
      <Router>
        <Transition />
        <GetChrono />
      </Router>
    </div>
  );
}

export default App;
