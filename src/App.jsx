import GetChrono from "@components/GetChrono";
import Mobile from "@components/mobile";
import Startchrono from "@components/StartChrono";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Transition from "./Transition";

function App() {
  return (
    <div className="App">
      <Router>
        <Transition />
        <GetChrono />
        <Startchrono />
        <Mobile />
      </Router>
    </div>
  );
}

export default App;
