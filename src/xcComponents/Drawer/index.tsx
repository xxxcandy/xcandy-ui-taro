import Taro, { useState, useEffect, useCallback } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'

import XcMask from '../Mask'

import './index.scss'

type Placement = 'top' | 'right' | 'bottom' | 'left'

const placements = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left'
}

const defaultProps = {
  show: false,
  placement: 'top',
  withoutMask: false
}

export type Props = {
  show?: boolean
  placement?: Placement
  withoutMask: boolean
  onClickMask?: () => void
  children?: any
} & typeof defaultProps

const XcDrawer = (props: Props) => {
  const { show, placement, withoutMask, onClickMask, children } = props
  const [maskClassnames, setMaskClassnames] = useState('xc-drawer')
  const [contentClassnames, setContentClassnames] = useState('xc-drawer__content')

  useEffect(() => {
    setMaskClassnames(
      classnames('xc-drawer', {
        'xc-drawer--show': show
      })
    )
  }, [show])

  useEffect(() => {
    const placementClassnames = `xc-drawer__content--${placements[placement] || placements.bottom}`
    setContentClassnames(
      classnames('xc-drawer__content', placementClassnames, {
        'xc-drawer__content--no-mask': !withoutMask
      })
    )
  }, [placement, withoutMask])

  const handleClickMask = useCallback(() => {
    onClickMask && onClickMask()
  }, [onClickMask])

  return (
    <View className={maskClassnames}>
      {withoutMask ? (
        <View className={contentClassnames}>{children}</View>
      ) : (
        <XcMask show={show} onClickMask={handleClickMask}>
          <View className={contentClassnames}>{children}</View>
        </XcMask>
      )}
    </View>
  )
}

XcDrawer.defaultProps = defaultProps

export default XcDrawer
