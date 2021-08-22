import React, { createRef, CSSProperties } from 'react';
import classNames from 'classnames';

interface TooltipProps {
  value: number;
  visible: boolean;
}

export const Tooltip = (props: TooltipProps) => {
  const { value, visible } = props;
  const classPrefix = 'tooltip';
  const tooltipClassNames = classNames(`${classPrefix}`, {
    [`${classPrefix}-visible`]: visible,
  });
  return (
    <div className={tooltipClassNames}>
      <span>{value}</span>
    </div>
  );
};
