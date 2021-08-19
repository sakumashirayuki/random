---
nav:
  title: Components
  path: /components
---

## Affix

将页面元素钉在可视范围。

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
    <p style={{ margin: '15px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est
      orci, faucibus at tristique sed, feugiat eget justo. Fusce nunc lectus,
      dignissim sit amet cursus vitae, tempor eu arcu. Pellentesque sed nisl
      erat. Fusce rutrum at arcu at dictum. Sed a ultricies augue. Proin
      molestie non turpis eget accumsan. Vestibulum faucibus, libero dictum
      sollicitudin convallis, tellus mauris cursus felis, non rutrum nulla leo
      eget neque. Etiam lobortis suscipit maximus. Suspendisse potenti. Ut
      eleifend tellus dui, in posuere justo interdum in. Nulla porttitor, urna
      non sodales tempus, velit odio consectetur est, ac imperdiet nibh odio eu
      metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Pellentesque est orci, faucibus at tristique sed, feugiat eget
      justo. Fusce nunc lectus, dignissim sit amet cursus vitae, tempor eu arcu.
      Pellentesque sed nisl erat. Fusce rutrum at arcu at dictum. Sed a
      ultricies augue. Proin molestie non turpis eget accumsan. Vestibulum
      faucibus, libero dictum sollicitudin convallis, tellus mauris cursus
      felis, non rutrum nulla leo eget neque. Etiam lobortis suscipit maximus.
      Suspendisse potenti. Ut eleifend tellus dui, in posuere justo interdum in.
      Nulla porttitor, urna non sodales tempus, velit odio consectetur est, ac
      imperdiet nibh odio eu metus. Vestibulum ante ipsum primis in faucibus
      orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Pellentesque est orci, faucibus at tristique
      sed, feugiat eget justo. Fusce nunc lectus, dignissim sit amet cursus
      vitae, tempor eu arcu. Pellentesque sed nisl erat. Fusce rutrum at arcu at
      dictum. Sed a ultricies augue. Proin molestie non turpis eget accumsan.
      Vestibulum faucibus, libero dictum sollicitudin convallis, tellus mauris
      cursus felis, non rutrum nulla leo eget neque. Etiam lobortis suscipit
      maximus. Suspendisse potenti. Ut eleifend tellus dui, in posuere justo
      interdum in. Nulla porttitor, urna non sodales tempus, velit odio
      consectetur est, ac imperdiet nibh odio eu metus. Vestibulum ante ipsum
      primis in faucibus orci luctus et ultrices posuere cubilia curae;
    </p>
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
