import "./App.css";
import Header from "./components/Header/Header";
import React, { useState } from "react";
import Nav from "./components/NavBar/Nav";
import Result from "./components/Result/Result";
import request from "./components/Result/LoadMovie/request";
function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Result selectedOption={selectedOption} />
    </div>
  );
}

export default App;
