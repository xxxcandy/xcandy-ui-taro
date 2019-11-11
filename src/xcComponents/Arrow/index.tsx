import Taro, { useState, useCallback, useMemo } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { isFunction } from '@utils/utils'
import ComputeTransform from './computeTransform'

const defaultProps = {
  weight: '1px',
  color: '#999',
  size: '8px',
  degree: 90
}

export type Props = {
  weight?: string
  color?: string
  size?: string
  degree?: number
  offsetDegree?: number
} & typeof defaultProps &
  XcCommonProps

const XcArrow = (props: Props) => {
  const { color, size, weight, degree, offsetDegree, onClick } = props
  const [computeTransform] = useState(() => new ComputeTransform())

  const trans = useMemo(() => {
    return computeTransform.compute({ degree, offsetDegree })
  }, [degree, offsetDegree, computeTransform])

  const clickHandler = useCallback(() => {
    isFunction(onClick) && onClick!()
  }, [onClick])

  const style = useMemo(() => {
    return {
      borderStyle: 'solid',
      borderColor: color,
      borderWidth: `${weight} ${weight} 0 0`,
      width: size,
      height: size,
      transform: trans,
      margin: `${size}` // 为了解决css实现的箭头旋转后超出原本在文档流中的位置
    }
  }, [color, weight, size, trans])

  return <View style={style} onClick={clickHandler} />
}

XcArrow.defaultProps = defaultProps

export default Taro.memo(XcArrow)
