---
nav:
  title: Components
  path: /components
---

## Button

不同类型:

```tsx
import React from 'react';
import { Button } from 'random';

export default () => (
  <>
    <Button style={{ margin: '15px' }}>Default</Button>
    <Button btnType="primary" style={{ margin: '15px' }}>
      Primary
    </Button>
    <Button btnType="primary" disabled style={{ margin: '15px' }}>
      Disabled
    </Button>
    <Button btnType="danger" style={{ margin: '15px' }}>
      Danger
    </Button>
    <Button btnType="link" style={{ margin: '15px' }}>
      Link
    </Button>
    <Button btnType="link" href="#" style={{ margin: '15px' }}>
      Link
    </Button>
  </>
);
```

不同大小：

```tsx
import React from 'react';
import { Button } from 'random';

export default () => (
  <>
    <Button size="sm" btnType="primary" style={{ margin: '15px' }}>
      small
    </Button>
    <Button btnType="primary" style={{ margin: '15px' }}>
      default
    </Button>
    <Button size="lg" btnType="primary" style={{ margin: '15px' }}>
      big
    </Button>
  </>
);
```

## API

| 属性     | 说明           | 类型                                             | 默认值  |
| -------- | -------------- | ------------------------------------------------ | ------- |
| btnType  | 设置按钮的类型 | default &#124; primary &#124; danger &#124; link | default |
| size     | 设置按钮的大小 | sm &#124; lg                                     |         |
| disabled | 按扭禁用       | boolean                                          | false   |
