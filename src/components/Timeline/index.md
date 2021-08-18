---
nav:
  title: Components
  path: /components
---

## Timeline

### 基础用法

```tsx
import React from 'react';
import { Timeline } from 'random';

const { Item } = Timeline;

export default () => (
  <>
    <Timeline>
      <Item title="01" description="description for 01" />
      <Item title="02" description="description for 02" />
    </Timeline>
  </>
);
```

## API
