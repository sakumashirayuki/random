import classNames from 'classnames';
import React, {
  FC,
  CSSProperties,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  useState,
} from 'react';
import IconClose from '../Icon/componets/close';

interface BaseTagProps {
  closable: boolean;
  color: string;
  visible: boolean;
  onClose: (e: any) => void;
  preventDefaultClose: boolean;
  style?: CSSProperties;
  className?: string;
}

const classPrefix = 'random-tag';

type NativeTagProps = BaseTagProps & ButtonHTMLAttributes<HTMLElement>;

type AnchorTagProps = BaseTagProps & AnchorHTMLAttributes<HTMLElement>;

export type TagProps = Partial<NativeTagProps & AnchorTagProps>;

const Tag: FC<TagProps> = (props) => {
  const {
    onClick,
    closable,
    color,
    visible,
    onClose,
    style,
    className,
    preventDefaultClose,
    children,
    ...rest
  } = props;

  const [hidden, setHidden] = useState<boolean>(
    !(visible || visible === undefined),
  );

  const tagClose = (prevent: boolean | undefined) => {
    if (prevent === undefined || !prevent) setHidden(true);
    if (onClose) onClose(children);
  };

  const mainClass = color?.startsWith('#')
    ? classNames(className, `${classPrefix}`)
    : classNames(className, `${classPrefix}`, {
        [`${classPrefix}-${color}`]: color,
      });

  const newStyle = color?.startsWith('#')
    ? { backgroundColor: color, borderColor: color, color: '#fff', ...style }
    : style;
  return (
    <>
      <span hidden={hidden}>
        <div className={mainClass} style={newStyle} {...rest}>
          <span onClick={onClick} className={classNames(`${classPrefix}-span`)}>
            {children}
          </span>
          {closable ? (
            <span
              className={classNames(`${classPrefix}-icon`)}
              onClick={() => tagClose(preventDefaultClose)}
            >
              <IconClose />
            </span>
          ) : (
            ''
          )}
        </div>
      </span>
    </>
  );
};

export default Tag;
