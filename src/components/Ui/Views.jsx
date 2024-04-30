const views = ({ cantidad, altura }) => {
  const containerStyle = {
    height: altura || 0,
  };
  return (
    <div className="flex flex-col w-32 items-center gap-1">
      {cantidad ? (
        <div className="bg-dark-gray p-2 w-20 rounded-full">{cantidad}</div>
      ) : (
        ""
      )}
      <div className="bg-black w-32 rounded-xl" style={containerStyle}></div>
    </div>
  );
};

export default views;
