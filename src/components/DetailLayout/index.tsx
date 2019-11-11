import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

const DetialLayout = props => {
  const { children, docsLink } = props

  function gotoDocs () {
    if (process.env.TARO_NEV === 'h5' && docsLink) {
      window.location.href = docsLink
    }
  }
  return (
    <View className='page'>
      <View className='comopnent-docs-link'>
        <Text className='comopnent-docs-link__title'>文档地址:</Text>
        <Text className='comopnent-docs-link__link' onClick={gotoDocs}>
          {docsLink || '暂无'}
        </Text>
      </View>
      <View>{children}</View>
    </View>
  )
}

export default DetialLayout
