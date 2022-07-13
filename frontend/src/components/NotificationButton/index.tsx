import notificationIcon from '../../assets/img/notification-icon.svg';

import './styles.css';

const NotificationButton = () => {
  return (
    <div className="dsmeta-red-btn">
      <img src={notificationIcon} alt="Notificar" />
    </div>
  );
};

export default NotificationButton;
