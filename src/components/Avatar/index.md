---
nav:
  title: Components
  path: /components
---

## Avatar

简单的展示:

```tsx
import React from 'react';
import { Avatar } from 'random';

export default () => (
  <>
    <Avatar size={64} style={{ marginRight: '10px' }} />
    <Avatar size="large" style={{ marginRight: '10px' }} />
    <Avatar style={{ marginRight: '10px' }} />
    <Avatar size="small" style={{ marginRight: '10px' }} />
  </>
);
```

方形样式展示:

```tsx
import React from 'react';
import { Avatar } from 'random';

export default () => (
  <>
    <Avatar shape="square" size={64} style={{ marginRight: '10px' }} />
    <Avatar shape="square" size="large" style={{ marginRight: '10px' }} />
    <Avatar shape="square" style={{ marginRight: '10px' }} />
    <Avatar shape="square" size="small" style={{ marginRight: '10px' }} />
  </>
);
```

展示图片内容:

```tsx
import React from 'react';
import { Avatar } from 'random';

export default () => (
  <>
    <Avatar
      src="https://z3.ax1x.com/2021/08/19/fqhd7F.png"
      size={64}
      style={{ marginRight: '10px' }}
    />
    <Avatar
      src="https://z3.ax1x.com/2021/08/19/fqhd7F.png"
      size="large"
      style={{ marginRight: '10px' }}
    />
    <Avatar
      src="https://z3.ax1x.com/2021/08/19/fqhd7F.png"
      style={{ marginRight: '10px' }}
    />
    <Avatar
      src="https://z3.ax1x.com/2021/08/19/fqhd7F.png"
      size="small"
      style={{ marginRight: '10px' }}
    />
  </>
);
```

展示文字内容:

```tsx
import React from 'react';
import { Avatar } from 'random';

export default () => (
  <>
    <Avatar>张</Avatar>
  </>
);
```

## API

| 属性  | 说明                             | 类型   | 默认值 |
| ----- | -------------------------------- | ------ | ------ | ------ | ------- | ------- |
| shape | 指定头像的形状                   | circle | square | circle |
| size  | 设置头像的大小                   | number | large  | small  | default | default |
| src   | 图片类头像的资源地址或者图片元素 | string |        |
| alt   | 图像无法显示时的替代文本         | string |        |
