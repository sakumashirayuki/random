---
nav:
  title: Components
  path: /components
---

## Spin

### 基本使用

一个简单的 loading 状态。

```tsx
import React from 'react';
import { Spin } from 'random';

export default () => (
  <>
    <Spin />
  </>
);
```

### 各种大小

小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。

```tsx
import React from 'react';
import { Spin } from 'random';

export default () => (
  <div style={{ display: 'flex' }}>
    <Spin size="small" />
    <Spin size="default" />
    <Spin size="large" />
  </div>
);
```

### 自定义描述文案

自定义描述文案。

```tsx
import React from 'react';
import { Spin } from 'random';

export default () => (
  <>
    <Spin tip="Loading..." />
  </>
);
```

### 延迟

延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。

```tsx
import React, { useState } from 'react';
import { Spin, Switch } from 'random';

export default () => {
  const [loading, setLoading] = useState(true);
  function toggle(value) {
    setLoading(value);
  }
  return (
    <>
      <Spin tip="Loading..." spinning={loading} delay={500} />
      <div style={{ marginTop: '15px' }}>
        Loading state：
        <Switch checked={loading} onChange={toggle} />
      </div>
    </>
  );
};
```

## API

| 属性     | 说明                                 | 类型                                     | 默认值    |
| -------- | ------------------------------------ | ---------------------------------------- | --------- |
| size     | 组件大小                             | `small` &#124; `default` &#124; `large`  | `default` |
| tip      | 当作为包裹元素时，可以自定义描述文案 | <font color=#d35400>String</font>        | -         |
| delay    | 延迟显示加载效果的时间（防止闪烁）   | <font color=#d35400>number (毫秒)</font> | -         |
| spinning | 是否为加载中状态                     | <font color=#d35400>Boolean</font>       | `true`    |
