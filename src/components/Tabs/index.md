---
nav:
  title: Components
  path: /components
---

## Tabs

不同类型:

```tsx
import React from 'react';
import { Tabs } from 'random';

const { TabsPane } = Tabs;

export default () => (
  <>
    <Tabs>
      <TabsPane key="key1" tab="tab1">
        TabsPane 1
      </TabsPane>
      <TabsPane key="key2" tab="tab2">
        TabsPane 2
      </TabsPane>
      <TabsPane key="key3" tab="tab3">
        TabsPane 3
      </TabsPane>
    </Tabs>
  </>
);
```

## API
