import { Routes, Route } from "react-router-dom";
import Docs from "./components/Docs";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="docs" element={<Docs />} />
      </Routes>
    </div>
  );
}

export default App;
