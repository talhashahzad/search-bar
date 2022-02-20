import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-dom";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div className="bg-gray-200 h-screen w-screen">
      <header className="text-lg ">
        <div>
          <SearchBar />
        </div>
      </header>
    </div>
  );
}

export default App;
