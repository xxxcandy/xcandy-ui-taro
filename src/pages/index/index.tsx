import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Card from '@components/Card'
import XcGroup from '@xcComponents/Group'
import XcListItem from '@xcComponents/ListItem'
import XcArrow from '@xcComponents/Arrow'

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

  render() {
    return (
      <View className='page'>
        {routes.map(kind => (
          <Card key={kind.name} title={kind.name}>
            <XcGroup>
              {kind.pages.map(component => (
                <XcListItem
                  key={component.name}
                  onClick={this.viewComponent.bind(this, component.url)}
                  renderAction={<XcArrow />}
                >
                  <View>{component.name}</View>
                </XcListItem>
              ))}
            </XcGroup>
          </Card>
        ))}
      </View>
    )
  }
}
