import classnames from 'classnames';
import React, {
  ChangeEvent,
  CSSProperties,
  FC,
  useEffect,
  useState,
} from 'react';
// 参数接口
export interface inputNumberProps {
  className?: string;
  value?: number;
  defaultValue?: number;
  size?: 'large' | 'middle' | 'small';
  bordered?: boolean; // 边框
  disabled?: boolean; // 是否禁用
  style?: CSSProperties; // 行内样式
  onChange?: (value: number) => void;
}

// 类名前缀
const classPrefix = 'random-input-number';

export const InputNumber: FC<inputNumberProps> = (props: inputNumberProps) => {
  const {
    className = '',
    value,
    defaultValue = 0,
    onChange,
    bordered = true,
    size = 'middle',
    disabled = false,
  } = props;

  const [inputValue, setInputValue] = useState(
    Number.isNaN(Number(defaultValue)) ? 0 : Number(defaultValue),
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
    if (onChange) {
      onChange(Number(e.target.value));
    }
  };

  const inputClasses = classnames(`${classPrefix}-input`, {
    [`${classPrefix}-input-${size}`]: size,
    [`${classPrefix}-input-disabled`]: disabled,
  });
  const wrapClasses = classnames(`${classPrefix}-wrap`);
  const containerClasses = classnames(`${classPrefix}`, className, {
    [`${classPrefix}-border`]: bordered,
  });

  useEffect(() => {
    if (!Number.isNaN(Number(value))) setInputValue(Number(value));
  }, [value]);

  return (
    <div className={containerClasses}>
      <div className={wrapClasses}>
        <input
          type="number"
          className={inputClasses}
          value={inputValue}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default InputNumber;
