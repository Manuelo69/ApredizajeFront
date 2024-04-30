/* eslint-disable react/prop-types */
const SalesFunnel = ({ titulo, subtitulo }) => {
  return (
    <div className="flex flex-col  bg-light-gray  rounded-3xl p-3 w-px-900 h-96">
      <div className="flex flex-row justify-between">
        <div className="textoIzquierdo">
          <p>Sales Funnel</p>
          <p>Total view per month</p>
        </div>
        <div className="flex flex-row gap-1 h-10">
          <button className="w-20 p-2">Monthly</button>
          <button className="p-2">
            <img
              src="https://cdn.hugeicons.com/icons/dashboard-square-remove-stroke-rounded.svg"
              alt="dashboard-square-remove"
            />
          </button>
        </div>
      </div>
      <div className="sales">
        <div className="cant">24K</div>
        <div className="barra b1"></div>
        <div className="barra b2"></div>
        <div className="barra b3"></div>
        <div className="barra b4"></div>
        <div className="barra b5"></div>
        <div className="barra b6"></div>
      </div>
      <div className="days">
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