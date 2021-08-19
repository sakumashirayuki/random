import classNames from 'classnames';
import React, { FC, CSSProperties, HTMLAttributes, useState } from 'react';
import Item, { TimelineItemProps } from './item';

const timelineNodeFilter = (
  children: any,
  contentPosition: 'right' | 'left',
) => {
  let label: boolean = false;
  let ret = React.Children.map(
    children,
    (e: React.ReactElement<TimelineItemProps>) => {
      if (e.props?.label) {
        label = true;
      }
      if (e.props?.title || e.props?.label) {
        return e;
      }
    },
  )?.filter((res) => res != undefined);
  if (label) ret = ret.map((e) => <Item {...e.props} withLabel></Item>);
  if (ret)
    ret[ret.length - 1] = <Item {...ret[ret.length - 1].props} noTail></Item>;
  return ret;
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
        <div style={this.props.style} className={classNames(`${classPrefix}`)}>
          {timelineNodeFilter(this.props.children, 'right')}
        </div>
      </>
    );
  }
}

Timeline.Item = Item;

export default Timeline;
