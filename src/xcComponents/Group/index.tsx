import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'

import './index.scss'

export type Props = {
  leftIndent?: boolean
  rightIndent?: boolean
  children?: any
}

const XcGroup = function(props: Props) {
  const { leftIndent, rightIndent } = props
  const [groupClassnames, setGroupClassnames] = useState('xc-group')

  useEffect(() => {
    setGroupClassnames(
      classnames('xc-group', {
        'xc-group--indent-left': leftIndent,
        'xc-group--indent-right': rightIndent
      })
    )
  }, [leftIndent, rightIndent])

  return <View className={groupClassnames}>{props.children}</View>
}

export default XcGroup
