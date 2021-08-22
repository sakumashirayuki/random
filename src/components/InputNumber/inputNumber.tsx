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
  // addonBefore?: React.ReactNode; // 前面内容
  // addonAfter?: React.ReactNode; // 后面内容
  bordered?: boolean; // 边框
  // addonSubmit?: string; // 设置按钮文本
  // disabled?: boolean; // 是否禁用
  // placeholder?: string; // 辅助文本
  style?: CSSProperties; // 行内样式
  onChange?: (value: number) => void;
  // onPressEnter?: (
  //   // 点击确定/回车确定 回调
  //   value: string,
  //   event?: MouseEvent<HTMLElement> | KeyboardEvent<HTMLInputElement>,
  // ) => void;
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
        />
      </div>
    </div>
  );
};

export default InputNumber;
