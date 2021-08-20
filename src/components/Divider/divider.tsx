import React, { FC, CSSProperties } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// 枚举类型常用于固定范围的常量
// 分割线样式
type dividerType = 'soild' | 'dashed';

// 文本位置
type textOrientation = 'left' | 'center' | 'right';

// 参数接口
export interface baseDividerProps {
  className?: string;
  plain?: boolean; // 文本是否为正文类型
  orientation?: textOrientation;
  type?: dividerType;
  style?: CSSProperties;
}

// 类名前缀
const classPrefix = 'random-divider';

// Partial 将所有属性设为可选
export type DividerProps = Partial<baseDividerProps>;

export const Divider: FC<DividerProps> = (props) => {
  const { type, className, orientation, children, plain, style, ...restProps } =
    props;

  // 合并类名
  const classes = classNames(`${classPrefix}`, className, {
    [`${classPrefix}-${type}`]: type,
    [`${classPrefix}-plain`]: plain,
    [`${classPrefix}-${orientation}`]: orientation,
    [`${classPrefix}-text`]: true,
  });

  return (
    <div className={classes} style={style} {...restProps}>
      {children && (
        <span className={`${classPrefix}-inner-text`}>{children}</span>
      )}
    </div>
  );
};

Divider.defaultProps = {
  type: 'soild',
  orientation: 'left',
  plain: false,
};

Divider.propTypes = {
  plain: PropTypes.bool,
};

export default Divider;
