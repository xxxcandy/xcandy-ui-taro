import Taro, { useState, useEffect, useCallback } from '@tarojs/taro'
import { View } from '@tarojs/components'

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
  className?: string

  onClick?: () => void
} & typeof defaultProps

const XcArrow = (props: Props) => {
  const { className, color, size, weight, degree, offsetDegree, onClick } = props
  const [computeTransform] = useState(new ComputeTransform())
  const [trans, setTrans] = useState('')

  useEffect(() => {
    setTrans(computeTransform.compute({ degree, offsetDegree }))
  }, [degree, offsetDegree])

  const handleClick = useCallback(() => {
    onClick && onClick()
  }, [onClick])

  const finalStyle = {
    borderStyle: 'solid',
    borderColor: color,
    borderWidth: `${weight} ${weight} 0 0`,
    width: size,
    height: size,
    transform: trans,
    margin: `${size}` // 为了解决css实现的箭头旋转后超出原本在文档流中的位置
  }

  return <View style={finalStyle} className={className} onClick={handleClick} />
}
XcArrow.defaultProps = defaultProps

export default Taro.memo(XcArrow)
