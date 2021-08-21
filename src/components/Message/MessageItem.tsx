import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { baseMessageItem } from './interface';
import CSSMotion from 'rc-motion';

// icon 图标
import { success_icon, info_icon, error_icon, warning_icon } from './icons';

function getIcon(type: string | undefined) {
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
}

// 类名前缀
const classPrefix = 'random-msgItem';

export const MessageItem: FC<baseMessageItem> = (props) => {
  const { title, type, duration, ...restProps } = props;

  // 合并类名
  const classes = classNames(`${classPrefix}`, {
    [`${classPrefix}-${type}`]: type,
  });

  const [closed, setClosed] = useState(false);

  setTimeout(() => {
    setClosed(true);
  }, duration - 500);

  return (
    <div className={classes}>
      <CSSMotion
        visible={!closed}
        motionName={`${classPrefix}-motion`}
        motionAppear={false}
        motionEnter={false}
        removeOnLeave={false}
        onLeaveStart={(node) => ({
          height: node.offsetHeight - 18,
          opacity: 1,
        })}
      >
        {({ className: motionClassName, style: motionStyle }) => (
          <div
            className={classNames(motionClassName)}
            style={{ ...motionStyle }}
          >
            <span className={classNames(`${classPrefix}-icon`)}>
              {getIcon(type)}
            </span>
            <span className={classNames(`${classPrefix}-title`)}>{title}</span>
          </div>
        )}
      </CSSMotion>
    </div>
  );
};

MessageItem.defaultProps = {
  type: 'info',
  duration: 3000,
};

export default MessageItem;
