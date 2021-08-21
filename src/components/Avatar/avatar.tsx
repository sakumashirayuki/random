import * as React from 'react';
import classNames from 'classnames';
import DefaultAvatarImg from './default';

const defaultAvatarImg = <DefaultAvatarImg />;

// 类名前缀
const classPrefix = 'random-avatar';

const sizeMap = {
  large: 40,
  default: 32,
  small: 24,
};

export interface AvatarProps {
  /** Shape of avatar, options: `circle`, `square` */
  shape?: 'circle' | 'square';
  /*
   * Size of avatar, options: `large`, `small`, `default`
   * or a custom number size
   * */
  size?: 'large' | 'small' | 'default' | number;
  /** Src of image avatar */
  src?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  alt?: string;
}

const InternalAvatar: React.ForwardRefRenderFunction<unknown, AvatarProps> = (
  props,
  ref,
) => {
  const [isImgExist, setIsImgExist] = React.useState(true);

  React.useEffect(() => {
    setIsImgExist(true);
  }, [props.src]);

  const {
    shape,
    size = 'default',
    src,
    className,
    alt,
    children,
    ...others
  } = props;

  const currentSize = typeof size === 'number' ? size : sizeMap[size];
  const responsiveSizeStyle: React.CSSProperties = {
    width: currentSize,
    height: currentSize,
    lineHeight: `${currentSize}px`,
    fontSize: 18,
    borderRadius: shape === 'circle' ? '50%' : 0,
  };

  const prefixCls = classPrefix;

  const hasImageElement = React.isValidElement(src);

  const classString = classNames(
    prefixCls,
    {
      [`${prefixCls}-${shape}`]: !!shape,
      [`${prefixCls}-image`]: hasImageElement || (src && isImgExist),
    },
    className,
  );

  let childrenToRender;
  if (typeof src === 'string' && isImgExist) {
    childrenToRender = <img src={src} alt={alt} />;
  } else {
    childrenToRender = (
      <span className={`${prefixCls}-default`}>
        {children || defaultAvatarImg}
      </span>
    );
  }

  return (
    <span
      {...others}
      style={{ ...responsiveSizeStyle, ...others.style }}
      className={classString}
    >
      {childrenToRender}
    </span>
  );
};

const Avatar = React.forwardRef<unknown, AvatarProps>(InternalAvatar);
Avatar.displayName = 'Avatar';

Avatar.defaultProps = {
  shape: 'circle' as AvatarProps['shape'],
  size: 'default' as AvatarProps['size'],
};

export default Avatar;
