const SelectorFecha = () => {
  return (
    <div className="calendario flex flex-row gap-2 border-2 border-light-gray rounded-full bg-light-gray p-2 items-center">
      <button className="botonCalendario">
        <img
          src="https://cdn.hugeicons.com/icons/calendar-03-stroke-rounded.svg"
          alt="calendar-03"
        />
      </button>
      <div className="textoCalendario">
        <p className="">date</p>
        <p className="">28 Jan - 29 Jan 2023</p>
      </div>
      <button className="selectorRow bg-white">
        <img
          src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg"
          alt="arrow-down-01"
        />
      </button>
    </div>
  );
};

export default SelectorFecha;
