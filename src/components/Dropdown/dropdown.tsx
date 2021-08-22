import React from 'react';
import Button from '../Button/button';
import Item from './item';
import classNames from 'classnames';
import { DropdownItemProps } from './item';

const classPrefix = 'random-dropdown';

export interface DropdownProps {
  noDivider?: boolean;
}

interface DropdownState {
  noDivider: boolean;
}

const dropdownNodeFilter = (children: any, noDivider: boolean) => {
  let ret = React.Children.map(
    children,
    (e: React.ReactElement<DropdownItemProps>) => {
      if (e.props) {
        return e;
      }
    },
  )?.filter((res) => res != undefined);
  if (noDivider) ret = ret.map((e) => <Item {...e.props} noDivider></Item>);
  if (ret)
    ret[ret.length - 1] = (
      <Item {...ret[ret.length - 1].props} noDivider></Item>
    );
  return ret;
};

class Dropdown extends React.Component<DropdownProps, DropdownState> {
  static Item: typeof Item;

  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      noDivider: this.props.noDivider ? true : false,
    };
  }

  render() {
    return (
      <>
        <div className={classPrefix}>
          <Button>Dropdown</Button>
          <div className={classNames(`${classPrefix}-box`)}>
            {dropdownNodeFilter(this.props.children, this.state.noDivider)}
          </div>
        </div>
      </>
    );
  }
}

Dropdown.Item = Item;

export default Dropdown;
