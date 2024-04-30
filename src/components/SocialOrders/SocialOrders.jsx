import Media from "../Ui/Media";

/* eslint-disable react/prop-types */
const SocialOrders = ({ titulo, subtitulo }) => {
  return (
    <div className="flex flex-col  bg-light-gray  rounded-3xl p-3 w-px-900 max-h-96">
      <div className="flex flex-row justify-between items-center h-28">
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
      <div className="flex flex-col justify-around w-full gap-3 h-96 items-end ">
        <Media
          SocialMedia={"Facebook"}
          color1={"bg-gray-400"}
          color2={"bg-gray-400"}
          color3={"bg-main-green"}
          color4={"bg-gray-400"}
        />
        <Media
          SocialMedia={"Instagram"}
          color1={"bg-gray-400"}
          color2={"bg-main-green"}
          color3={"bg-black"}
          color4={"bg-black"}
        />
        <Media
          SocialMedia={"Tiktok"}
          color1={"bg-main-green"}
          color2={"bg-main-green"}
          color3={"bg-dark-gray"}
          color4={"bg-darker-gray"}
        />
        <Media
          SocialMedia={"Whatsapp"}
          color1={"bg-my-gray"}
          color2={"bg-my-gray"}
          color3={"bg-dark-gray"}
          color4={"bg-black"}
        />
      </div>
    </div>
  );
};

export default SocialOrders;
