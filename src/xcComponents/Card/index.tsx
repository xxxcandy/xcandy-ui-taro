import Taro from '@tarojs/taro'

import { View } from '@tarojs/components'

import './index.scss'

type OwnProps = {
  title?: string
}
type DefaultProps = {}
type Props = OwnProps & DefaultProps

class XcCard extends Taro.Component<Props> {
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
