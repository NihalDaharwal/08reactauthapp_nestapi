import React, { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import { Registerpage } from "./pages/Registerpage";
import "./App.css";
import { Nav2 } from "./components/Nav2";
const App = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:4000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json();
      setName(content.name);
    })();
  }, []); 



  return (
    <>
      {name ? <Nav2 /> : <Nav />}
      {name ? "hi" + "   " + name : "you are not logged  in"}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
      </Routes>
    </>
  );
};

export default App;
