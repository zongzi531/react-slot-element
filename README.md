# React Slot Element

>Learn [Vue.js](https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9) and implement **Slot** based on [Web Components draft specification](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md).

## Install

```bash
yarn add react-slot-element
```

## Quick Start

### 单个插槽

父组件模板：

```javascript
import React from 'react'
import Slot from 'react-slot-element'

class Parent extends React.Component {
  render () {
    return (<div>
      <h2>我是子组件的标题</h2>
      <Slot>
        只有在没有要分发的内容时才会显示。
      </Slot>
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
  <div>
    <h1>我是父组件的标题</h1>
    <Parent>
      <p>这是一些初始内容</p>
      <p>这是更多的初始内容</p>
    </Parent>
  </div>,
  document.getElementById('root')
)
```

渲染结果：

```html
<div>
  <h1>我是父组件的标题</h1>
  <div>
    <h2>我是子组件的标题</h2>
    <p>这是一些初始内容</p>
    <p>这是更多的初始内容</p>
  </div>
</div>
```
