import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CropperTool from "./components/CropperTool"; // create this next

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/crop" element={<CropperTool />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
