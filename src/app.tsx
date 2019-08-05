import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
  require('nerv-devtools')
}

class App extends Component {
  config: Taro.Config = {
    pages: [
      'pages/index/index',
      'pages/layout/list/index',
      'pages/layout/group/index',
      'pages/action/drawer/index',
      'pages/calendar/index',
      'pages/atomic/mask/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
