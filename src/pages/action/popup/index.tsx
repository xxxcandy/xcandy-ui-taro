import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import XcPopup from '@xcComponents/Popup'
import XcCard from '@xcComponents/Card'

class PopupPage extends Taro.Component {
  static config: Taro.Config = {
    navigationBarTitleText: 'Popup'
  }

  state = {
    showPopup: false
  }

  popupSwitch = () => {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  render () {
    return (
      <View className='page'>
        <XcCard title='基础用法'>
          <View onClick={this.popupSwitch}>点击开启</View>
        </XcCard>

        <XcPopup show={this.state.showPopup} onClickMask={this.popupSwitch}>
          <View className='popup-content__1'>
            <View onClick={this.popupSwitch}>你可以点击这里关闭</View>
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
        </XcPopup>
      </View>
    )
  }
}

export default PopupPage
