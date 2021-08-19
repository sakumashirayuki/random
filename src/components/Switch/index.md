---
nav:
  title: Components
  path: /components
---

## Switch

### 基本使用

```tsx
import React from 'react';
import { Switch } from 'random';

export default () => (
  <>
    <Switch></Switch>
  </>
);
```

### 不同尺寸

提供了两种大小适用于不同情况：

```tsx
import React from 'react';
import { Switch } from 'random';

export default () => (
  <>
    <Switch></Switch>
    <br />
    <Switch size="sm"></Switch>
  </>
);
```

### 不可用

通过 `disabled`属性设置失效状态

```tsx
import React from 'react';
import { Switch, Button } from 'random';

export default () => {
  const [disabled, setDisabled] = React.useState(true);

  function handleClick() {
    setDisabled(!disabled);
  }

  return (
    <>
      <Switch checked={true} disabled={disabled}></Switch>
      <br />
      <Button onClick={handleClick}>toggle disabled</Button>
    </>
  );
};
```

### 文字或图标

通过属性设置开关时展示的不同的文字或图标

```tsx
import React from 'react';
import { Switch, Button } from 'random';

export default () => {
  const [disabled, setDisabled] = React.useState(true);

  function handleClick() {
    setDisabled(!disabled);
  }

  const Close = (
    <svg
      viewBox="0 0 1045 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="6627"
      width="1em"
      height="1em"
    >
      <path
        d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z"
        p-id="6628"
        fill="#ffffff"
      ></path>
    </svg>
  );

  const Select = (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="6868"
      width="1em"
      height="1em"
    >
      <path
        d="M235.946667 472.938667l-45.226667 45.312 210.090667 209.514666 432.362666-427.690666-45.013333-45.482667-387.157333 382.976z"
        p-id="6869"
        fill="#ffffff"
      ></path>
    </svg>
  );

  return (
    <>
      <Switch checked checkedChildren="开" unCheckedChildren="关"></Switch>
      <br />
      <Switch checkedChildren="1" unCheckedChildren="0"></Switch>
      <br />
      <Switch
        checked
        checkedChildren={Select}
        unCheckedChildren={Close}
      ></Switch>
    </>
  );
};
```

## API

| 属性              | 说明                     | 类型                                                                       | 默认值    |
| ----------------- | ------------------------ | -------------------------------------------------------------------------- | --------- |
| size              | 设置开关大小             | `default` &#124; `sm`                                                      | `default` |
| checked           | 默认是否开启             | <font color=#d35400>Boolean</font>                                         | `false`   |
| checkedChildren   | 设置开关开启时显示的图标 | <font color=#d35400>ReactNode</font>                                       | -         |
| unCheckedChildren | 设置开关关闭时显示的图标 | <font color=#d35400>ReactNode</font>                                       | `false`   |
| disabled          | 是否禁用开关             | <font color=#d35400>Boolean</font>                                         | `false`   |
| showIcon          | 是否开启警告图标         | <font color=#d35400>Boolean</font>                                         | `false`   |
| onChange          | 开关开启或关闭时的回调   | <font color=#d35400>Function(`checked`:boolean, `event`:MountEvent)</font> | -         |
