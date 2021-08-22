---
nav:
  title: Components
  path: /components
---

## InputNumber

输入数值

### 基本使用

```tsx
import React, { useState } from 'react';
import { InputNumber } from 'random';

export default () => {
  const defaultValue = 1;
  const [value, setValue] = useState(defaultValue);
  const onChange = (value) => {
    console.log(value);
    console.log(typeof value);
    setValue(value);
  };
  return (
    <>
      <InputNumber defaultValue={defaultValue} onChange={onChange} />
    </>
  );
};
```

### 限制输入的最小值和最大值

```tsx
import React, { useState } from 'react';
import { InputNumber } from 'random';

export default () => {
  const defaultValue = 1;
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  return (
    <>
      <div
        style={{
          display: 'flex',
          marginLeft: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '1rem',
            marginBottom: '1rem',
          }}
        >
          <span style={{ marginRight: '4px' }}>最小值</span>
          <InputNumber
            defaultValue={0}
            onChange={(value) => setMin(value)}
            size="small"
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '1rem',
            marginBottom: '1rem',
          }}
        >
          <span style={{ marginRight: '4px' }}>最大值</span>
          <InputNumber
            defaultValue={10}
            onChange={(value) => setMax(value)}
            size="small"
          />
        </div>
      </div>
      <InputNumber defaultValue={defaultValue} min={min} max={max} />
    </>
  );
};
```

### 无边框

```tsx
import React, { useState } from 'react';
import { InputNumber } from 'random';

export default () => {
  const defaultValue = 2.1;
  const [value, setValue] = useState(defaultValue);
  const onChange = (value) => {
    setValue(value);
  };
  return (
    <>
      <InputNumber
        defaultValue={defaultValue}
        onChange={onChange}
        bordered={false}
      />
    </>
  );
};
```

### 三种尺寸

三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

```tsx
import React, { useState } from 'react';
import { InputNumber } from 'random';

export default () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <InputNumber defaultValue={1} size="large" />
        <InputNumber defaultValue={1} />
        <InputNumber defaultValue={1} size="small" />
      </div>
    </>
  );
};
```

## API

| 属性         | 说明       | 类型                                               | 默认值                  |
| ------------ | ---------- | -------------------------------------------------- | ----------------------- |
| value        | 当前值     | <font color=#d35400>number</font>                  | -                       |
| onChange     | 变化回调   | <font color=#d35400>(value: number) => void</font> | -                       |
| bordered     | 是否有边框 | <font color=#d35400>boolean</font>                 | true                    |
| size         | 输入框大小 | `large` &#124; `middle` &#124; `small `            | -                       |
| defaultValue | 初始值     | <font color=#d35400>number</font>                  | -                       |
| disabled     | 禁用       | <font color=#d35400>boolean</font>                 | false                   |
| min          | 最小值     | <font color=#d35400>number</font>                  | Number.MIN_SAFE_INTEGER |
| max          | 最大值     | <font color=#d35400>number</font>                  | Number.MAX_SAFE_INTEGER |
