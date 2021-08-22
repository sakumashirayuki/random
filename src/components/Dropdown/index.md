---
nav:
  title: Components
  path: /components
---

## Dropdown

基础用法

```tsx
import React from 'react';
import { Dropdown } from 'random';

const { Item } = Dropdown;

export default () => (
  <>
    <Dropdown>
      <Item href="#">Item1</Item>
      <Item>Item2</Item>
      <Item>Item3</Item>
      <Item>Item4</Item>
    </Dropdown>
  </>
);
```

无分界线

```tsx
import React from 'react';
import { Dropdown } from 'random';

const { Item } = Dropdown;

export default () => (
  <>
    <Dropdown noDivider>
      <Item href="#">Item1</Item>
      <Item>Item2</Item>
      <Item>Item3</Item>
      <Item>Item4</Item>
    </Dropdown>
  </>
);
```

## API

### Dropdown

| 属性      | 说明           | 类型    | 默认值 |
| --------- | -------------- | ------- | ------ |
| noDivider | 是否包含分界线 | boolean | true   |

### Dropdown.Item

| 属性      | 说明           | 类型        | 默认值 |
| --------- | -------------- | ----------- | ------ |
| noDivider | 是否包含分界线 | boolean     | true   |
| href      | 链接           | string      | -      |
| onClick   | 点击回调       | (e) => void | -      |
