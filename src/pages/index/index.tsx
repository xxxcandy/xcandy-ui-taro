import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import XcCard from '@xcComponents/Card'
import XcList from '@xcComponents/List'
import XcListItem from '@xcComponents/ListItem'

const routes = [
  {
    name: '布局',
    pages: [
      {
        name: 'List 列表',
        url: '/pages/layout/list/index'
      }
    ]
  },
  {
    name: '原子组件',
    pages: [
      {
        name: 'Mask 遮罩',
        url: '/pages/atomic/mask/index'
      }
    ]
  },
  {
    name: '操作',
    pages: [
      {
        name: 'Drawer 抽屉',
        url: '/pages/action/drawer/index'
      }
    ]
  },
  {
    name: '高级组件',
    pages: [
      {
        name: 'Calendar 日历组件',
        url: '/pages/calendar/index'
      }
    ]
  }
]

export default class Index extends Component {
  config: Taro.Config = {
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
