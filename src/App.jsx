import React from "react";
import { Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

import Header from "./components/UI/Header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  const NotFoundBlock = () => {
    return (
      <div>
        <h2>404ERROR</h2>
        <Link to="/"><button className="back">BaCK</button></Link>
      </div>
    );
  };
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFoundBlock />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
