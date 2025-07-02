// App.jsx
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CropperTool from "./components/CropperTool";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/crop" element={<CropperTool />} />
    </Routes>
  );
}

export default App;
