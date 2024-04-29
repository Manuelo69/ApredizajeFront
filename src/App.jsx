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
          <div className="flex flex-row gap-2 mr-3">
            <Notificationes NumNotificaciones={4} />
            <img
              src={alonsoLogo}
              alt="alonso-logo"
              className="w-20 h-20 border-2 border-my-gray rounded-full"
            />
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
