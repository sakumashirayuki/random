---
nav:
  title: Components
  path: /components
---

## Divider

### 类型

可以通过 `type`属性进行分割线样式的修改，默认为 `solid`。

```tsx
import React from 'react';
import { Divider } from 'random';

export default () => (
  <>
    <p>
      I have often thought it would be a blessing if each human being were
      stricken blind and deaf for a few days at some time during his early adult
      life. Darkness would make him more appreciative of sight; silence would
      tech him the joys of sound.
    </p>
    <Divider />
    <p>
      Now and them I have tested my seeing friends to discover what they see.
      Recently I was visited by a very good friends who hadjust returned from a
      long walk in the woods, and I asked her what she had observed.. "Nothing
      in particular, " she replied.
    </p>
    <Divider type="dashed" />
    <p>
      I might have been incredulous had I not been accustomed to such reposes,
      for long ago I became convinced that the seeing see little.
    </p>
  </>
);
```

### 文本

可以通过双标签形式为分割线添加文本内容，并通过 `orientation` 属性设置文本位置，默认为 `left`。

```tsx
import React from 'react';
import { Divider } from 'random';

export default () => (
  <>
    <p>
      How was it possible, I asked myself, to walk for an hour through the woods
      and see nothing worthy of note? I who cannot see find hundreds of things
      to interest me through mere touch.
    </p>
    <Divider orientation="left">Left</Divider>
    <p>
      {' '}
      I feel the delicate symmetry of a leaf. I pass my hands lovingly about the
      smooth skin of a silver birch, or the rough, shaggy bark of a pine. In the
      spring I touch the branches of trees hopefully in search of a bud the first
      sign of awakening Nature after her winter's sleep.
    </p>
    <Divider orientation="center">Center</Divider>
    <p>
      I feel the delightful, velvety texture of a flower, and discover its
      remarkable convolutions; and something of the miracle of Nature is
      revealed to me. Occasionally, if I am very fortunate, I place my hand
      gently on a small tree and feel the happy quiver of a bird in full song.
    </p>
    <Divider orientation="right">Right</Divider>
    <p>
      I feel the delightful, velvety texture of a flower, and discover its
      remarkable convolutions; and something of the miracle of Nature is
      revealed to me. Occasionally, if I am very fortunate, I place my hand
      gently on a small tree and feel the happy quiver of a bird in full song.
    </p>
  </>
);
```

不想要标题样式的分割线文本，也可以使用 `plain` 属性变成 **正文样式**，默认值为 `false`

```tsx
import React from 'react';
import { Divider } from 'random';

export default () => (
  <>
    <p>
      How was it possible, I asked myself, to walk for an hour through the woods
      and see nothing worthy of note? I who cannot see find hundreds of things
      to interest me through mere touch.
    </p>
    <Divider orientation="left" plain>
      Left
    </Divider>
    <p>
      {' '}
      I feel the delicate symmetry of a leaf. I pass my hands lovingly about the
      smooth skin of a silver birch, or the rough, shaggy bark of a pine. In the
      spring I touch the branches of trees hopefully in search of a bud the first
      sign of awakening Nature after her winter's sleep.
    </p>
    <Divider orientation="center" plain>
      Center
    </Divider>
    <p>
      I feel the delightful, velvety texture of a flower, and discover its
      remarkable convolutions; and something of the miracle of Nature is
      revealed to me. Occasionally, if I am very fortunate, I place my hand
      gently on a small tree and feel the happy quiver of a bird in full song.
    </p>
    <Divider orientation="right" plain>
      Right
    </Divider>
    <p>
      I feel the delightful, velvety texture of a flower, and discover its
      remarkable convolutions; and something of the miracle of Nature is
      revealed to me. Occasionally, if I am very fortunate, I place my hand
      gently on a small tree and feel the happy quiver of a bird in full song.
    </p>
  </>
);
```

## API

| 属性        | 说明                   | 类型                                  | 默认值  |
| ----------- | ---------------------- | ------------------------------------- | ------- |
| type        | 设置分割线的类型       | `soild` &#124; `dashed`               | `soild` |
| orientation | 设置分割线文本对齐方式 | `left` &#124; `center` &#124; `right` | `left`  |
| disabled    | 按扭禁用               | <font color=#d35400>Boolean</font>    | `false` |
