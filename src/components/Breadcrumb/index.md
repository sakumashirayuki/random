---
nav:
  title: Components
  path: /components
---

## Breadcrumb

显示当前页面在系统层级结构中的位置，并能向上返回。

```tsx
import React from 'react';
import { Breadcrumb } from 'random';

const lib = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'components',
    href: '/components',
    disabled: true,
  },
  {
    title: 'Hot',
  },
];

export default () => (
  <>
    <Breadcrumb lib={lib}></Breadcrumb>
    <p>
      I have often thought it would be a blessing if each human being were
      stricken blind and deaf for a few days at some time during his early adult
      life. Darkness would make him more appreciative of sight; silence would
      tech him the joys of sound.
    </p>
  </>
);
```

设置属性 `separator` 可以更改分隔符，默认为 `/`

```tsx
import React from 'react';
import { Breadcrumb } from 'random';

const lib = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'components',
    href: '/components',
  },
  {
    title: 'Hot',
  },
];

export default () => (
  <>
    <Breadcrumb lib={lib} separator=">"></Breadcrumb>
    <p>
      I have often thought it would be a blessing if each human being were
      stricken blind and deaf for a few days at some time during his early adult
      life. Darkness would make him more appreciative of sight; silence would
      tech him the joys of sound.
    </p>
  </>
);
```

设置 `lib`数组 中的 `item`的 `click`属性可自定义事件，注意 `href` 权限大于 `click`.

```tsx
import React from 'react';
import { Breadcrumb } from 'random';

const lib = [
  {
    title: 'Home',
    click: () => {
      alert('Welcome come home.');
    },
  },
  {
    title: 'components',
    click: () => {
      alert('Welcome come to components.');
    },
  },
  {
    title: 'Hot',
  },
];

export default () => (
  <>
    <Breadcrumb lib={lib} separator=">"></Breadcrumb>
    <p>
      I have often thought it would be a blessing if each human being were
      stricken blind and deaf for a few days at some time during his early adult
      life. Darkness would make him more appreciative of sight; silence would
      tech him the joys of sound.
    </p>
  </>
);
```

设置 `border`属性可以添加底部边框。

```tsx
import React from 'react';
import { Breadcrumb } from 'random';

const lib = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'components',
    href: '/components',
  },
  {
    title: 'Hot',
  },
];

export default () => (
  <>
    <Breadcrumb lib={lib} border></Breadcrumb>
    <p>
      I have often thought it would be a blessing if each human being were
      stricken blind and deaf for a few days at some time during his early adult
      life. Darkness would make him more appreciative of sight; silence would
      tech him the joys of sound.
    </p>
  </>
);
```

## API

### Breadcrumb

| 属性      | 说明                 | 类型                                          | 默认值  |
| --------- | -------------------- | --------------------------------------------- | ------- |
| lib       | 设置当前面包屑内容跟 | <font color=#d35400>Array\<breadItem\></font> | -       |
| separator | 设置分隔符字符       | <font color=#d35400>string</font>             | `/`     |
| border    | 设置是否启用底部边框 | <font color=#d35400>boolean</font>            | `false` |

### breadItem

| 属性     | 说明             | 类型                                | 默认值  |
| -------- | ---------------- | ----------------------------------- | ------- |
| title    | 设置分支名称     | <font color=#d35400>string</font>   | -       |
| href     | 设置分支链接     | <font color=#d35400>string</font>   | -       |
| click    | 设置分支点击事件 | <font color=#d35400>Function</font> | -       |
| disabled | 设置分支点击事件 | <font color=#d35400>Function</font> | `false` |
