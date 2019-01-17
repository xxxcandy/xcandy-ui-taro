import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'

import './index.scss'

type OwnProps = {
  onClickMask?: () => void
}

type DefaultProps = {
  show: boolean
}

type Props = OwnProps & DefaultProps

const defaultProps: DefaultProps = {
  show: false
}

class XcMask extends Component<Props> {
  static defaultProps: DefaultProps = defaultProps

  handleMaskClick = () => {
    const { onClickMask } = this.props
    onClickMask && onClickMask()
  }

  render () {
    const { show } = this.props
    const maskClassNames = classnames('xc-mask', {
      'xc-mask--show': show
    })
    const maskInterlayerClassNames = classnames('xc-mask__interlayer', {
      'xc-mask__interlayer--show': show
    })
    return (
      <View className={maskClassNames}>
        {/* interlayer 用于触发对mask区域的点击，为了避免mask在关闭的动画过程中，用户再次点击仍然触发handleMaskClick */}
        <View className={maskInterlayerClassNames} onClick={this.handleMaskClick} />
        {this.props.children}
      </View>
    )
  }
}

export default XcMask
