---
nav:
  title: Components
  path: /components
---

## Empty

简单的展示:

```tsx
import React from 'react';
import { Empty } from 'random';

export default () => (
  <>
    <Empty />
  </>
);
```

可以通过设置 image 为 Empty.PRESENTED_IMAGE_SIMPLE 选择另一种风格的图片:

```tsx
import React from 'react';
import { Empty } from 'random';

export default () => (
  <>
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  </>
);
```

自定义描述文案:

```tsx
import React from 'react';
import { Empty } from 'random';

export default () => (
  <>
    <Empty description="数据不存在" />
  </>
);
```

## API

| 属性        | 说明                                           | 类型          | 默认值                        |
| ----------- | ---------------------------------------------- | ------------- | ----------------------------- |
| description | 自定义描述内容                                 | ReactNode     | 暂无数据                      |
| image       | 设置显示图片，为 string 时表示自定义图片地址。 | ReactNode     | Empty.PRESENTED_IMAGE_DEFAULT |
| imageStyle  | 图片样式                                       | CSSProperties |                               |
