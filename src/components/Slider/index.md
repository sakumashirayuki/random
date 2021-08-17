---
nav:
  title: Components
  path: /components
---

## Slider

```tsx
import React from 'react';
import { Slider } from 'random';

export default () => (
  <>
    <Slider style={{ width: '500px' }} />
  </>
);
```

## API

| 属性         | 说明                             | 类型   | 默认值 |
| ------------ | -------------------------------- | ------ | ------ |
| offsetTop    | 距离窗口顶部达到指定偏移量后触发 | number | -      |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number | -      |
