import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Card from '@components/Card'
import XcDrawer from '@xcComponents/Drawer'

import './index.scss'

class DrawerPage extends Component {
  config: Taro.Config = {
    navigationBarTitleText: 'Drawer 抽屉'
  }

  state = {
    showDrawer1: false,
    placement1: 'bottom',
    showDrawer2: false,
    placement2: 'right',
    showDrawer3: false
  }

  drawerSwitch1 = (placement?: 'top' | 'bottom') => {
    const { showDrawer1, placement1 } = this.state
    this.setState({
      showDrawer1: !showDrawer1,
      placement1: placement || placement1
    })
  }

  drawerSwitch2 = (placement?: 'left' | 'right') => {
    const { showDrawer2, placement2 } = this.state
    this.setState({
      showDrawer2: !showDrawer2,
      placement2: placement || placement2
    })
  }

  drawerSwitch3 = () => {
    const { showDrawer3 } = this.state
    this.setState({
      showDrawer3: !showDrawer3
    })
  }

  render() {
    const { showDrawer1, placement1, showDrawer2, placement2, showDrawer3 } = this.state
    return (
      <View className='page'>
        <Card title='基础用法'>
          <View onClick={this.drawerSwitch1.bind(this, 'bottom')}>点击开启 - bottom</View>
          <View onClick={this.drawerSwitch1.bind(this, 'top')}>点击开启 - top</View>

          <View onClick={this.drawerSwitch2.bind(this, 'right')}>点击开启 - right - 点击mask区域不能关闭</View>
          <View onClick={this.drawerSwitch2.bind(this, 'left')}>点击开启 - left - 点击mask区域不能关闭</View>

          <View onClick={this.drawerSwitch3}>点击开启 - right - 没有mask区域</View>
        </Card>

        <XcDrawer show={showDrawer1} onClickMask={this.drawerSwitch1} placement={placement1}>
          <View className='drawer-content drawer-content-1'>
            <View onClick={this.drawerSwitch1.bind(this, '')}>你可以点击这里关闭</View>
            <View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
            </View>
          </View>
        </XcDrawer>

        <XcDrawer show={showDrawer2} placement={placement2}>
          <View className='drawer-content drawer-content-2'>
            <View onClick={this.drawerSwitch2.bind(this, '')}>你可以点击这里关闭</View>
            <View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
            </View>
          </View>
        </XcDrawer>

        <XcDrawer show={showDrawer3} placement='left' withoutMask>
          <View className='drawer-content drawer-content-3'>
            <View onClick={this.drawerSwitch3}>你可以点击这里关闭</View>
            <View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
              <View>content</View>
            </View>
          </View>
        </XcDrawer>
      </View>
    )
  }
}

export default DrawerPage
