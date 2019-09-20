现在让我们来使用真正的官方版本的 Redux 和 React-redux。

在工程目录下使用 npm 安装 Redux 和 React-redux 模块：

```bash
npm install redux react-redux --save
```

把 src/ 目录下 Header.js、ThemeSwitch.js、Content.js 的模块导入中的：

```javascript
import { connect } from './react-redux'
```

改成：

```javascript
import { connect } from 'react-redux'
```

也就是本来从本地 ./react-redux 导入的 connect 改成从第三方 react-redux 模块中导入。

修改 src/index.js，把前面部分的代码调整为：

```javascript
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Header from './Header'
import Content from './Content'
import './index.css'

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer)
```

我们删除了自己写的 createStore，改成使用第三方模块 redux 的 createStore；Provider 本来从本地的 ./react-redux 引入，改成从第三方 react-redux 模块中引入。其余代码保持不变。

接着删除 src/react-redux.js，它的已经用处不大了。最后启动工程 npm start

可以看到我们原来的业务代码其实都没有太多的改动，实际上我们实现的 redux 和 react-redux 和官方版本在该场景的用法上是兼容的。