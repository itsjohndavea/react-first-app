import "./App.css";
import InGame from "./components/InGame";
import StartPage from "./components/StartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Won from "./components/Won";
import Defeat from "./components/Defeat";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />}></Route>
          <Route path="/ingame" element={<InGame />}></Route>
          <Route path="/won" element={<Won />}></Route>
          <Route path="/defeat" element={<Defeat />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
