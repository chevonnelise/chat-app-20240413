import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Chat from "@/components/chat";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
