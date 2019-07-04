import Taro, { useState, useEffect, useCallback } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export type Props = {
  onClick?: () => void

  arrow?: boolean
  disable?: boolean
  border?: boolean
  borderColor?: string

  renderAction?: any
  children?: any
}

const XcListItem = function(props: Props) {
  const { disable, onClick, border, borderColor, children, renderAction } = props
  const [borderStyle, setBorderStyle] = useState<string | { [key: string]: any }>('')

  const handleClick = useCallback(() => {
    !disable && onClick && onClick()
  }, [disable, onClick])

  useEffect(() => {
    setBorderStyle({
      'border-color': borderColor
    })
  }, [borderColor])

  return (
    <View className='xc-list-item' onClick={handleClick}>
      <View className='xc-list-item__wrap'>
        <View className='xc-list-item__content'>{children}</View>
        <View className='xc-list-item__action'>{renderAction}</View>
        {border && <View className='xc-list-item__border' style={borderStyle} />}
      </View>
    </View>
  )
}

export default XcListItem
