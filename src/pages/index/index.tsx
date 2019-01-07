import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

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

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }

  viewComponent = (url: string) => {
    Taro.navigateTo({
      url
    })
  }

  render () {
    return (
      <View className='page'>
        {routes.map(kind => (
          <XcCard key={kind.name} title={kind.name}>
            <XcList>
              {kind.pages.map(component => (
                <XcListItem arrow key={component.name} onClick={this.viewComponent.bind(this, component.url)}>
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
