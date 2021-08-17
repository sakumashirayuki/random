import React, { FC, HTMLAttributes, CSSProperties } from 'react';
import classNames from 'classnames';

import TabsPane, { TabsPaneProps } from './tabsPane';

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
  className?: string;
  style?: CSSProperties;
}

export type TabsProps = Partial<BaseTabsProps & HTMLAttributes<HTMLElement>>;

interface TabsState {
  activeKey: string;
}

export class Tabs extends React.Component<TabsProps, TabsState> {
  static TabsPane: typeof TabsPane;

  constructor(props: TabsProps) {
    super(props);
    this.state = {
      activeKey: tabsNodeFilter(this.props.children)[0].key as string,
    };
  }

  render() {
    return (
      <>
        <div>
          {tabsNodeFilter(this.props.children).map((e) => (
            <button
              onClick={() => this.setState({ activeKey: e.key as string })}
            >
              {e.props.tab}
            </button>
          ))}
        </div>
        <div className={this.props.className}>
          {React.Children.map(tabsNodeFilter(this.props.children), (e) => (
            <div hidden={(e.key as string) !== this.state.activeKey}>{e}</div>
          ))}
        </div>
        <button
          onClick={() => console.log(tabsNodeFilter(this.props.children))}
        >
          test
        </button>
      </>
    );
  }
}

Tabs.TabsPane = TabsPane;

export default Tabs;
