const Buscador = () => {
  return (
    <form
      action="#"
      className="flex flex-row border-2 border-my-gray rounded-full w-80 justify-between items-center px-2 py-1 "
    >
      <button type="submit">
        <img
          src="https://cdn.hugeicons.com/icons/search-01-stroke-rounded.svg"
          alt="search-01"
        />
      </button>
      <input
        type="text"
        id="buscador"
        placeholder="Search for today analysis"
        className="w-60 bg-transparent border-none focus:outline-none"
      />
    </form>
  );
};

export default Buscador;
