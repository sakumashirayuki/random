---
nav:
  title: Components
  path: /components
---

## Badge

简单的展示:

```tsx
import React from 'react';
import { Badge, Avatar } from 'random';

export default () => (
  <>
    <Badge count={15}>
      <Avatar size={64} shape="square" />
    </Badge>
  </>
);
```

展示:

```tsx
import React from 'react';
import { Badge, Avatar } from 'random';

export default () => (
  <>
    <Badge count={15}>
      <Avatar src="https://z3.ax1x.com/2021/08/19/fqhd7F.png" size={64} />
    </Badge>
  </>
);
```

展示:

```tsx
import React from 'react';
import { Badge, Button } from 'random';

export default () => (
  <>
    <Badge count={15}>
      <Button>按钮</Button>
    </Badge>
  </>
);
```

## API

| 属性     | 说明                          | 类型    | 默认值 |
| -------- | ----------------------------- | ------- | ------ |
| count    | 展示的数字                    | number  |
| showZero | 当数值为 0 时，是否展示 Badge | boolean | false  |
