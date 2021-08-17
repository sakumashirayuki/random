---
nav:
  title: Components
  path: /components
---

## Tabs

### 基础使用:

```tsx
import React from 'react';
import { Tabs } from 'random';

const { TabsPane } = Tabs;

export default () => (
  <>
    <Tabs>
      <TabsPane key="key1" tab="tab1" style={{ height: '100px' }}>
        TabsPane 1
      </TabsPane>
      <TabsPane key="key2" tab="tab2" style={{ height: '100px' }}>
        TabsPane 2
      </TabsPane>
      <TabsPane key="key3" tab="tab3" style={{ height: '100px' }}>
        TabsPane 3
      </TabsPane>
    </Tabs>
  </>
);
```

### 不同大小:

```tsx
import React from 'react';
import { Tabs } from 'random';
import { Button } from 'random';

const { TabsPane } = Tabs;

export default () => (
  <>
    <h4>Small</h4>
    <Tabs size="sm">
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

    <h4>Normal</h4>
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

    <h4>Large</h4>
    <Tabs size="lg">
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

### 标签对齐

```tsx
import React from 'react';
import { Tabs } from 'random';

const { TabsPane } = Tabs;

export default () => (
  <>
    <h4>Left</h4>
    <Tabs tabAlign="left">
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
    <h4>Center</h4>
    <Tabs tabAlign="center">
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
    <h4>Right</h4>
    <Tabs tabAlign="right">
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

### 自定义初始化 Key

```tsx
import React from 'react';
import { Tabs } from 'random';

const { TabsPane } = Tabs;

export default () => (
  <>
    <Tabs defaultKey="key2">
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

### Disabled

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
      <TabsPane disabled key="key2" tab="tab2">
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

### Tabs

| 属性       | 说明                | 类型                            | 默认值 |
| ---------- | ------------------- | ------------------------------- | ------ |
| defaultKey | 默认选择的 TabsPane | string                          |        |
| size       | Tabs 的大小         | sm &#124; lg                    |        |
| tabsAlign  | 菜单栏对齐          | left &#124; right &#124; center | right  |

### Tabs.TabsPane

| 属性     | 说明           | 类型    | 默认值 |
| -------- | -------------- | ------- | ------ |
| key      |                | string  |        |
| tab      | 菜单项显示文本 | string  |        |
| disabled | 菜单禁用       | boolean | false  |
