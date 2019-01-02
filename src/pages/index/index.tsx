import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }

  viewCalendar() {
    Taro.navigateTo({
      url: '/pages/calendar/index'
    })
  }

  render() {
    return (
      <View className='index'>
        <View onClick={this.viewCalendar}>日历组件</View>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
