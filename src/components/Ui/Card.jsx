/* eslint-disable react/prop-types */
const Card = ({ titulo, precio, textoPrecio }) => {
  return (
    <div className="flex flex-col bg-light-gray rounded-3xl p-3 items-start h-64 w-px-600 justify-between">
      <div className="flex flex-row items-center justify-between w-full">
        <p>{titulo}</p>
        <button>
          <img
            src="https://cdn.hugeicons.com/icons/arrow-up-right-01-stroke-rounded.svg"
            alt="arrow-up-right-01"
          />
        </button>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-text-2xl font-bold">{precio}</p>
        <p>
          Payout * <span className="text-dark-gray">{textoPrecio}</span>
        </p>
      </div>
    </div>
  );
};
export default Card;
