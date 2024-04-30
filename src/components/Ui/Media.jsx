/* eslint-disable react/prop-types */
const Media = ({ SocialMedia }) => {
  return (
    <div className="flex flex-row h-16 w-px-860 justify-between items-center gap-2">
      <div className="w-60">{SocialMedia}</div>
      <div className="bg-my-gray h-16 rounded-xl w-60"></div>
      <div className="bg-my-gray h-16 rounded-xl w-60"></div>
      <div className="bg-my-gray h-16 rounded-xl w-60"></div>
      <div className="bg-my-gray h-16 rounded-xl w-60"></div>
    </div>
  );
};

export default Media;
