import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import XcCard from '@xcComponents/Card'
import XcList from '@xcComponents/List'
import XcListItem from '@xcComponents/ListItem'

const routes = [
  {
    name: '布局',
    pages: [
      {
        name: '列表',
        url: '/pages/layout/list/index'
      }
    ]
  },
  {
    name: '操作',
    pages: [
      {
        name: 'popup',
        url: '/pages/action/popup/index'
      }
    ]
  },
  {
    name: '高级组件',
    pages: [
      {
        name: '日历组件',
        url: '/pages/calendar/index'
      }
    ]
  }
]

const viewComponent = (url: string) => {
  Taro.navigateTo({
    url
  })
}
export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='page'>
        {routes.map(kind => (
          <XcCard key={kind.name} title={kind.name}>
            <XcList>
              {kind.pages.map(component => (
                <XcListItem arrow key={component.name} onClick={viewComponent.bind(this, component.url)}>
                  <View>{component.name}</View>
                </XcListItem>
              ))}
            </XcList>
          </XcCard>
        ))}
      </View>
    )
  }
}
