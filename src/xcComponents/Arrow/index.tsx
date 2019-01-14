import Taro, { PureComponent } from '@tarojs/taro'
import { View } from '@tarojs/components'

import ComputeTransform from './computeTransform'

type OwnProps = {
  degree?: number
  offsetDegree?: number
  className?: string
  size?: string
  weight?: string
  color?: string

  onClick?: (e: HTMLElement) => void
}

type DefaultProps = {
  weight: string
  color: string
  size: string
}

type Props = DefaultProps & OwnProps

type State = {
  trans: string
}
const defaultProps: DefaultProps = {
  weight: '1px',
  color: '#dedede',
  size: '10px'
}

class XcArrow extends PureComponent<Props, State> {
  static defaultProps: DefaultProps = defaultProps

  computeTransform = new ComputeTransform()

  handleClick = (e) => {
    const { onClick } = this.props
    onClick && onClick(e)
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
