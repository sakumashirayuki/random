---
nav:
  title: Components
  path: /components
---

## Affix

```tsx
import React from 'react';
import { Affix, Button } from 'random';

export default () => (
  <>
    <Affix offsetTop={100}>
      <Button btnType="primary" style={{ margin: '15px' }}>
        Affix top
      </Button>
    </Affix>
    <Affix offsetBottom={50}>
      <Button btnType="primary" style={{ margin: '15px' }}>
        Affix bottom
      </Button>
    </Affix>
  </>
);
```

## API

| 属性         | 说明                             | 类型   | 默认值 |
| ------------ | -------------------------------- | ------ | ------ |
| offsetTop    | 距离窗口顶部达到指定偏移量后触发 | number | -      |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number | -      |
