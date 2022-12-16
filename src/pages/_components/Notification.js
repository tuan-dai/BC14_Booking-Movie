import { notification } from 'antd';

// eslint-disable-next-line no-undef
export const openNotificationWithIcon = (type, mess) => {
    notification[type]({
      message: mess,
    });
    notification.config({
      duration: 2
    })
  };
