import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import Card from '@components/Card'
import XcGroup from '@xcComponents/Group'
import XcListItem from '@xcComponents/ListItem'
import XcArrow from '@xcComponents/Arrow'

import './index.scss'

const routes = [
  {
    name: '布局',
    pages: [
      {
        name: 'Group 组',
        url: '/pages/layout/group/index'
      },
      {
        name: 'ListItem 列表',
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
      },
      {
        name: 'InfiniteScroll 无限滚动',
        url: '/pages/action/infiniteScroller/index'
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
      <View className='page page-home'>
        <View className='header'>XCandy-Taro-UI</View>
        <View className='badges'>
          <Image
            className='badges__item'
            mode='aspectFit'
            src='https://img.shields.io/npm/v/@xcandy/ui-taro.svg?style=flat-square'
          />
          <Image
            className='badges__item'
            mode='aspectFit'
            src='https://travis-ci.org/xxxcandy/xcandy-ui-taro.svg?branch=master'
          />
        </View>
        <View className='components'>
          {routes.map(kind => (
            <Card key={kind.name} title={kind.name}>
              <XcGroup>
                {kind.pages.map(component => (
                  <XcListItem
                    key={component.name}
                    border
                    borderColor='#f9f9f9'
                    onClick={this.viewComponent.bind(this, component.url)}
                    renderAction={<XcArrow />}
                  >
                    <View className='list-item'>{component.name}</View>
                  </XcListItem>
                ))}
              </XcGroup>
            </Card>
          ))}
        </View>
      </View>
    )
  }
}
