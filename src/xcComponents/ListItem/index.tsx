import Taro, { PureComponent } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

type OwnProps = {
  onClick?: () => void

  arrow?: boolean
  disable?: boolean
}

type DefaultProps = {}

type Props = OwnProps & DefaultProps

class XcListItem extends PureComponent<Props> {
  handleClick = () => {
    const { onClick, disable } = this.props
    !disable && onClick && onClick()
  }

  render () {
    const { arrow } = this.props
    const arrowStyle = {
      transform: `rotate(45deg)`
    }
    return (
      <View className='xc-list-item' onClick={this.handleClick}>
        <View className='xc-list-item__wrap'>
          <View className='xc-list-item__content'>{this.props.children}</View>
          {arrow && (
            <View className='xc-list-item__action'>
              <View className='xc-list-item__arrow' style={arrowStyle} />
            </View>
          )}
          <View className='xc-list-item__border' />
        </View>
      </View>
    )
  }
}

export default XcListItem
