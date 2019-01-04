import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'

import './index.scss'

type OwnProps = {
  onClick?: () => void
}

type DefaultProps = {
  show: boolean
}

type Props = OwnProps & DefaultProps

const defaultProps: DefaultProps = {
  show: false
}

class XcMask extends Taro.Component<Props> {
  static defaultProps: DefaultProps = defaultProps

  config: Taro.Config = {}

  shouldComponentUpdate (nextProps) {
    if (nextProps === this.props.show) {
      return false
    } else {
      return true
    }
  }

  handleClick = () => {
    const { onClick } = this.props
    onClick && onClick()
  }

  catchContentClick = (e) => {
    e.stopPropagation()
  }

  render () {
    const { show } = this.props
    const maskFloorClassNames = classnames('xc-mask__floor', {
      'xc-mask__floor--show': show
    })
    const maskLayerClassNames = classnames('xc-mask__layer', {
      'xc-mask__layer--show': show
    })
    return (
      <View>
        {/* 分两层避免背景层透明度和动画影响内容区 */}
        <View className={maskFloorClassNames} />
        <View className={maskLayerClassNames} onClick={this.handleClick}>
          <View onClick={this.catchContentClick}>{this.props.children}</View>
        </View>
      </View>
    )
  }
}

export default XcMask
