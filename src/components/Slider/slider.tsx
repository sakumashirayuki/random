import classNames from 'classnames';
import React, { createRef, FC, useEffect, useState } from 'react';
import { Tooltip } from './Tooltip';
import {
  lengthToValue,
  percentToString,
  stepConvert,
  valueToLength,
} from './utils';

interface SliderProps {
  className: string;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  tooltipVisible?: boolean;
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
    disabled = false,
    tooltipVisible: showTooltip,
  } = props;
  const rail = createRef<HTMLDivElement>();
  const [railRect, setRailRect] = useState({
    width: 0,
    left: 0,
  });
  const [trackValue, setTrackValue] = useState(value);
  const [trackLength, setTrackLength] = useState(
    valueToLength(value, min, max),
  );
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const onMouseDown = () => {
    window.addEventListener('mousemove', onChangeLength);
    window.addEventListener('mouseup', onMouseUp);
    setTooltipVisible(true);
  };

  const onChangeLength = (e: any) => {
    if (!disabled) {
      const mouseX = e.clientX; // mouse position
      if (
        railRect.width &&
        mouseX >= railRect.left &&
        mouseX <= railRect.width + railRect.left
      ) {
        const currentLength = ((mouseX - railRect.left) / railRect.width) * 100;
        setTrackLength(currentLength);
        setTrackValue(
          stepConvert(lengthToValue(currentLength, min, max), step, min, max),
        );
      }
    }
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onChangeLength);
    window.removeEventListener('mouseup', onMouseUp);
    setTooltipVisible(false);
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

  useEffect(() => {
    setTrackValue(value);
    setTrackLength(valueToLength(value, min, max));
  }, [value]);

  // 合并类名
  const containerClasses = classNames(`${classPrefix}`, className, {
    [`${classPrefix}-disabled`]: disabled,
  });
  const railClasses = classNames(`${classPrefix}-rail`);
  const trackClasses = classNames(`${classPrefix}-track`);
  const handleClasses = classNames(`${classPrefix}-handle`);

  return (
    <div style={{ position: 'relative' }}>
      <div className={containerClasses} onClick={onChangeLength}>
        <div className={railClasses} ref={rail} />
        <div
          className={trackClasses}
          style={{ width: percentToString(trackLength) }}
        />
        <div
          className={handleClasses}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          style={{ left: percentToString(trackLength) }}
        >
          <Tooltip
            value={trackValue}
            visible={
              showTooltip == undefined
                ? tooltipVisible
                : showTooltip
                ? true
                : false
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
