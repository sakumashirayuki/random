---
nav:
  title: Components
  path: /components
---

## Slider

滑动型输入器，展示当前值。

### 基本使用

当`disabled`为`true`时，滑块处于不可用状态

```tsx
import React, { useState } from 'react';
import { Slider, Switch } from 'random';

export default () => {
  const [inputValue, setInputValue] = useState(20);
  const [sliderAble, setSliderAble] = useState(true);
  const onChange = (value) => {
    setInputValue(value);
  };
  return (
    <>
      <p>当前值： {inputValue}</p>
      <Slider value={inputValue} onChange={onChange} disabled={!sliderAble} />
      <div style={{ display: 'flex' }}>
        <span style={{ marginRight: '1rem' }}>abled</span>
        <Switch size="sm" checked={sliderAble} onChange={setSliderAble} />
      </div>
    </>
  );
};
```

### 设置步长, 最小值，最大值

```tsx
import React, { useState } from 'react';
import { Slider, InputNumber } from 'random';

export default () => {
  const [step, setStep] = useState(0.1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [inputValue, setInputValue] = useState(55);
  const onChange = (value) => {
    setInputValue(value);
  };
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '1rem',
            marginBottom: '1rem',
          }}
        >
          <span style={{ marginRight: '4px' }}>步长</span>
          <InputNumber value={step} onChange={(value) => setStep(value)} />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '1rem',
            marginBottom: '1rem',
          }}
        >
          <span style={{ marginRight: '4px' }}>最小值</span>
          <InputNumber value={min} onChange={(value) => setMin(value)} />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '1rem',
            marginBottom: '1rem',
          }}
        >
          <span style={{ marginRight: '4px' }}>最大值</span>
          <InputNumber value={max} onChange={(value) => setMax(value)} />
        </div>
      </div>
      <p>当前值： {inputValue}</p>
      <Slider
        value={inputValue}
        onChange={onChange}
        step={step}
        min={min}
        max={max}
      />
    </>
  );
};
```

### 与 InputNumber 组件保持同步

```tsx
import React, { useState } from 'react';
import { Slider, InputNumber } from 'random';

export default () => {
  const [inputValue, setInputValue] = useState(20);
  const onChange = (value) => {
    setInputValue(value);
  };
  return (
    <>
      <InputNumber value={inputValue} onChange={onChange} />
      <Slider value={inputValue} onChange={onChange} />
    </>
  );
};
```

### 控制 tooltip 的展示

当`tooltipVisible`为`true`时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。

```tsx
import React, { useState } from 'react';
import { Slider, Switch } from 'random';

export default () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const onChange = (value) => {
    setInputValue(value);
  };
  return (
    <>
      <Slider tooltipVisible={tooltipVisible} />
      <div style={{ display: 'flex' }}>
        <span style={{ marginRight: '1rem' }}>show tooltip</span>
        <Switch
          size="sm"
          checked={tooltipVisible}
          onChange={setTooltipVisible}
        />
      </div>
    </>
  );
};
```

## API

| 属性           | 说明                                                                       | 类型                                               | 默认值 |
| -------------- | -------------------------------------------------------------------------- | -------------------------------------------------- | ------ |
| step           | 步长，取值必须大于 0                                                       | <font color=#d35400>number</font>                  | 1      |
| value          | 设置当前取值                                                               | <font color=#d35400>number</font>                  | -      |
| onChange       | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入 | <font color=#d35400>(value: number) => void</font> | -      |
| max            | 最大值                                                                     | <font color=#d35400>number</font>                  | 100    |
| min            | 最小值                                                                     | <font color=#d35400>number</font>                  | 0      |
| disabled       | 值为 true 时，滑块为禁用状态                                               | <font color=#d35400>boolean</font>                 | false  |
| tooltipVisible | 值为 true 时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时     | <font color=#d35400>boolean</font>                 | -      |
