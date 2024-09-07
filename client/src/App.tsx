import FileInput from "./pages/FileInput";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dash" element={<FileInput />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
