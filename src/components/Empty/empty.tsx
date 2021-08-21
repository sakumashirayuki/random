import * as React from 'react';
import classNames from 'classnames';
import DefaultEmptyImg from './default';
import SimpleEmptyImg from './simple';

const defaultEmptyImg = <DefaultEmptyImg />;
const simpleEmptyImg = <SimpleEmptyImg />;

// 类名前缀
const classPrefix = 'random-empty';

export interface TransferLocale {
  description: string;
}

export interface EmptyProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  image?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

interface EmptyType extends React.FC<EmptyProps> {
  PRESENTED_IMAGE_DEFAULT: React.ReactNode;
  PRESENTED_IMAGE_SIMPLE: React.ReactNode;
}

const Empty: EmptyType = ({
  className,
  prefixCls: customizePrefixCls,
  image = defaultEmptyImg,
  description,
  children,
  imageStyle,
  ...restProps
}) => {
  // const { getPrefixCls, direction } = React.useContext(ConfigContext);

  const prefixCls = `${classPrefix}`;
  const des = typeof description !== 'undefined' ? description : '暂无数据';
  const alt = typeof des === 'string' ? des : 'empty';

  let imageNode: React.ReactNode = null;

  if (typeof image === 'string') {
    imageNode = <img alt={alt} src={image} />;
  } else {
    imageNode = image;
  }

  return (
    <div
      className={classNames(
        prefixCls,
        {
          [`${prefixCls}-normal`]: image === simpleEmptyImg,
        },
        className,
      )}
      {...restProps}
    >
      <div className={`${prefixCls}-image`} style={imageStyle}>
        {imageNode}
      </div>
      {des && <div className={`${prefixCls}-description`}>{des}</div>}
      {children && <div className={`${prefixCls}-footer`}>{children}</div>}
    </div>
  );
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;

export default Empty;
