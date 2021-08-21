---
nav:
  title: Components
  path: /components
---

## InputNumber

输入数值

```tsx
import React, { useState } from 'react';
import { InputNumber } from 'random';

export default () => {
  const [value, setValue] = useState(0);
  const onChange = (value) => {
    console.log(value);
    console.log(typeof value);
    setValue(value);
  };
  return (
    <>
      <InputNumber value={value} onChange={onChange} />
    </>
  );
};
```

## API

| 属性     | 说明       | 类型                                               | 默认值 |
| -------- | ---------- | -------------------------------------------------- | ------ |
| value    | 当前值     | <font color=#d35400>number</font>                  | -      |
| onChange | 变化回调   | <font color=#d35400>(value: number) => void</font> | -      |
| bordered | 是否有边框 | <font color=#d35400>boolean</font>                 | true   |
