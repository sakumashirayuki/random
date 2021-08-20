import classNames from 'classnames';
import React, { createRef, FC, useEffect, useState } from 'react';
import {
  lengthToValue,
  percentToString,
  stepConvert,
  valueToLength,
} from './utils';

interface SliderProps {
  className: string;
  step: number;
  value: number;
  onChange?: (value: number) => void;
  min: number;
  max: number;
}

// 类名前缀
const classPrefix = 'random-slider';

export const Slider: FC<SliderProps> = (props: SliderProps) => {
  const {
    className,
    step = 1,
    value = 50,
    onChange,
    min = 0,
    max = 100,
  } = props;
  const rail = createRef<HTMLDivElement>();
  const [railRect, setRailRect] = useState({
    width: 0,
    left: 0,
  });
  const [trackValue, setTrackValue] = useState(value);
  const [trackLength, setTrackLength] = useState(
    valueToLength(value, min, max, step),
  );

  const onMouseDown = () => {
    window.addEventListener('mousemove', onChangeLength);
    window.addEventListener('mouseup', onMouseUp);
  };

  const onChangeLength = (e: any) => {
    const mouseX = e.clientX; // mouse position
    if (
      railRect.width &&
      mouseX >= railRect.left &&
      mouseX <= railRect.width + railRect.left
    ) {
      const currentLength = ((mouseX - railRect.left) / railRect.width) * 100;
      setTrackLength(currentLength);
      setTrackValue(stepConvert(lengthToValue(currentLength, min, max), step));
    }
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onChangeLength);
    window.removeEventListener('mouseup', onMouseUp);
  };

  useEffect(() => {
    setRailRect({
      width: rail.current?.getBoundingClientRect().width || 0,
      left: rail.current?.getBoundingClientRect().left || 0,
    });
  }, []);

  useEffect(() => {
    if (onChange) {
      onChange(trackValue);
    }
  }, [trackValue]);

  // 合并类名
  const classes = classNames(`${classPrefix}`, className);

  return (
    <div className={classes} onClick={onChangeLength}>
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
