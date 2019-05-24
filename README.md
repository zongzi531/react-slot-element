# React Slot Element

>Learn Vue and implement Slot based on Web Components draft specification.

## Install

```bash
yarn add react-slot-element
```

## Quick Start

### 单个插槽

父组件模板：

```javascript
import React from 'react'
import { Slot } from 'react-slot-element'

class Parent extends React.Component {
  render () {
    return (<div>
      <h1>我是父组件的标题</h1>
      <Slot>只有在没有要分发的内容时才会显示。</Slot>
      <p>这是更多的内容</p>
    </div>)
  }
}

export default Slot.with(Parent)
```

插槽内容：

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <Parent>
    <h2>我是子组件的标题</h2>
    <p>这是一些初始内容</p>
  </Parent>,
  document.getElementById('root')
)
```

渲染结果：

```html
<div>
  <h1>我是父组件的标题</h1>
  <h2>我是子组件的标题</h2>
  <p>这是一些初始内容</p>
  <p>这是更多的内容</p>
</div>
```
