import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
type blur_function = {
  (): void;
};
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
