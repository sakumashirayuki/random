import classNames from 'classnames';
import React, { FC, CSSProperties, HTMLAttributes, useState } from 'react';

export interface BaseTimelineItemProps {
  title: string;
  withLabel?: boolean;
  label: string;
  color?: string;
  noTail?: boolean;
}

export type TimelineItemProps = BaseTimelineItemProps &
  Partial<HTMLAttributes<HTMLElement>>;

const classPrefix = 'random-timeline';

const Item: React.FC<TimelineItemProps> = (props) => {
  const { title, color, noTail, withLabel, label, children, onClick } = props;

  const colorStyle = {
    borderColor: color
      ? color.startsWith('#')
        ? color
        : undefined
      : undefined,
    cursor: onClick ? 'pointer' : undefined,
  };

  return (
    <>
      <div className={classNames(`${classPrefix}`)}>
        <div
          onClick={onClick}
          style={colorStyle}
          className={classNames(`${classPrefix}-box`, {
            [`${classPrefix}-${color}`]: color,
            [`${classPrefix}-box-center`]: withLabel,
          })}
        ></div>
        {noTail ? (
          ''
        ) : (
          <div
            className={classNames(`${classPrefix}-tail`, {
              [`${classPrefix}-tail-center`]: withLabel,
            })}
          ></div>
        )}
        {withLabel ? (
          <div
            className={classNames(`${classPrefix}-content`, {
              [`${classPrefix}-content-left`]: withLabel,
            })}
          >
            <div className={classNames(`${classPrefix}-label`)}>{label}</div>
          </div>
        ) : (
          ''
        )}

        <div
          className={classNames(`${classPrefix}-content`, {
            [`${classPrefix}-content-right`]: withLabel,
          })}
        >
          <div className={classNames(`${classPrefix}-title`)}>{title}</div>
          <div className={classNames(`${classPrefix}-description`)}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
