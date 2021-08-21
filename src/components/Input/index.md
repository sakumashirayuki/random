---
nav:
  title: Components
  path: /components
---

## Input

### 基础使用

导入 `Input` 后直接使用。

```tsx
import React from 'react';
import { Input } from 'random';

export default () => (
  <>
    <Input placeholder="base input" />
    <Input
      value="This is a disabled input."
      placeholder="base input"
      disabled={true}
    />
  </>
);
```

### 不同尺寸

提供了 `default`、`lg`、`sm`三种尺寸的输入框，默认为 `defualt`尺寸。

```tsx
import React from 'react';
import { Input } from 'random';

export default () => (
  <>
    <Input inpSize="lg" placeholder="lg(large) input" />
    <Input inpSize="default" placeholder="default input" />
    <Input inpSize="sm" placeholder="sm(small) input" />
  </>
);
```

### 前/后缀标签

`addonBefore`与`addonAfter`属性接受一个 `React.Node`，用于添加前/后标签，进行任意搭配。

```tsx
import React from 'react';
import { Input } from 'random';

const settingSVG = (
  <svg
    t="1629185179927"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2996"
    width="20"
    height="20"
  >
    <path
      d="M904.533333 422.4l-85.333333-14.933333-17.066667-38.4 49.066667-70.4c14.933333-21.333333 12.8-49.066667-6.4-68.266667l-53.333333-53.333333c-19.2-19.2-46.933333-21.333333-68.266667-6.4l-70.4 49.066666-38.4-17.066666-14.933333-85.333334c-2.133333-23.466667-23.466667-42.666667-49.066667-42.666666h-74.666667c-25.6 0-46.933333 19.2-53.333333 44.8l-14.933333 85.333333-38.4 17.066667L296.533333 170.666667c-21.333333-14.933333-49.066667-12.8-68.266666 6.4l-53.333334 53.333333c-19.2 19.2-21.333333 46.933333-6.4 68.266667l49.066667 70.4-17.066667 38.4-85.333333 14.933333c-21.333333 4.266667-40.533333 25.6-40.533333 51.2v74.666667c0 25.6 19.2 46.933333 44.8 53.333333l85.333333 14.933333 17.066667 38.4L170.666667 727.466667c-14.933333 21.333333-12.8 49.066667 6.4 68.266666l53.333333 53.333334c19.2 19.2 46.933333 21.333333 68.266667 6.4l70.4-49.066667 38.4 17.066667 14.933333 85.333333c4.266667 25.6 25.6 44.8 53.333333 44.8h74.666667c25.6 0 46.933333-19.2 53.333333-44.8l14.933334-85.333333 38.4-17.066667 70.4 49.066667c21.333333 14.933333 49.066667 12.8 68.266666-6.4l53.333334-53.333334c19.2-19.2 21.333333-46.933333 6.4-68.266666l-49.066667-70.4 17.066667-38.4 85.333333-14.933334c25.6-4.266667 44.8-25.6 44.8-53.333333v-74.666667c-4.266667-27.733333-23.466667-49.066667-49.066667-53.333333z m-19.2 117.333333l-93.866666 17.066667c-10.666667 2.133333-19.2 8.533333-23.466667 19.2l-29.866667 70.4c-4.266667 10.666667-2.133333 21.333333 4.266667 29.866667l53.333333 76.8-40.533333 40.533333-76.8-53.333333c-8.533333-6.4-21.333333-8.533333-29.866667-4.266667L576 768c-10.666667 4.266667-17.066667 12.8-19.2 23.466667l-17.066667 93.866666h-57.6l-17.066666-93.866666c-2.133333-10.666667-8.533333-19.2-19.2-23.466667l-70.4-29.866667c-10.666667-4.266667-21.333333-2.133333-29.866667 4.266667l-76.8 53.333333-40.533333-40.533333 53.333333-76.8c6.4-8.533333 8.533333-21.333333 4.266667-29.866667L256 576c-4.266667-10.666667-12.8-17.066667-23.466667-19.2l-93.866666-17.066667v-57.6l93.866666-17.066666c10.666667-2.133333 19.2-8.533333 23.466667-19.2l29.866667-70.4c4.266667-10.666667 2.133333-21.333333-4.266667-29.866667l-53.333333-76.8 40.533333-40.533333 76.8 53.333333c8.533333 6.4 21.333333 8.533333 29.866667 4.266667L448 256c10.666667-4.266667 17.066667-12.8 19.2-23.466667l17.066667-93.866666h57.6l17.066666 93.866666c2.133333 10.666667 8.533333 19.2 19.2 23.466667l70.4 29.866667c10.666667 4.266667 21.333333 2.133333 29.866667-4.266667l76.8-53.333333 40.533333 40.533333-53.333333 76.8c-6.4 8.533333-8.533333 21.333333-4.266667 29.866667L768 448c4.266667 10.666667 12.8 17.066667 23.466667 19.2l93.866666 17.066667v55.466666z"
      p-id="2997"
    ></path>
    <path
      d="M512 394.666667c-64 0-117.333333 53.333333-117.333333 117.333333s53.333333 117.333333 117.333333 117.333333 117.333333-53.333333 117.333333-117.333333-53.333333-117.333333-117.333333-117.333333z m0 170.666666c-29.866667 0-53.333333-23.466667-53.333333-53.333333s23.466667-53.333333 53.333333-53.333333 53.333333 23.466667 53.333333 53.333333-23.466667 53.333333-53.333333 53.333333z"
      p-id="2998"
    ></path>
  </svg>
);

export default () => (
  <>
    <Input
      addonBefore="https://"
      addonAfter=".com"
      inpSize="sm"
      placeholder="print the url"
    />
    <Input
      addonBefore="https://"
      addonAfter=".com"
      placeholder="print the url"
    />
    <Input
      addonBefore="https://"
      addonAfter=".com"
      inpSize="lg"
      placeholder="print the url"
    />
    <Input addonBefore="random@" placeholder="call sb to doing sth" />
    <Input addonAfter={settingSVG} placeholder="search setting" />
    <Input
      addonBefore={<div style={{ color: 'red' }}>#</div>}
      placeholder="print a link"
    />
  </>
);
```

### 确定按钮

通过设置 `addonSubmit` 属性来开启确认按钮的同时设置确认按钮的文本。

```tsx
import React from 'react';
import { Input } from 'random';

export default () => {
  function Search(value, e) {
    alert(value);
  }

  return (
    <>
      <Input
        placeholder="input search text"
        onPressEnter={Search}
        addonSubmit="Submit"
      />
    </>
  );
};
```

### 监听改变

通过 `onChange` 绑定事件监听输入框内容的变化。

```tsx
import React, { useState } from 'react';
import { Input } from 'random';

export default () => {
  const [disValue, setValue] = useState('');

  function Change(value, e) {
    setValue(value);
  }

  return (
    <>
      <Input placeholder="input in this" onChange={Change} />
      <Input disabled value={disValue} placeholder="output in this" />
    </>
  );
};
```

### 文本域

当你想使用文本域时，只需把 `type`属性改为 `textarea`即可。

```tsx
import React from 'react';
import { Input } from 'random';

function handChange(v, e) {
  console.log(v);
}

export default () => (
  <>
    <Input
      onChange={handChange}
      type="textarea"
      placeholder="input something"
    />
  </>
);
```

## API

### Input

| 属性         | 说明                                                                                                   | 类型                                  | 默认值    |
| ------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------- | --------- |
| inpSize      | 设置输入框的大小                                                                                       | `default` &#124; `lg` &#124; `sm`     | `default` |
| type         | 声明 input 类型，同原生 input 标签的 type 属性（要使用 `textarea`则直接将 `type`属性改为`textarea`）。 | <font color=#d35400>String</font>     | `text`    |
| value        | 输入框的内容                                                                                           | <font color=#d35400>String</font>     | -         |
| addonBefore  | 给输入框添加前置标签                                                                                   | <font color=#d35400>React.Node</font> | -         |
| addonAfter   | 给输入框添加后置标签                                                                                   | <font color=#d35400>React.Node</font> | -         |
| border       | 是否有边框                                                                                             | <font color=#d35400>Boolean</font>    | `true`    |
| maxLength    | 最大的输入长度                                                                                         | <font color=#d35400>Number</font>     | -         |
| addonSubmit  | 给输入框添加确定按钮                                                                                   | <font color=#d35400>String</font>     | -         |
| disabled     | 是否禁用输入框                                                                                         | <font color=#d35400>Boolean</font>    | `false`   |
| placeholder  | 给输入框添加提示文本                                                                                   | <font color=#d35400>String</font>     | -         |
| onChange     | 输入框内容发生改变时的回调                                                                             | <font color=#d35400>Function</font>   | -         |
| onPressEnter | 在输入框中点击回车或（设置了）点击确定按钮时的回调                                                     | <font color=#d35400>Function</font>   | -         |

### Textarea

| 属性        | 说明                                        | 类型                                | 默认值    |
| ----------- | ------------------------------------------- | ----------------------------------- | --------- |
| inpSize     | 设置文本域的大小                            | `default` &#124; `lg` &#124; `sm`   | `default` |
| type        | 使用 `textarea`则`type`属性必须为`textarea` | <font color=#d35400>String</font>   | `text`    |
| value       | 文本域的内容                                | <font color=#d35400>String</font>   | -         |
| rows        | 文本域的初始行数                            | <font color=#d35400>Number</font>   | -         |
| border      | 是否有边框                                  | <font color=#d35400>Boolean</font>  | `true`    |
| maxLength   | 最大的输入长度                              | <font color=#d35400>Number</font>   | -         |
| disabled    | 是否禁用文本域                              | <font color=#d35400>Boolean</font>  | `false`   |
| placeholder | 给文本域添加提示文本                        | <font color=#d35400>String</font>   | -         |
| onChange    | 输入框内容发生改变时的回调                  | <font color=#d35400>Function</font> | -         |
