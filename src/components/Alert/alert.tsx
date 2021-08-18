import React, { CSSProperties, MouseEvent, FC, useState } from 'react';
import classnames from 'classnames';
// import propTypes from "prop-types";
import CSSMotion from 'rc-motion';

// icon 图标
import {
  success_icon,
  info_icon,
  error_icon,
  warning_icon,
  success_description_icon,
  info_description_icon,
  error_description_icon,
  warning_description_icon,
  close_icon,
} from './icons';

type alertType = 'success' | 'info' | 'warning' | 'error';
type sizeType = 'lg' | 'default' | 'sm';

interface baseAlertProps {
  //  类型
  type?: alertType;
  //  大小
  size?: sizeType;
  // 消息主体
  message: string;
  // 辅助文本
  description?: string;
  // 是否开启关闭按钮
  closable?: boolean;
  // 自定义关闭图标
  closeText?: React.ReactNode | string;
  // 是否开启图标ico
  showIcon?: boolean;
  // 自定义关闭图标
  icon?: React.ReactNode;
  // alert关闭时回调
  onClose?: (e: MouseEvent) => void;

  style?: CSSProperties;
  className?: string;
}

type alertProps = Partial<baseAlertProps>;

function getIcon(type: string | undefined, isDescription: string | undefined) {
  if (isDescription) {
    switch (type) {
      case 'info':
        return info_icon;
      case 'error':
        return error_icon;
      case 'warning':
        return warning_icon;
      default:
        return success_icon;
    }
  } else {
    switch (type) {
      case 'info':
        return info_description_icon;
      case 'error':
        return error_description_icon;
      case 'warning':
        return warning_description_icon;
      default:
        return success_description_icon;
    }
  }
}

// 类名前缀
const classPrefix = 'random-alert';

const Alert: FC<alertProps> = (props) => {
  const {
    type,
    size,
    message,
    description,
    closable,
    closeText,
    showIcon,
    icon,
    onClose,
    style,
    className,
    ...restProps
  } = props;

  // const alertRef = useRef(null);

  // 合并类名
  const classes = classnames(`${classPrefix}`, className, {
    [`${classPrefix}-${type}`]: type,
    [`${classPrefix}-${size}`]: size,
    [`${classPrefix}-showIcon`]: showIcon,
    [`${classPrefix}-showClose`]: closable,
  });

  const [closed, setClosed] = useState(false);

  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    setClosed(true);
    console.log(closed);
    onClose?.(e);
  };

  return (
    <CSSMotion
      visible={!closed}
      motionName={`${classPrefix}-motion`}
      motionAppear={false}
      motionEnter={false}
      onLeaveStart={(node) => ({
        height: node.offsetHeight,
        opacity: 1,
      })}
    >
      {({ className: motionClassName, style: motionStyle }) => (
        <div
          // ref={alertRef}
          {...restProps}
          style={{ ...style, ...motionStyle }}
          className={classnames(classes, motionClassName)}
        >
          {showIcon ? (
            <span className={classnames(`${classPrefix}-icon`)}>
              <span>{icon ? icon : getIcon(type, description)}</span>
            </span>
          ) : (
            ''
          )}
          <div className={classnames(`${classPrefix}-content`)}>
            {message ? (
              <div className={classnames(`${classPrefix}-message`)}>
                {message}
              </div>
            ) : (
              ''
            )}
            {description ? (
              <div className={classnames(`${classPrefix}-description`)}>
                {description}
              </div>
            ) : (
              ''
            )}
          </div>
          {closable ? (
            <span className={classnames(`${classPrefix}-close`)}>
              <button onClick={handleClose}>{closeText}</button>
            </span>
          ) : (
            ''
          )}
        </div>
      )}
    </CSSMotion>
  );
};

Alert.defaultProps = {
  size: 'default',
  type: 'success',
  showIcon: false,
  closable: false,
  closeText: close_icon,
};

export default Alert;
