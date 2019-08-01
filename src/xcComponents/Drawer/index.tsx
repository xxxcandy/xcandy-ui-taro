import Taro, { useCallback } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'

import './'
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
  placement: 'bottom',
  withoutMask: false
}

export type Props = {
  show?: boolean
  placement?: Placement
  withoutMask?: boolean
  onClickMask?: () => void
  children?: any
} & typeof defaultProps &
  XcCommonProps

const XcDrawer = (props: Props) => {
  const { show, placement, withoutMask, onClickMask, children } = props

  const maskClassnames = classnames('xc-drawer', {
    'xc-drawer--show': show
  })

  const contentClassnames = classnames(
    'xc-drawer__content',
    `xc-drawer__content--${placements[placement] || placements.bottom}`,
    {
      'xc-drawer__content--no-mask': !withoutMask
    }
  )

  const maskClickHandler = useCallback(() => {
    onClickMask && onClickMask()
  }, [onClickMask])

  return (
    <View className={maskClassnames}>
      {withoutMask ? (
        <View className={contentClassnames}>{children}</View>
      ) : (
        <XcMask show={show} onClick={maskClickHandler}>
          <View className={contentClassnames}>{children}</View>
        </XcMask>
      )}
    </View>
  )
}

XcDrawer.defaultProps = defaultProps

export default XcDrawer
