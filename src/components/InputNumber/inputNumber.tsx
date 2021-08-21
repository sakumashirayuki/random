import classnames from 'classnames';
import React, { ChangeEvent, CSSProperties, FC } from 'react';
// 参数接口
export interface inputNumberProps {
  className?: string;
  value?: number;
  // addonBefore?: React.ReactNode; // 前面内容
  // addonAfter?: React.ReactNode; // 后面内容
  bordered?: boolean; // 边框
  // maxLength?: number; // 输入框最大字数
  // rows?: number; // 文本域的行数
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
  const { className = '', value, onChange, bordered = true } = props;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(Number(e.target.value));
    }
  };
  const inputClasses = classnames(`${classPrefix}-input`);
  const wrapClasses = classnames(`${classPrefix}-wrap`);
  const containerClasses = classnames(`${classPrefix}`, className, {
    [`${classPrefix}-border`]: bordered,
  });

  return (
    <div className={containerClasses}>
      <div className={wrapClasses}>
        <input
          type="number"
          className={inputClasses}
          value={Number(value)}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputNumber;
