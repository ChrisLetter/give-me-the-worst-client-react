import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <div className="App">
      <h1>I am the APP</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/saved" element={<Saved />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
