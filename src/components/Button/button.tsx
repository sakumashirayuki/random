import React, {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  FC,
  CSSProperties,
} from 'react';
import classNames from 'classnames';
// 枚举类型常用于固定范围的常量
// 按钮大小
type ButtonSize = 'lg' | 'sm';

// 按钮类型
type ButtonType = 'primary' | 'default' | 'danger' | 'link';

// 参数接口
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  href?: string;
  style?: CSSProperties;
}

// 获取 Button 属性
// & 交叉类型，将多个类型合并成一个类型
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;

// 获取 a 的属性
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

// Partial 将所有属性设为可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

// 类名前缀
const classPrefix = 'random-btn';

export const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    style,
    ...restProps
  } = props;

  // 合并类名
  const classes = classNames(`${classPrefix}`, className, {
    [`${classPrefix}-${btnType}`]: btnType,
    [`${classPrefix}-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps} style={style}>
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        style={style}
        {...restProps}
      >
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;
