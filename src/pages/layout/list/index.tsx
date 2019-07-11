import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import XcGroup from '@xcComponents/Group'
import XcListItem from '@xcComponents/ListItem'
import XcArrow from '@xcComponents/Arrow'
import Card from '@components/Card'

class ListPage extends Component {
  render() {
    return (
      <View className='page'>
        <Card title='基础'>
          <XcGroup leftIndent>
            <XcListItem renderAction={<XcArrow />}>带箭头</XcListItem>
          </XcGroup>
        </Card>
        <Card title='嵌套'>
          <XcGroup leftIndent>
            <XcListItem>1</XcListItem>
            <XcListItem>2</XcListItem>
            <XcListItem>
              <XcGroup leftIndent>
                <XcListItem>1</XcListItem>
                <XcListItem>2</XcListItem>
                <XcListItem>3</XcListItem>
                <XcListItem>4</XcListItem>
                <XcListItem>5</XcListItem>
              </XcGroup>
            </XcListItem>
            <XcListItem>4</XcListItem>
            <XcListItem>5</XcListItem>
          </XcGroup>
        </Card>
      </View>
    )
  }
}

export default ListPage
