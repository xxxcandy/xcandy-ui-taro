import Taro, { useMemo, useCallback } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { isFunction } from '@utils/utils'

import './index.scss'

export type Props = {
  arrow?: boolean
  disable?: boolean
  border?: boolean
  borderColor?: string

  renderAction?: any
  children?: any
} & XcCommonProps

const XcListItem = (props: Props) => {
  const { disable, onClick, border, borderColor, children, renderAction } = props

  const borderStyle = useMemo(() => {
    return {
      borderColor: borderColor
    }
  }, [borderColor])

  const clickHandler = useCallback(() => {
    !disable && isFunction(onClick) && onClick!()
  }, [disable, onClick])

  return (
    <View className='xc-list-item' onClick={clickHandler}>
      <View className='xc-list-item__wrap'>
        <View className='xc-list-item__content'>{children}</View>
        <View className='xc-list-item__actions'>{renderAction}</View>
        {border && <View className='xc-list-item__border' style={borderStyle} />}
      </View>
    </View>
  )
}

export default XcListItem
