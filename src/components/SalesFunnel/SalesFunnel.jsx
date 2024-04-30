const SalesFunnel = () => {
  return (
    <div className="caja caja2">
      <div className="parrafoAlto parrafo2">
        <div className="textoIzquierdo">
          <p style="font-size: var(--text-md)">Sales Funnel</p>
          <p style="font-size: var(--text-xs)">Total view per month</p>
        </div>
        <div className="centrar">
          <button className="mes">Monthly</button>
          <button>
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
