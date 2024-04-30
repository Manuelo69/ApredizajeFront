const views = ({ cantidad }) => {
  return (
    <div className="flex flex-col h-60 items-center  w-32">
      {cantidad ? (
        <div className="bg-dark-gray p-2 w-20 rounded-full">{cantidad}</div>
      ) : (
        ""
      )}
      <div className="bg-black w-32 h-40 rounded-xl"></div>
    </div>
  );
};

export default views;
