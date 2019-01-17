import Taro, { Component } from '@tarojs/taro'

import { View } from '@tarojs/components'

import './index.scss'

export type Props = {
  title?: string
}

class XcCard extends Component<Props> {
  render () {
    const { title } = this.props

    return (
      <View className='xc-card'>
        {title && <View className='xc-card__title'>{title}</View>}
        {this.props.children}
      </View>
    )
  }
}

export default XcCard
