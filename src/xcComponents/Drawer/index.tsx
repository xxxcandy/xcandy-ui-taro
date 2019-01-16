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
  mask: boolean
}

type Props = OwnProps & DefaultProps

const defaultProps: DefaultProps = {
  show: false,
  mask: true,
  placement: 'bottom'
}

class XcDrawer extends Component<Props> {
  static defaultProps: DefaultProps = defaultProps

  handleClickMask = () => {
    const { onClickMask } = this.props
    onClickMask && onClickMask()
  }

  render () {
    const { placement, show, mask } = this.props

    const placementClassName = `xc-drawer__content--${placements[placement] || placements.bottom}`
    const contentClassNames = classnames('xc-drawer__content', placementClassName, {
      'xc-drawer__content--no-mask': !mask,
      [`${placementClassName}--show`]: show
    })
    return (
      <View className='xc-drawer'>
        {mask ? (
          <XcMask show={show} onClickMask={this.handleClickMask}>
            <View className={contentClassNames}>{this.props.children}</View>
          </XcMask>
        ) : (
          <View className={contentClassNames}>{this.props.children}</View>
        )}
      </View>
    )
  }
}

export default XcDrawer
