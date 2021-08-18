import classNames from 'classnames';
import React, { FC, CSSProperties, HTMLAttributes, useState } from 'react';

export interface TimelineItemProps {
  title: string;
  description: string;
  color: string;
}

const Item: React.FC<TimelineItemProps> = (props) => {
  const { title, description, color } = props;

  return (
    <>
      <div>title:{title}</div>
      <div>description:{description}</div>
    </>
  );
};

export default Item;
