import React, { FC, HTMLAttributes, CSSProperties } from 'react';
import classNames from 'classnames';

import TabsPane, { TabsPaneProps } from './tabsPane';

type TabsSize = 'lg' | 'sm';
type TabAlign = 'right' | 'center' | 'left';

const tabsNodeFilter = (children: any) => {
  return React.Children.map(
    children,
    (e: React.ReactElement<TabsPaneProps>) => {
      if (e.key && e.props?.tab) {
        return e;
      }
    },
  ).filter((res) => res != undefined);
};

interface BaseTabsProps {
  size?: TabsSize;
  defaultKey: string;
  tabAlign?: TabAlign;
  className?: string;
  style?: CSSProperties;
}

export type TabsProps = Partial<BaseTabsProps & HTMLAttributes<HTMLElement>>;

interface TabsState {
  activeKey: string;
}

const classPrefix = 'random-tabs';

export class Tabs extends React.Component<TabsProps, TabsState> {
  static TabsPane: typeof TabsPane;

  constructor(props: TabsProps) {
    super(props);
    const keyList = tabsNodeFilter(this.props.children).map(
      (e) => e.key as string,
    );
    console.log(keyList);
    const dKey = '.$' + (props.defaultKey ? props.defaultKey : '');
    this.state = {
      activeKey:
        keyList.indexOf(dKey) === -1
          ? (tabsNodeFilter(this.props.children)[0].key as string)
          : dKey,
    };
  }

  render() {
    return (
      <>
        <div
          className={classNames(`${classPrefix}`, this.props.className)}
          style={this.props.style}
        >
          <div
            className={classNames(
              `${classPrefix}`,
              `${classPrefix}-${'menu'}`,
              {
                [`${classPrefix}-menu-${this.props.tabAlign}`]:
                  this.props.tabAlign,
              },
            )}
          >
            {tabsNodeFilter(this.props.children).map((e) => (
              <div
                className={classNames(
                  `${classPrefix}`,
                  `${classPrefix}-menu-item`,
                  (e.key as string) === this.state.activeKey ? `active` : ``,
                  {
                    [`${classPrefix}-menu-item-${this.props.size}`]:
                      this.props.size,
                  },
                )}
              >
                <a
                  onClick={() => this.setState({ activeKey: e.key as string })}
                >
                  {e.props.tab}
                </a>
              </div>
            ))}
          </div>
          <div
            className={classNames(
              `${classPrefix}`,
              `${classPrefix}-${'card'}`,
              { [`${classPrefix}-card-${this.props.size}`]: this.props.size },
            )}
          >
            {React.Children.map(tabsNodeFilter(this.props.children), (e) => (
              <div hidden={(e.key as string) !== this.state.activeKey}>{e}</div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

Tabs.TabsPane = TabsPane;

export default Tabs;
