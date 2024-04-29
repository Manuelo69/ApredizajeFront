/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BarraNavegacion from "./components/BarraNavegacion/BarraNavegacion";
import Buscador from "./components/Buscador/Buscador";

function App() {
  return (
    <>
      <BarraNavegacion />
      <main className="flex h-screen flex-1 w-screen flex-col">
        <div>
          <Buscador />
        </div>
      </main>
    </>
  );
}

export default App;
