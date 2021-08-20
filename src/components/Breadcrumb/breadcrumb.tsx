import React, {
  FC,
  CSSProperties,
  LiHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';
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
  (e: React.MouseEvent): void;
}

// 参数接口
export interface baseBreadcrumbProps {
  className?: string;
  separator?: React.ReactNode | string; // 分隔符
  lib: breadcrumbItem[]; // 路由数组
  border?: boolean; // 底边框
  style?: CSSProperties;
}

type NativeBreadcrumbProps = baseBreadcrumbProps &
  LiHTMLAttributes<HTMLElement>;
type AnchorBreadcrumbProps = breadcrumbItem & AnchorHTMLAttributes<HTMLElement>;

// Partial 将所有属性设为可选
export type breadcrumbProps = Partial<
  NativeBreadcrumbProps & AnchorBreadcrumbProps
>;

// 类名前缀
const classPrefix = 'random-breadcrumb';

export const Breadcrumb: FC<breadcrumbProps> = (props) => {
  const { className, separator, lib, children, border, style, ...restProps } =
    props;

  // 合并类名
  const classes = classNames(`${classPrefix}`, className, {
    [`${classPrefix}-border`]: border,
  });

  return (
    <div className={classes} style={style} {...restProps}>
      <ul>
        {lib?.map((item: breadcrumbItem, index: number) => {
          const itemClasses = classNames(`${classPrefix}-item`, {
            [`${classPrefix}-item-link`]: item.href,
            [`${classPrefix}-item-disabled`]: item.disabled,
            [`${classPrefix}-item-now`]: index === lib.length - 1,
          });

          return (
            <li key={`${classPrefix}-${index}`} className={itemClasses}>
              {/* 判断给定标签 */}
              {item.href ? (
                <a className={`${classPrefix}-title`} href={item.href}>
                  {item.title}
                </a>
              ) : (
                <span
                  className={`${classPrefix}-title`}
                  onClick={
                    !item.disabled
                      ? (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                          if (item.click) {
                            item.click(e);
                          }
                        }
                      : () => false
                  }
                >
                  {item.title}
                </span>
              )}
              {index !== lib.length - 1 ? (
                <span className={`${classPrefix}-separator`}>{separator}</span>
              ) : (
                ''
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// 设置 props限制
Breadcrumb.defaultProps = {
  separator: '/',
  border: false,
};
Breadcrumb.propTypes = {
  lib: PropTypes.array.isRequired,
  border: PropTypes.bool,
};

export default Breadcrumb;
