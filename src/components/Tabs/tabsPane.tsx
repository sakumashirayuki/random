import React, { FC, HTMLAttributes, CSSProperties } from 'react';

interface BaseTabsPaneProps {
  key: string;
  tab: string;
  className?: string;
  style?: CSSProperties;
}

export type TabsPaneProps = BaseTabsPaneProps & HTMLAttributes<HTMLElement>;

export const TabsPane: FC<TabsPaneProps> = (props) => {
  const { className, style, children, ...restProps } = props;

  return (
    <>
      <div className={className} style={style} {...restProps}>
        {children}
      </div>
    </>
  );
};

export default TabsPane;
