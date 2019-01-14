import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'

import XcMask from '../Mask'

import './index.scss'

const placements = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left'
}
type OwnProps = {
  onClickMask?: Function
}
type DefaultProps = {
  show: boolean
  placement: string
}

type Props = OwnProps & DefaultProps

const defaultProps: DefaultProps = {
  show: false,
  placement: 'bottom'
}

class XcDrawer extends Component<Props> {
  static defaultProps: DefaultProps = defaultProps

  handleClickMask = () => {
    const { onClickMask } = this.props
    onClickMask && onClickMask()
  }

  render () {
    const { placement, show } = this.props

    const placementClassName = `xc-drawer__content--${placements[placement] || placements.bottom}`
    const contentClassNames = classnames('xc-drawer__content', placementClassName, {
      [`${placementClassName}--show`]: show
    })
    return (
      <XcMask show={show} onClickMask={this.handleClickMask}>
        <View className={contentClassNames}>{this.props.children}</View>
      </XcMask>
    )
  }
}

export default XcDrawer
