import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import DetailLayout from '@components/DetailLayout'
import Card from '@components/Card'

import XcGroup from '@xcComponents/Group'
import ListItem from '@xcComponents/ListItem'

const GroupPage = () => {
  return (
    <DetailLayout>
      <Card title='Group简介'>Group 组件主要用于配合 ListItem 等组件使用，来避免如 ListItem 组件多余的 border。</Card>
      <Card title='ListItem 组件在没有 Group 组件的情况下'>
        <ListItem border>1</ListItem>
        <ListItem border>2</ListItem>
        <View>
          可以看到，第二个组件的 border 多余了，由于小程序中不支持部分 css 选择器，所以用常用 Group 配合其他组件使用。
        </View>
      </Card>
      <Card title='Group & ListItem'>
        <XcGroup>
          <ListItem border>1</ListItem>
          <ListItem border>2</ListItem>
        </XcGroup>
      </Card>
    </DetailLayout>
  )
}

export default GroupPage
