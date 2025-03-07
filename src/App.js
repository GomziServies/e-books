import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import RTP5 from "./pages/rtp-5";

function App() {
  return (
    <div className="text-center font-bold">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rtp-5-book" element={<RTP5 />} />
      </Routes>
    </div>
  );
}

export default App;
