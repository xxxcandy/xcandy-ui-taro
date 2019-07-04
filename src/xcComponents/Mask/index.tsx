import Taro, { useCallback, useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'

import './index.scss'

const defaultProps = {
  show: false,
  maskBackgroundColor: '',
  animationDuration: ''
}

type Props = {
  show: boolean
  maskBackgroundColor?: string
  onClickMask?: () => void
  children?: any
} & typeof defaultProps

const XcMask = function(props: Props) {
  const { show, maskBackgroundColor, onClickMask, children } = props
  const [maskClassnames, setMaskClassnames] = useState('xc-mask')
  const [maskInterlayerClassnames, setMaskInterlayerClassnames] = useState('xc-mask__interlayer')
  const [maskStyle, setMaskStyle] = useState<string | { [key: string]: any }>('')

  useEffect(() => {
    setMaskStyle({
      'background-color': show ? maskBackgroundColor : ''
    })
  }, [maskBackgroundColor, show])

  useEffect(() => {
    setMaskClassnames(
      classnames('xc-mask', {
        'xc-mask--show': show
      })
    )
    setMaskInterlayerClassnames(
      classnames('xc-mask__interlayer', {
        'xc-mask__interlayer--show': show
      })
    )
  }, [show])

  const handleMaskClick = useCallback(() => {
    onClickMask && onClickMask()
  }, [onClickMask])

  return (
    <View className={maskClassnames} style={maskStyle}>
      {/* interlayer 用于触发对mask区域的点击，为了避免mask在关闭的动画过程中，用户再次点击仍然触发handleMaskClick */}
      <View className={maskInterlayerClassnames} onClick={handleMaskClick} />
      {children}
    </View>
  )
}

XcMask.defaultProps = defaultProps

export default XcMask
