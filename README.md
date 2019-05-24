# React Slot Element

[![license](https://img.shields.io/github/license/zongzi531/react-slot-element.svg)](https://github.com/zongzi531/react-slot-element/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/zongzi531/react-slot-element.svg?branch=master)](https://travis-ci.org/zongzi531/react-slot-element)

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

### 具名插槽

父组件模板：

```javascript
import React from 'react'
import Slot from 'react-slot-element'

class Parent extends React.Component {
  render () {
    return (<div className="container">
      <header>
        <Parent name="header"></Parent>
      </header>
      <main>
        <Parent></Parent>
      </main>
      <footer>
        <Parent name="footer"></Parent>
      </footer>
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
    <h1 slot="header">这里可能是一个页面标题</h1>
    <p>主要内容的一个段落。</p>
    <p>另一个主要段落。</p>
    <p slot="footer">这里有一些联系信息</p>
  </Parent>,
  document.getElementById('root')
)
```

渲染结果：

```html
<div class="container">
  <header>
    <h1>这里可能是一个页面标题</h1>
  </header>
  <main>
    <p>主要内容的一个段落。</p>
    <p>另一个主要段落。</p>
  </main>
  <footer>
    <p>这里有一些联系信息</p>
  </footer>
</div>
```
