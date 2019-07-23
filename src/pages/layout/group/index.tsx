import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import DetailLayout from '@components/DetailLayout'
import Card from '@components/Card'

import XcGroup from '@xcComponents/Group'
import ListItem from '@xcComponents/ListItem'

const GroupPage = () => {
  return (
    <DetailLayout>
      <Card title='Group简介'>Group组件主要用于配合ListItem等组件使用，来避免如ListItem组件多余的border。</Card>
      <Card title='ListItem组件在没有Group组件的情况下'>
        <ListItem border>1</ListItem>
        <ListItem border>2</ListItem>
        <View>
          可以看到，第二个组件的border多余了，由于小程序中不支持部分css选择器，所以用常用Group配合其他组件使用。
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
