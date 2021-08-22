import classNames from 'classnames';
import React, {
  HTMLAttributes,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';

const classPrefix = 'random-dropdown-item';

interface BaseDropdownItemProps {
  noDivider?: boolean;
}

type NativeDropdownProps = BaseDropdownItemProps &
  ButtonHTMLAttributes<HTMLElement>;

type AnchorDropdownProps = BaseDropdownItemProps &
  AnchorHTMLAttributes<HTMLElement>;

export type DropdownItemProps = Partial<
  NativeDropdownProps & AnchorDropdownProps
>;

const Item: React.FC<DropdownItemProps> = (props) => {
  const { noDivider, children, href, onClick } = props;

  return (
    <>
      <div
        onClick={onClick}
        className={classNames(classPrefix, {
          [`${classPrefix}-no-border`]: noDivider,
          [`${classPrefix}-linked`]: href || onClick,
        })}
      >
        {href ? (
          <a href={href} className={classNames(`${classPrefix}-href`)}>
            {children}
          </a>
        ) : (
          children
        )}
      </div>
    </>
  );
};

export default Item;
