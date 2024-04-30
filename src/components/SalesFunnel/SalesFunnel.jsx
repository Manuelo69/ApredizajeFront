/* eslint-disable react/prop-types */
const SalesFunnel = ({ titulo, subtitulo }) => {
  return (
    <div className="flex flex-col  bg-light-gray  rounded-3xl p-3 w-px-900 h-96">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col items-start">
          <p className="text-text-md">{titulo}</p>
          <p className="text-text-xs">{subtitulo}</p>
        </div>
        <div className="flex flex-row gap-1 h-10">
          <button className="w-20 p-4 bg-white">Monthly</button>
          <button className="p-4 text-text-sm bg-white">
            <img
              src="https://cdn.hugeicons.com/icons/dashboard-square-remove-stroke-rounded.svg"
              alt="dashboard-square-remove"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between w-96">
        <div className="barra b1">
          {}
          <div className="cant">24K</div>
        </div>
        <div className="barra b2">
          <div className="cant">24K</div>
        </div>
        <div className="barra b3">
          <div className="cant">24K</div>
        </div>
        <div className="barra b4">
          <div className="cant">24K</div>
        </div>
        <div className="barra b5">
          <div className="cant">24K</div>
        </div>
        <div className="barra b6">
          <div className="cant">24K</div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
      </div>
    </div>
  );
};

export default SalesFunnel;
