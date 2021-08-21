---
nav:
  title: Components
  path: /components
---

## Message

### 不同风格

提供了四种类型的全局提示适用于各种情况

```tsx
import React from 'react';
import { Message, Button } from 'random';

export default () => {
  const infoClick = () => {
    Message.info('This is a info message!');
  };
  const successClick = () => {
    Message.success('This is a success message!');
  };
  const errorClick = () => {
    Message.error('This is a error message!');
  };
  const warningClick = () => {
    Message.warning('This is a warning message!');
  };

  return (
    <>
      <Button
        style={{ marginRight: '6px' }}
        btnType="default"
        onClick={infoClick}
      >
        Click me
      </Button>
      <Button
        style={{ marginRight: '6px' }}
        btnType="primary"
        onClick={successClick}
      >
        Click me
      </Button>
      <Button
        style={{ marginRight: '6px' }}
        btnType="danger"
        onClick={errorClick}
      >
        Click me
      </Button>
      <Button
        style={{ marginRight: '6px' }}
        btnType="link"
        onClick={warningClick}
      >
        Click me
      </Button>
    </>
  );
};
```

### 延时关闭

可以通过对象的形式传递一些参数进行自定义操作，比如提示停留的时长

```tsx
import React from 'react';
import { Message, Button } from 'random';

export default () => {
  const infoClick = () => {
    Message.info({
      title: 'you will go to school.',
      duration: 10000,
    });
  };

  return (
    <>
      <Button style={{ marginRight: '6px' }} onClick={infoClick}>
        消失时间延长为10秒
      </Button>
    </>
  );
};
```

### 回调

可以添加 `onClose`用于监听提示关闭时的回调：

```tsx
import React from 'react';
import { Message, Button } from 'random';

export default () => {
  const infoClick = () => {
    Message.error({
      title: 'This is a error message.',
      duration: 5000,
      onClose() {
        alert('The msg is close');
      },
    });
  };

  return (
    <>
      <Button style={{ marginRight: '6px' }} onClick={infoClick}>
        click me
      </Button>
    </>
  );
};
```

## API

提供了以下方法：

- `Message.info(string | msgItem)`
- `Message.success(string | msgItem)`
- `Message.error(string | msgItem)`
- `Message.warning(string | msgItem)`

`msgItem` 对象一些属性：

| 属性     | 说明               | 类型                                        | 默认值 |
| -------- | ------------------ | ------------------------------------------- | ------ |
| title    | 设置消息的内容     | <font color=#d35400>String</font>           | -      |
| duration | 设置提示停留的时间 | <font color=#d35400>Number</font>，单位`ms` | `3000` |
| onClose  | 提示消失时的回调   | <font color=#d35400>Function</font>         | -      |
