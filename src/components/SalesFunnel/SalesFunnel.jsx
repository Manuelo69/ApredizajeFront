/* eslint-disable react/prop-types */
import Views from "../Ui/Views";
const SalesFunnel = ({ titulo, subtitulo }) => {
  return (
    <div className="flex flex-col  bg-light-gray  rounded-3xl p-3 w-px-900 h-96">
      <div className="flex flex-row justify-between items-center h-40">
        <div className="flex flex-col items-start">
          <p className="text-text-md">{titulo}</p>
          <p className="text-text-xs">{subtitulo}</p>
        </div>
        <div className="flex flex-row gap-1 h-10 items-center">
          <button className="w-20 p-4 bg-white">Monthly</button>
          <button className="p-4 text-text-sm bg-white">
            <img
              src="https://cdn.hugeicons.com/icons/dashboard-square-remove-stroke-rounded.svg"
              alt="dashboard-square-remove"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center w-px-800 gap-3 h-80">
        <Views />
        <Views />
        <Views />
        <Views />
        <Views />
        <Views />
      </div>
      <div className="flex flex-row justify-around w-px-800">
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
