import Taro, { useCallback, useMemo } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'
import { isFunction } from '@utils/utils'

import './index.scss'

const defaultProps = {
  show: false,
  maskBackgroundColor: '',
  animationDuration: ''
}

export type Props = {
  show: boolean
  maskBackgroundColor?: string
  children?: any
} & typeof defaultProps &
  XcCommonProps

const XcMask = (props: Props) => {
  const { show, maskBackgroundColor, onClick, children } = props

  const maskStyle = useMemo(() => {
    return {
      backgroundColor: show ? maskBackgroundColor : ''
    }
  }, [maskBackgroundColor, show])

  const maskClassnames = classnames('xc-mask', {
    'xc-mask--show': show
  })

  const maskInterlayerClassnames = classnames('xc-mask__interlayer', {
    'xc-mask__interlayer--show': show
  })

  const clickHandler = useCallback(() => {
    isFunction(onClick) && onClick!()
  }, [onClick])

  return (
    <View className={maskClassnames} style={maskStyle}>
      {/* interlayer 用于触发对mask区域的点击，为了避免mask在关闭的动画过程中，用户再次点击仍然触发handleMaskClick */}
      <View className={maskInterlayerClassnames} onClick={clickHandler} />
      {children}
    </View>
  )
}

XcMask.defaultProps = defaultProps

export default XcMask
