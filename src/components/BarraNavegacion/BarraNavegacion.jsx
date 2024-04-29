const BarraNavegacion = () => {
  return (
    <nav className="flex w-20 h-screen bg-my-gray m-0 flex-col justify-evenly items-center">
      <div>
        <img
          className="w-12 "
          src="https://cdn-icons-png.flaticon.com/512/651/651590.png"
          alt="configuration-01"
        />
      </div>
      <div>
        <button className="botones">
          <img
            src="https://cdn.hugeicons.com/icons/home-05-stroke-rounded.svg"
            alt="home-05"
          />
        </button>
        <button>
          <img
            src="https://cdn.hugeicons.com/icons/dashboard-circle-stroke-rounded.svg"
            alt="dashboard-circle"
          />
        </button>
        <button>
          <img
            src="https://cdn.hugeicons.com/icons/notification-03-stroke-rounded.svg"
            alt="notification-03"
          />
        </button>
      </div>
      <div>
        <button>
          <img
            src="https://cdn.hugeicons.com/icons/user-stroke-rounded.svg"
            alt="user"
          />
        </button>
        <button>
          <img
            src="https://cdn.hugeicons.com/icons/file-01-stroke-rounded.svg"
            alt="file-01"
          />
        </button>
        <button>
          <img
            src="https://cdn.hugeicons.com/icons/comment-01-stroke-rounded.svg"
            alt="comment-01"
          />
        </button>
        <button>
          <img
            src="https://cdn.hugeicons.com/icons/cancel-circle-stroke-rounded.svg"
            alt="cancel-circle"
          />
        </button>
        <button>
          <img
            src="https://cdn.hugeicons.com/icons/2nd-bracket-circle-stroke-rounded.svg"
            alt="2nd-bracket-circle"
          />
        </button>
      </div>

      <div>
        <button>
          <img
            src="https://cdn.hugeicons.com/icons/bubble-chat-stroke-rounded.svg"
            alt="bubble-chat"
          />
        </button>
        <button>
          <img
            src="https://cdn.hugeicons.com/icons/settings-error-01-stroke-rounded.svg"
            alt="settings-error-01"
          />
        </button>
      </div>
    </nav>
  );
};

export default BarraNavegacion;
