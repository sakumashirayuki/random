import React, { CSSProperties, FC } from 'react';
import classnames from 'classnames';

type sizeType = 'small' | 'default' | 'large';

interface baseSpinProps {
  // 大小
  size?: sizeType;
  // 延迟显示时间
  delay?: Number;
  // 加载中状态
  spinning?: Boolean;
  // 自定义描述文案
  tip?: String;
  // 自定义样式
  style?: CSSProperties;
  className?: String;
}

type spinProps = Partial<baseSpinProps>;

// 类名前缀
const classPrefix = 'random-spin';

const Spin: FC<spinProps> = (props) => {
  const { size, delay, spinning, tip, className } = props;
  let { style } = props;
  // 合并类名
  const classes = classnames(`${classPrefix}`, className, {
    [`${classPrefix}-${size}`]: size,
    [`${classPrefix}-spinning`]: !spinning,
  });
  if (spinning && delay && delay > 0) {
    style = { ...style, transitionDelay: delay + 'ms' };
  }
  return (
    <div className={classes} style={style}>
      <div className={classnames(`${classPrefix}-dot-container`)}>
        <div
          className={classnames(`${classPrefix}-dot ${classPrefix}-dot1`)}
        ></div>
        <div
          className={classnames(`${classPrefix}-dot ${classPrefix}-dot2`)}
        ></div>
        <div
          className={classnames(`${classPrefix}-dot ${classPrefix}-dot3`)}
        ></div>
        <div
          className={classnames(`${classPrefix}-dot ${classPrefix}-dot4`)}
        ></div>
      </div>
      {tip && <div className={classnames(`${classPrefix}-tip`)}>{tip}</div>}
    </div>
  );
};
Spin.defaultProps = {
  size: 'default',
  spinning: true,
  tip: '',
};

export default Spin;
