import React from "react";
import { Alert } from "antd";
import './index.less';

/** Method to show the content about different types of message */
const AlertTimer: React.FC<any> = (props) => {
  const { message = 'message here', type = 'warning', showIcon = true, closable = true, className = 'content1' } = props;

  return (
    <>
      <Alert
        message={message}
        type={type}
        showIcon={showIcon}
        closable={closable}
        className={className}
      />
    </>
  );
};
export default AlertTimer;