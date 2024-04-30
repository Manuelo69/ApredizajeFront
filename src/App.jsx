/* eslint-disable no-unused-vars */
import { useState } from "react";
import alonsoLogo from "./assets/alonso.jpg";
import viteLogo from "/vite.svg";
import "./App.css";
import BarraNavegacion from "./components/BarraNavegacion/BarraNavegacion";
import Buscador from "./components/Buscador/Buscador";
import Notificationes from "./components/Notificaciones/Notificaciones";
import SelectorFecha from "./components/SelectorFecha/SelectorFecha";
import Funnal from "./components/Funnal/Funnal";
import Exportar from "./components/Exportar/Exportar";
import Card from "./components/Ui/Card";
import SalesFunnel from "./components/SalesFunnel/SalesFunnel";

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
        <div className="title flex flex-row h-40 items-center justify-between">
          <p className="text-text-xl w-80 font-bold">YOUR SALES ANALYSIS</p>
          <div className="flex flex-row h-20 gap-2">
            <SelectorFecha />
            <Funnal />
            <Exportar />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 h-72">
          <Card
            titulo={"Avaliable to payout"}
            precio={"$16.4K"}
            textoPrecio={"$6 k will avaliable soon"}
          />
          <Card
            titulo={"Avaliable to payout"}
            precio={"$6.4K"}
            textoPrecio={"$6 k will avaliable soon"}
          />
          <Card
            titulo={"Avaliable to payout"}
            precio={"$400"}
            textoPrecio={"6k will avaliable soon"}
          />
        </div>
        <div className="flex flex-row gap-2">
          <SalesFunnel
            titulo={`Sales Funnel`}
            subtitulo={`Total view per month`}
          />
        </div>
      </main>
    </>
  );
}

export default App;
