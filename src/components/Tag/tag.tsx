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
  style?: CSSProperties;
  className?: string;
}

const classPrefix = 'random-tag';

type NativeTagProps = BaseTagProps & ButtonHTMLAttributes<HTMLElement>;

type AnchorTagProps = BaseTagProps & AnchorHTMLAttributes<HTMLElement>;

export type TagProps = Partial<NativeTagProps & AnchorTagProps>;

const Tag: FC<TagProps> = (props) => {
  const {
    closable,
    color,
    visible,
    onClose,
    style,
    className,
    children,
    ...rest
  } = props;
  const [hidden, setHidden] = useState<boolean>(
    !(visible || visible === undefined),
  );
  const tagClose = () => {
    setHidden(true);
    if (onClose) onClose(children);
  };
  return (
    <>
      <span hidden={hidden}>
        <div
          className={classNames(className, `${classPrefix}`, {
            [`${classPrefix}-${color}`]: color,
          })}
          style={style}
          {...rest}
        >
          <span className={classNames(`${classPrefix}-span`)}>{children}</span>
          {closable ? (
            <span
              className={classNames(`${classPrefix}-icon`)}
              onClick={tagClose}
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
