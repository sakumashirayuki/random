import classNames from 'classnames';
import React, { CSSProperties } from 'react';

interface SliderProps {
  style?: CSSProperties;
  className: string;
}

// 类名前缀
const classPrefix = 'random-slider';

export const Slider = (props: SliderProps) => {
  const { style, className } = props;
  // 合并类名
  const classes = classNames(`${classPrefix}`, className);
  return <input type="range" style={style} className={classes} />;
};

export default Slider;
