---
nav:
  title: Components
  path: /components
---

## Alert

### 样式

提供了四种不同风格类型的警告提示：

```tsx
import React from 'react';
import { Alert } from 'random';

export default () => (
  <>
    <Alert message="Success Text" type="success"></Alert>
    <Alert message="Info Text" type="info"></Alert>
    <Alert message="Warning Text" type="warning"></Alert>
    <Alert message="Error Text" type="error"></Alert>
  </>
);
```

同时提供了三种大小适用于不同的场景：

```tsx
import React from 'react';
import { Alert } from 'random';

export default () => (
  <>
    <Alert message="large Text" size="lg"></Alert>
    <Alert message="default Text"></Alert>
    <Alert message="small Text" size="sm"></Alert>
  </>
);
```

### 图标

通过设置属性 `showIcon` 开启图标，同时支持自定义图标（需开启图标）：

```tsx
import React from 'react';
import { Alert } from 'random';

export default () => (
  <>
    <Alert showIcon type="success" message="Alert Component"></Alert>
    <Alert showIcon type="info" message="Alert Component"></Alert>
    <Alert showIcon type="warning" message="Alert Component"></Alert>
    <Alert showIcon type="error" message="Alert Component"></Alert>
    <Alert
      showIcon
      icon={<span style={{ color: 'red', fontSize: '12px' }}>警告</span>}
      type="error"
      message="Alert Component"
    ></Alert>
  </>
);
```

### 关闭

通过属性 `closable` 开启关闭图标，支持自定义关闭按钮（需开启关闭按钮）：

```tsx
import React from 'react';
import { Alert } from 'random';

function AComponent() {
  return <div>X</div>;
}

function Close(e) {
  alert('click me');
}

export default () => (
  <>
    <Alert
      closable
      onClose={Close}
      type="success"
      message="Alert Component"
    ></Alert>
    <Alert
      closable
      onClose={Close}
      type="info"
      message="Alert Component"
    ></Alert>
    <Alert
      closable
      onClose={Close}
      closeText="Close"
      type="warning"
      message="Alert Component"
    ></Alert>
    <Alert
      closable
      onClose={Close}
      closeText={<AComponent />}
      type="error"
      message="Alert Component"
    ></Alert>
  </>
);
```

### 辅助性文本

可以添加辅助性文本对警告提示进行辅助说明：

```tsx
import React from 'react';
import { Alert } from 'random';

export default () => (
  <>
    <Alert
      type="info"
      message="Alert Component"
      description="I have often thought it would be a blessing if each human being were
      stricken blind and deaf for a few days at some time during his early adult
      life. Darkness would make him more appreciative of sight; silence would
      tech him the joys of sound."
    ></Alert>
    <Alert
      showIcon
      type="warning"
      message="Alert Component"
      description="I have often thought it would be a blessing if each human being were
      stricken blind and deaf for a few days at some time during his early adult
      life. Darkness would make him more appreciative of sight; silence would
      tech him the joys of sound."
    ></Alert>
    <Alert
      showIcon
      closable
      type="success"
      message="Alert Component"
      description="I have often thought it would be a blessing if each human being were
      stricken blind and deaf for a few days at some time during his early adult
      life. Darkness would make him more appreciative of sight; silence would
      tech him the joys of sound."
    ></Alert>
  </>
);
```

## API

| 属性        | 说明               | 类型                                                    | 默认值    |
| ----------- | ------------------ | ------------------------------------------------------- | --------- |
| type        | 设置警告的类型     | `success` &#124; `info` &#124; `error` &#124; `warning` | `success` |
| size        | 设置警告的大小     | `default` &#124; `lg` &#124; `sm`                       | `default` |
| message     | 设置警告提示内容   | <font color=#d35400>String</font>                       | -         |
| description | 设置警告辅助文本   | <font color=#d35400>String</font>                       | -         |
| closable    | 是否开启关闭按钮   | <font color=#d35400>Boolean</font>                      | `false`   |
| closeText   | 自定义关闭按钮     | <font color=#d35400>React.Node</font>                   | -         |
| showIcon    | 是否开启警告图标   | <font color=#d35400>Boolean</font>                      | `false`   |
| icon        | 自定义开启警告图标 | <font color=#d35400>React.Node</font>                   | -         |
| onClose     | 关闭警告时的回调   | <font color=#d35400>Function(e)</font>                  | -         |
