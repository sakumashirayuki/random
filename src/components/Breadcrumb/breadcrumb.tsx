import React, { FC, CSSProperties } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// 枚举类型常用于固定范围的常量

// 单个路由类型
type breadcrumbItem = {
  title: string; // 路由名称
  disabled?: boolean; // 是否禁用
  href?: string; // 路由链接
  click?: clickFn; // 点击事件
};

interface clickFn {
  (): void;
}

// 参数接口
export interface baseBreadcrumbProps {
  className?: string;
  separator?: React.Component | string; // 分隔符
  lib: breadcrumbItem[]; // 路由数组
  border?: boolean; // 底边框
  style?: CSSProperties;
}

// Partial 将所有属性设为可选
export type breadcrumbProps = Partial<baseBreadcrumbProps>;

// 类名前缀
const classPrefix = 'random-breadcrumb';

export const Breadcrumb: FC<breadcrumbProps> = (props) => {
  const { className, separator, lib, children, border, style, ...restProps } =
    props;

  // 合并类名
  const classes = classNames(`${classPrefix}`, className, {
    [`${classPrefix}-border`]: border,
  });

  if (lib !== undefined) {
    return (
      <div className={classes} style={style} {...restProps}>
        <ul>
          {lib?.map((item: breadcrumbItem, index: number) => {
            return (
              <li
                key={`${classPrefix}-${index}`}
                className={classNames(`${classPrefix}-item`, {
                  [`${classPrefix}-item-link`]: item.href,
                  [`${classPrefix}-item-disabled`]: item.disabled,
                  [`${classPrefix}-item-now`]: index === lib.length - 1,
                })}
              >
                {item.href ? (
                  <a className={`${classPrefix}-title`} href={item.href}>
                    {item.title}
                  </a>
                ) : (
                  <span
                    className={`${classPrefix}-title`}
                    onClick={!item.disabled ? item.click : () => false}
                  >
                    {item.title}
                  </span>
                )}
                {index !== lib.length - 1 ? (
                  <span className={`${classPrefix}-separator`}>
                    {separator}
                  </span>
                ) : (
                  ''
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    console.error('lib 为必须传的参数!');
    return <></>;
  }
};

// 设置 props限制
Breadcrumb.defaultProps = {
  separator: '/',
  border: false,
};
Breadcrumb.propTypes = {
  lib: PropTypes.array.isRequired,
};

export default Breadcrumb;
