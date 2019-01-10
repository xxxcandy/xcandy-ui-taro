import Taro, { PureComponent } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'

import XcMask from '../Mask'

import './index.scss'

type OwnProps = {
  onClickMask?: Function
}
type DefaultProps = {
  show: boolean
}

type Props = OwnProps & DefaultProps

const defaultProps: DefaultProps = {
  show: false
}

class XcPopup extends PureComponent<Props> {
  static defaultProps: DefaultProps = defaultProps

  handleClickMask = () => {
    const { onClickMask } = this.props
    onClickMask && onClickMask()
  }

  render () {
    const contentClassNames = classnames('xc-popup__content', {
      'xc-popup__content--show': this.props.show
    })

    return (
      <XcMask show={this.props.show} onClick={this.handleClickMask}>
        <View className={contentClassNames}>{this.props.children}</View>
      </XcMask>
    )
  }
}

export default XcPopup
