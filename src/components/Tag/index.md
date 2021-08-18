---
nav:
  title: Components
  path: /components
---

## Tag

### 基础用法

```tsx
import React from 'react';
import { Tag } from 'random';

const onClose = (e) => {
  console.log('tag closed!');
  console.log(e);
  // callback with children of tag
};

export default () => (
  <>
    <Tag>Basic</Tag>
    <Tag>
      <a href="#">Link</a>
    </Tag>
    <Tag closable>Closable</Tag>
    <Tag closable preventDefaultClose>
      Unclosable
    </Tag>
    <Tag closable preventDefaultClose onClose={onClose}>
      custom onClose
    </Tag>
  </>
);
```

### 不同颜色

```tsx
import React from 'react';
import { Tag } from 'random';

export default () => (
  <>
    <h4>Presets</h4>
    <Tag color="blue">Blue</Tag>
    <Tag color="indigo">Indigo</Tag>
    <Tag color="purple">Purple</Tag>
    <Tag color="pink">Pink</Tag>
    <Tag color="red">Red</Tag>
    <Tag color="orange">Orange</Tag>
    <Tag color="yellow">Yellow</Tag>
    <Tag color="green">Green</Tag>
    <Tag color="teal">Teal</Tag>
    <Tag color="cyan">Cyan</Tag>
    <h4>Custom</h4>
    <Tag color="#f00">#f00</Tag>
    <Tag color="#2db7f5">#2db7f5</Tag>
    <Tag color="#87d068">#87d068</Tag>
    <Tag color="#108ee9">#108ee9</Tag>
  </>
);
```

### 组件显示

控制 visible 接口以使组件隐藏

```tsx
import React from 'react';
import { Tag } from 'random';

export default () => (
  <>
    <h4>Visible and Invisible</h4>
    <Tag visible={true}>Visible</Tag>
    <Tag visible={false}>Invisible</Tag>
  </>
);
```

### 状态预设

提供 success, pending, error, warning 四种状态预设

```tsx
import React from 'react';
import { Tag } from 'random';

export default () => (
  <>
    <h4>Presets</h4>
    <Tag color="success">Success</Tag>
    <Tag color="pending">Pending</Tag>
    <Tag color="error">Error</Tag>
    <Tag color="warning">Warning</Tag>
  </>
);
```

## API

| 属性                | 说明             | 类型        | 默认值 |
| ------------------- | ---------------- | ----------- | ------ |
| closable            | 能否关闭         | boolean     | false  |
| color               | 预设值或颜色     | string      | -      |
| onClose             | 关闭时回调       | (e) => void | -      |
| onClick             | 单击触发的事件   | (e) => void | -      |
| preventDefaultClose | 移除默认关闭事件 | boolean     | false  |
| visible             | 是否可见         | boolean     | true   |
