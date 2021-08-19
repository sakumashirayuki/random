import classNames from 'classnames';
import React, { createRef, useEffect, useState } from 'react';
import { stepConvert } from './utils';

interface SliderProps {
  className: string;
  step: number;
  value: number;
  onChange?: (value: number) => void;
}

// 类名前缀
const classPrefix = 'random-slider';

export const Slider = (props: SliderProps) => {
  const { className, step = 1, value = 50, onChange } = props;
  const rail = createRef<HTMLDivElement>();
  const [railRect, setRailRect] = useState({
    width: 0,
    left: 0,
  });
  const [trackLength, setTrackLength] = useState(value);

  const onMouseDown = () => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (e: any) => {
    const mouseX = e.clientX; // mouse position
    if (
      railRect.width &&
      mouseX >= railRect.left &&
      mouseX <= railRect.width + railRect.left
    ) {
      setTrackLength(
        stepConvert(((mouseX - railRect.left) / railRect.width) * 100, step),
      );
    }
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const percentToString = (percent: number) => {
    return percent.toFixed(2) + '%';
  };

  useEffect(() => {
    setRailRect({
      width: rail.current?.getBoundingClientRect().width || 0,
      left: rail.current?.getBoundingClientRect().left || 0,
    });
  }, []);

  useEffect(() => {
    if (onChange) {
      onChange(trackLength);
    }
  }, [trackLength]);

  // 合并类名
  const classes = classNames(`${classPrefix}`, className);

  return (
    <div className={classes}>
      <div className={`${classPrefix}-rail`} ref={rail} />
      <div
        className={`${classPrefix}-track`}
        style={{ width: percentToString(trackLength) }}
      />
      <div
        className={`${classPrefix}-handle`}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        style={{ left: percentToString(trackLength) }}
      />
    </div>
  );
};

export default Slider;
