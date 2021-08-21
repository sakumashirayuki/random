---
nav:
  title: Components
  path: /components
---

## Slider

滑动型输入器，展示当前值。

### 基本使用

```tsx
import React, { useState } from 'react';
import { Slider } from 'random';

export default () => {
  const [inputValue, setInputValue] = useState(0);
  const onChange = (value) => {
    setInputValue(value);
  };
  return (
    <>
      <p>{inputValue}</p>
      <Slider value={inputValue} onChange={onChange} />
    </>
  );
};
```

### 设置步长

```tsx
import React, { useState } from 'react';
import { Slider } from 'random';

export default () => {
  const [inputValue, setInputValue] = useState(0);
  const onChange = (value) => {
    setInputValue(value);
  };
  return (
    <>
      <p>
        <span>step: 0.01</span> 当前值：{inputValue}
      </p>
      <Slider value={inputValue} onChange={onChange} step={0.01} />
    </>
  );
};
```

```tsx
import React, { useState } from 'react';
import { Slider } from 'random';

export default () => {
  const [inputValue, setInputValue] = useState(0);
  const onChange = (value) => {
    setInputValue(value);
  };
  return (
    <>
      <p>
        <span>step: 10</span> 当前值： {inputValue}
      </p>
      <Slider value={inputValue} onChange={onChange} step={10} />
    </>
  );
};
```

## API

| 属性     | 说明                                                                       | 类型                    | 默认值 |
| -------- | -------------------------------------------------------------------------- | ----------------------- | ------ |
| step     | 步长，取值必须大于 0                                                       | number                  | 1      |
| value    | 设置当前取值                                                               | number                  | -      |
| onChange | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入 | (value: number) => void | -      |
