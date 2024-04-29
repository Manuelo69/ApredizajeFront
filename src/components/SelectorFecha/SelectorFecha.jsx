const SelectorFecha = () => {
  return (
    <div className="calendario">
      <button className="botonCalendario">
        <img
          src="https://cdn.hugeicons.com/icons/calendar-03-stroke-rounded.svg"
          alt="calendar-03"
        />
      </button>
      <div className="textoCalendario">
        <p className="tituloCalendario">date</p>
        <p className="contenidoCalendario">28 Jan - 29 Jan 2023</p>
      </div>
      <button className="selectorRow">
        <img
          src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg"
          alt="arrow-down-01"
        />
      </button>
    </div>
  );
};

export default SelectorFecha;
