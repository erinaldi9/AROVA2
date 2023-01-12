import React from "react";
import NavBar from "./components/NavBar.jsx";
import Arova from "./components/Arova.jsx";
import "./style.css";

export default function App() {
  return (
    <>
      <NavBar background={"transparent"} />
      <Arova title="Modista de Alta Costura" />
    </>
  );
}
