/* eslint-disable react/prop-types */
const Media = ({ SocialMedia, color1, color2, color3, color4 }) => {
  return (
    <div className="flex flex-row h-16 w-px-860 justify-between items-center gap-2">
      <div className="w-60">{SocialMedia}</div>
      <div className={`h-16 rounded-xl w-60 ${color1}`}></div>
      <div className={`h-16 rounded-xl w-60 ${color2}`}></div>
      <div className={`h-16 rounded-xl w-60 ${color3}`}></div>
      <div className={`h-16 rounded-xl w-60 ${color4}`}></div>
    </div>
  );
};

export default Media;
