import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

import Header from "./components/UI/Header/Header";
import { Routes, Route } from "react-router-dom";
export const SearchContext = createContext();

const NotFoundBlock = () => {
  return (
    <div>
      <h2>404ERROR</h2>
      <Link to="/"><button className="back">BaCK</button></Link>
    </div>
  );
};

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
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
      </SearchContext.Provider>    
    </div>
  );
}

export default App;
