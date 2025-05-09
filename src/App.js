import "./styles/globals.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import WelcomePage from "./components/Welcome/welcomePage";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="main-app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/english" element={<HomePage lang="english" />} />
          <Route path="/spanish" element={<HomePage lang="spanish" />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App;
