import React, { createRef, FC, ReactNode, useEffect } from 'react';

export interface AffixProps {
  offset?: number;
  classNames?: string;
  children: ReactNode;
}

export const Affix: FC<AffixProps> = (props) => {
  const { offset, classNames, children } = props;
  const oldStyles: {
    position: string;
    top: string;
    bottom: string;
    width: string;
  } = {
    position: 'static',
    top: '',
    bottom: '',
    width: '',
  };
  const element = createRef<HTMLDivElement>();

  const checkPosition = (
    distanceToTop: number | undefined,
    distanceToBottom: number | undefined,
    width: number | undefined,
  ) => {
    if (
      typeof distanceToTop === 'undefined' ||
      typeof distanceToBottom === 'undefined' ||
      typeof width === 'undefined'
    )
      return;
    const scrollTop = window.scrollY;
    if (offset !== undefined) {
      if (distanceToTop - scrollTop < offset) {
        if (element.current && element.current.style.position !== 'fixed') {
          oldStyles.position = element.current.style.position;
          oldStyles.top = element.current.style.top;
          oldStyles.bottom = element.current.style.bottom;
          oldStyles.width = element.current.style.width;

          element.current.style.position = 'fixed';
          element.current.style.top = offset + 'px';
          element.current.style.width = width + 'px';
        }
      } else {
        // reset style
        if (element.current) {
          element.current.style.position = oldStyles.position;
          element.current.style.top = oldStyles.top;
          element.current.style.bottom = oldStyles.bottom;
          element.current.style.width = oldStyles.width;
        }
      }
    }
  };

  useEffect(() => {
    if (typeof window.scrollY === 'undefined')
      // don't work in ie
      return;
    // element.current.getBoundingClientRect().top is the viewport distance
    const distanceToTop = element.current
      ? window.scrollY + element.current.getBoundingClientRect().top
      : undefined;

    const handleScrollAndResize = () => {
      const distanceToBottom = element.current
        ? window.innerHeight - element.current.getBoundingClientRect().bottom
        : undefined;
      checkPosition(
        distanceToTop,
        distanceToBottom,
        element.current?.clientWidth || undefined,
      );
    };

    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);
    return () => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
    };
  });
  return (
    <div className={classNames} ref={element}>
      {children}
    </div>
  );
};

export default Affix;
