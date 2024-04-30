/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const views = ({ cantidad, altura }) => {
  const [clicked, setClicked] = useState(false);
  const containerStyle = {
    height: altura || 0,
    backgroundColor: clicked ? "#5ee85b" : "#e2e2e2",
  };

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div
      className="flex flex-col w-32 items-center gap-1"
      onClick={handleClick}
    >
      {clicked ? (
        <div className="bg-dark-gray p-2 w-20 rounded-full">{cantidad}</div>
      ) : (
        ""
      )}
      <div className="w-32 rounded-xl" style={containerStyle}></div>
    </div>
  );
};

export default views;
