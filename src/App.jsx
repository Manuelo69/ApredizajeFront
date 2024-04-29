/* eslint-disable no-unused-vars */
import { useState } from "react";
import alonsoLogo from "./assets/alonso.jpg";
import viteLogo from "/vite.svg";
import "./App.css";
import BarraNavegacion from "./components/BarraNavegacion/BarraNavegacion";
import Buscador from "./components/Buscador/Buscador";
import Notificationes from "./components/Notificaciones/Notificaciones";

function App() {
  return (
    <>
      <BarraNavegacion />
      <main className="flex h-screen flex-1 w-screen flex-col">
        <footer className="mt-2 flex flex-row justify-between">
          <Buscador />
          <div className="flex flex-row">
            <Notificationes NumNotificaciones={4} />
            <img src={alonsoLogo} alt="alonso-logo" className="w-16 h-16" />
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
