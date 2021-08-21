import React, {
  CSSProperties,
  MouseEvent,
  ButtonHTMLAttributes,
  FC,
  useState,
} from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import RcSwitch, { SwitchChangeEventHandler } from ' ';

type sizeType = 'default' | 'sm';

interface baseSwitchtProps {
  //  大小
  size?: sizeType;
  // 选中状态
  checked?: boolean;
  // 开启时辅助文本
  checkedChildren?: React.ReactNode | string;
  // 关闭时辅助文本
  unCheckedChildren?: React.ReactNode | string;
  // 是否禁用
  disabled?: boolean;
  // alert关闭时回调
  onChange?: SwitchChangeEventHandler;
  // onChange?: (checked: boolean, event: MouseEvent) => void;

  style?: CSSProperties;
  className?: string;
}

type switchProps = Partial<baseSwitchtProps>;

// 类名前缀
const classPrefix = 'random-switch';

const Switch: FC<switchProps> = (props) => {
  const { size, checked, disabled, onChange, style, className, ...restProps } =
    props;

  // 合并类名
  const classes = classnames(`${classPrefix}`, className, {
    [`${classPrefix}-${size}`]: size,
  });

  const [rcChecked, setRcChecked] = React.useState(checked);

  const handleChange: SwitchChangeEventHandler = (
    checked: boolean,
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    setRcChecked(!rcChecked);
    if (onChange && event) {
      onChange(checked, event);
    }
  };

  return (
    <div>
      <RcSwitch
        {...restProps}
        style={style}
        checked={rcChecked}
        prefixCls={`${classPrefix}-rc`}
        className={classes}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
};

Switch.defaultProps = {
  size: 'default',
  disabled: false,
  checked: false,
};
Switch.propTypes = {
  disabled: propTypes.bool,
  checked: propTypes.bool,
};

export default Switch;
