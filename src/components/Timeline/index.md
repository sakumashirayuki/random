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
      <Item title="样式设计" color="finish">
        使用设计工具设计UI组件样式
      </Item>
      <Item title="代码逻辑开发" color="finish">
        使用React-ts进行底层逻辑开发，避免出现类型问题
      </Item>
      <Item title="接口调试" color="fail">
        测试接口显示逻辑是否正确
      </Item>
      <Item title="样式实现" color="current">
        实现并测试组件样式
      </Item>
      <Item title="健壮性测试" color="coming">
        对不同的属性值和子组件情况测试组建的健壮性
      </Item>
      <Item title="组件发布" color="coming">
        将组件发布至Random UI
      </Item>
    </Timeline>
  </>
);
```

使用 onClick 回调，圆点为交互点

```tsx
import React from 'react';
import { Timeline } from 'random';

const { Item } = Timeline;

export default () => (
  <>
    <Timeline>
      <Item title="点我" color="finish" onClick={() => console.log('test')}>
        控制台输出
      </Item>
    </Timeline>
  </>
);
```

### label

带有标签的两侧 timeline，组件默认居中，任意 Item 具有 label 属性即可切换为该样式

```tsx
import React from 'react';
import { Timeline } from 'random';

const { Item } = Timeline;

export default () => (
  <>
    <Timeline>
      <Item title="样式设计" color="finish" label="2021-08-18">
        使用设计工具设计UI组件样式
      </Item>
      <Item title="代码逻辑开发" color="finish">
        使用React-ts进行底层逻辑开发，避免出现类型问题
      </Item>
      <Item title="接口调试" color="fail" label="2021-08-19">
        测试接口显示逻辑是否正确
      </Item>
      <Item title="样式实现" color="current">
        实现并测试组件样式
      </Item>
      <Item title="健壮性测试" color="coming" label="2021-08-20">
        对不同的属性值和子组件情况测试组建的健壮性
      </Item>
      <Item title="组件发布" color="coming" label="2021-08-23">
        将组件发布至Random UI
      </Item>
    </Timeline>
  </>
);
```

### noTail

使用 noTail 控制对应单元的 timeline 显示，末尾 Item 元素默认带有 noTail 属性

```tsx
import React from 'react';
import { Timeline } from 'random';

const { Item } = Timeline;

export default () => (
  <>
    <Timeline>
      <Item title="样式设计" color="finish" label="2021-08-18">
        使用设计工具设计UI组件样式
      </Item>
      <Item title="代码逻辑开发" color="finish" noTail>
        使用React-ts进行底层逻辑开发，避免出现类型问题
      </Item>
      <Item title="接口调试" color="fail" label="2021-08-19">
        测试接口显示逻辑是否正确
      </Item>
      <Item title="样式实现" color="current" noTail>
        实现并测试组件样式
      </Item>
      <Item title="健壮性测试" color="coming" label="2021-08-20" noTail>
        对不同的属性值和子组件情况测试组建的健壮性
      </Item>
      <Item title="组件发布" color="coming" label="2021-08-23">
        将组件发布至Random UI
      </Item>
    </Timeline>
  </>
);
```

### 颜色预设

```tsx
import React from 'react';
import { Timeline } from 'random';

const { Item } = Timeline;

export default () => (
  <>
    <Timeline>
      <Item title="Preset Color" noTail />

      <Item title="default" />
      <Item title="blue" color="blue" />
      <Item title="indigo" color="indigo" />
      <Item title="purple" color="purple" />
      <Item title="pink" color="pink" />
      <Item title="red" color="red" />
      <Item title="orange" color="orange" />
      <Item title="yellow" color="yellow" />
      <Item title="green" color="green" />
      <Item title="teal" color="teal" />
      <Item title="cyan" color="cyan" noTail />

      <Item title="state" noTail />

      <Item title="finish" color="finish" />
      <Item title="fail" color="fail" />
      <Item title="current" color="current" />
      <Item title="coming" color="coming" noTail />

      <Item title="custom" noTail />

      <Item title="#f00" color="#f00" />
      <Item title="#2db7f5" color="#2db7f5" />
      <Item title="#87d068" color="#87d068" />
      <Item title="#108ee9" color="#108ee9" noTail />
    </Timeline>
  </>
);
```

## API

### Timeline.Item

| 属性    | 说明               | 类型        | 默认值 |
| ------- | ------------------ | ----------- | ------ |
| color   | 预设值或颜色       | string      | -      |
| label   | 标签               | string      | -      |
| noTail  | 是否省略中线       | boolean     | false  |
| title   | 标题               | string      | -      |
| onClick | 单击圆点触发的事件 | (e) => void | -      |
