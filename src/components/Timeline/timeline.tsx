import classNames from 'classnames';
import React, { FC, CSSProperties, HTMLAttributes, useState } from 'react';
import Item, { TimelineItemProps } from './item';

const timelineNodeFilter = (children: any) => {
  return React.Children.map(
    children,
    (e: React.ReactElement<TimelineItemProps>) => {
      if (e.props?.title) {
        return e;
      }
    },
  )?.filter((res) => res != undefined);
};

interface BaseTimelineProps {
  style?: CSSProperties;
  className?: string;
}

interface TimelineState {}

const classPrefix = 'random-timeline';

export type TimelineProps = BaseTimelineProps &
  Partial<HTMLAttributes<HTMLElement>>;

class Timeline extends React.Component<TimelineProps, TimelineProps> {
  static Item: typeof Item;

  constructor(props: TimelineProps) {
    super(props);
  }

  render() {
    return (
      <>
        <div>{timelineNodeFilter(this.props.children)}</div>
      </>
    );
  }
}

Timeline.Item = Item;

export default Timeline;
