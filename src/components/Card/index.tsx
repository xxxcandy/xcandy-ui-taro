import Taro from '@tarojs/taro'

import { View } from '@tarojs/components'

import './index.scss'

export type Props = {
  title?: string
  children: any
}

const Card = (props: Props) => {
  const { title, children } = props
  return (
    <View className='card'>
      {title && <View className='card__title'>{title}</View>}
      {children}
    </View>
  )
}

export default Card
