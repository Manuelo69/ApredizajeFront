/* eslint-disable react/prop-types */
const Notificationes = ({ NumNotificaciones }) => {
  return (
    <div className="notificaciones flex flex-row justify-center items-center gap-4 border-2 border-my-gray rounded-full px-2">
      <button>
        <img
          src="https://cdn.hugeicons.com/icons/notification-03-stroke-rounded.svg"
          alt="notification-03"
        />
      </button>
      <p className="">Notifications</p>
      <p className="bg-dark-gray rounded-full py-1 px-2">{NumNotificaciones}</p>
    </div>
  );
};
export default Notificationes;
