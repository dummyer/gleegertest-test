import "./App.css";
import Header from "./components/header/header";
import React, { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./containers/home/home";

const App = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <div>
      <Header />
      <div className="containers">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default App;
