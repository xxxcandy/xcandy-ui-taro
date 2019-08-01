import Taro, { useCallback } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'

import { isFunction } from '@utils/utils'

import './index.scss'

export type Props = {
  leftIndent?: boolean
  rightIndent?: boolean
  children?: any
} & XcCommonProps

const XcGroup = (props: Props) => {
  const { leftIndent, rightIndent, onClick, children } = props

  const groupClassnames = classnames('xc-group', {
    'xc-group--indent-left': leftIndent,
    'xc-group--indent-right': rightIndent
  })

  const clickHandler = useCallback(() => {
    isFunction(onClick) && onClick!()
  }, [onClick])

  return (
    <View className={groupClassnames} onClick={clickHandler}>
      {children}
    </View>
  )
}

export default XcGroup
