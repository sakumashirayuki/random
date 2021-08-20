import React, {
  FC,
  CSSProperties,
  InputHTMLAttributes,
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// 大小类型
export type SizeType = 'default' | 'lg' | 'sm';
// 输入框类型
export type LiteralUnion =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'textarea'
  | 'week';

// 参数接口
export interface baseInputProps {
  className?: string;
  inpSize?: SizeType; // 大小
  type?: LiteralUnion; // 类型
  value?: string; // 内容
  addonBefore?: React.ReactNode; // 前面内容
  addonAfter?: React.ReactNode; // 后面内容
  border?: boolean; // 边框
  maxLength?: number; // 输入框最大字数
  rows?: number; // 文本域的行数
  addonSubmit?: string; // 设置按钮文本
  disabled?: boolean; // 是否禁用
  placeholder?: string; // 辅助文本
  style?: CSSProperties; // 行内样式
  onChange?: (
    // 内容变化监听
    value: string,
    event?: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onPressEnter?: (
    // 点击确定/回车确定 回调
    value: string,
    event?: MouseEvent<HTMLElement> | KeyboardEvent<HTMLInputElement>,
  ) => void;
}

type NativeInputProps = InputHTMLAttributes<HTMLElement> & baseInputProps;

// 类名前缀
const classPrefix = 'random-input';

export type InputProps = Partial<NativeInputProps>;
export const Input: FC<NativeInputProps> = (props) => {
  const {
    type,
    inpSize,
    className,
    disabled,
    border,
    value,
    maxLength,
    rows,
    addonSubmit,
    addonBefore,
    addonAfter,
    placeholder,
    onPressEnter,
    onChange,
    ...restProps
  } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  // 父元素类名
  const parentClasses = classnames(
    `${classPrefix}-wrapper ${classPrefix}-group`,
    className,
    {
      [`${classPrefix}-${inpSize}`]: inpSize,
    },
  );

  // input 类名
  const inpClasses = classnames(`${classPrefix}`, {
    [`${classPrefix}-disabled`]: disabled,
    [`${classPrefix}-border`]: border,
  });

  // addon 类名
  const addonClasses = classnames(`${classPrefix}-addon`);

  // submit 类名
  const submitClasses = classnames({
    [`${classPrefix}-submit`]: true,
    [`${classPrefix}-submit-disabled`]: disabled,
  });

  // 按钮点击回调
  const onSearch = (e: MouseEvent<HTMLElement>) => {
    if (onPressEnter && inputRef.current !== null && !disabled) {
      onPressEnter(inputRef.current.value, e);
    }
  };

  // 点击回车回调
  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      onPressEnter &&
      inputRef.current !== null &&
      e.keyCode === 13 &&
      !disabled
    ) {
      onPressEnter(inputRef.current.value, e);
    }
  };

  // 输入回调
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (
      type === 'textarea' &&
      onChange &&
      textareaRef.current !== null &&
      !disabled
    ) {
      onChange(textareaRef.current.value, e);
    } else if (onChange && inputRef.current !== null) {
      onChange(inputRef.current.value, e);
    }
  };

  // 类型为文本域时
  if (type === 'textarea') {
    return (
      <span className={parentClasses}>
        <textarea
          rows={rows}
          maxLength={maxLength}
          ref={textareaRef}
          {...restProps}
          disabled={disabled}
          onChange={handleChange}
          placeholder={placeholder}
          className={inpClasses}
        ></textarea>
      </span>
    );
  } else {
    // 其他类型时
    return (
      <span {...restProps} className={parentClasses}>
        {/* 前缀标签 */}
        {addonBefore ? <span className={addonClasses}>{addonBefore}</span> : ''}
        {/* 输入框 */}
        <input
          className={inpClasses}
          maxLength={maxLength}
          ref={inputRef}
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyUp={onEnter}
          type={type}
          value={value}
        />
        {/* 后缀标签 */}
        {addonAfter ? <span className={addonClasses}>{addonAfter}</span> : ''}
        {/* 确定按钮 */}
        {addonSubmit ? (
          <span className={submitClasses}>
            <button onClick={onSearch}>{addonSubmit}</button>
          </span>
        ) : (
          ''
        )}
      </span>
    );
  }
};

Input.defaultProps = {
  type: 'text',
  inpSize: 'default',
  border: true,
  disabled: false,
};

Input.propTypes = {
  value: PropTypes.string,
  border: PropTypes.bool,
  maxLength: PropTypes.number,
  rows: PropTypes.number,
  addonSubmit: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
};

export default Input;
