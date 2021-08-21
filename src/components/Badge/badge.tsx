import * as React from 'react';
import { useMemo, useRef } from 'react';
import classNames from 'classnames';

// 类名前缀
const classPrefix = 'random-badge';

export interface BadgeProps {
  /** Number to show in badge */
  count?: React.ReactNode;
  showZero?: boolean;
  /** Max count to show */
  overflowCount?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Badge: React.ForwardRefRenderFunction<unknown, BadgeProps> = ({
  children,
  count = null,
  overflowCount = 99,
  showZero = false,
  className,
  ...restProps
}) => {
  const prefixCls = classPrefix;

  return (
    <div {...restProps} className={classNames(prefixCls, className)}>
      {children}
      {showZero && count === 0 ? null : (
        <span className={`${prefixCls}-count`}>{count}</span>
      )}
    </div>
  );
};

export default Badge;
