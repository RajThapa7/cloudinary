import "./App.css";
import Upload from "./upload";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./home";
import Intro from "./intro";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Intro />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
