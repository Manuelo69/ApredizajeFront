/* eslint-disable react/prop-types */
const Notificationes = ({ NumNotificaciones }) => {
  return (
    <div className="notificaciones flex flex-row justify-center items-center gap-4">
      <button>
        <img
          src="https://cdn.hugeicons.com/icons/notification-03-stroke-rounded.svg"
          alt="notification-03"
        />
      </button>
      <p className="">Notifications</p>
      <p className="numNotificaciones">{NumNotificaciones}</p>
    </div>
  );
};
export default Notificationes;
