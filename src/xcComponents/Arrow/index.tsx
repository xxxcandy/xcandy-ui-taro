import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import ComputeTransform from './computeTransform'

type OwnProps = {
  degree?: number
  offsetDegree?: number
  className?: string

  onClick?: (e: HTMLElement) => void
}

type DefaultProps = {
  weight: string
  color: string
  size: string
}

type Props = DefaultProps & OwnProps

class XcArrow extends Component<Props> {
  static defaultProps: DefaultProps = {
    weight: '1px',
    color: '#dedede',
    size: '10px'
  }

  computeTransform = new ComputeTransform()

  handleClick = (e) => {
    const { onClick } = this.props
    onClick && onClick(e)
  }

  shouldComponentUpdate (nextProps: Props) {
    return Object.keys(nextProps).some(key => nextProps[key] !== this.props[key])
  }

  render () {
    const { className, color, size, weight, degree, offsetDegree } = this.props
    const trans = this.computeTransform.compute({ degree: degree || degree === 0 ? degree : 90, offsetDegree })
    const finalStyle = {
      borderStyle: 'solid',
      borderTopColor: color,
      borderRightColor: color,
      borderWidth: `${weight} ${weight} 0 0`,
      width: size,
      height: size,
      transform: trans
    }
    return <View style={finalStyle} className={className} />
  }
}

export default XcArrow
