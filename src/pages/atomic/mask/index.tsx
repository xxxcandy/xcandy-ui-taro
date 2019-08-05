import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import XcMask from '@xcComponents/Mask'
import Card from '@components/Card'

import './index.scss'

class MaskPage extends Taro.Component {
  state = {
    show1: false,
    show2: false
  }

  config: Taro.Config = {
    navigationBarTitleText: '遮罩 Mask'
  }

  maskSwitch1 = () => {
    const { show1 } = this.state
    this.setState({
      show1: !show1
    })
  }

  maskSwitch2 = () => {
    const { show2 } = this.state
    this.setState({
      show2: !show2
    })
  }

  render() {
    const { show1, show2 } = this.state
    return (
      <View className='page mask-page'>
        <Card title='基础用法'>
          <View onClick={this.maskSwitch1}>点击mask区域可以关闭</View>
          <View onClick={this.maskSwitch2}>点击mask区域不可关闭</View>
        </Card>
        <XcMask show={show1} onClick={this.maskSwitch1} />
        <XcMask show={show2}>
          <View className='mask-content' onClick={this.maskSwitch2}>
            点我才可以关闭哦
          </View>
        </XcMask>
      </View>
    )
  }
}

export default MaskPage
