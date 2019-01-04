import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'

import './index.scss'

type Props = {
  leftIndent?: boolean
  rightIndent?: boolean
}

class XcList extends Taro.Component<Props> {
  render () {
    const { leftIndent, rightIndent } = this.props
    const classNames = classnames('xc-list', {
      'xc-list--left-indent': leftIndent,
      'xc-list--right-indent': rightIndent
    })

    return <View className={classNames}>{this.props.children}</View>
  }
}

export default XcList
