import React, { CSSProperties } from 'react';

interface SliderProps {
  style?: CSSProperties;
}

export const Slider = (props: SliderProps) => {
  const { style } = props;
  return <input type="range" style={style} />;
};

export default Slider;
