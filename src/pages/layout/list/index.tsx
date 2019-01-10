import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import XcList from '@xcComponents/List'
import XcListItem from '@xcComponents/ListItem'
import XcCard from '@xcComponents/Card'

class ListPage extends Component {
  render () {
    return (
      <View className='page'>
        <XcCard title='基础'>
          <XcList leftIndent>
            <XcListItem arrow>带箭头</XcListItem>
          </XcList>
        </XcCard>
        <XcCard title='嵌套'>
          <XcList leftIndent>
            <XcListItem>1</XcListItem>
            <XcListItem>2</XcListItem>
            <XcListItem>
              <XcList leftIndent>
                <XcListItem>1</XcListItem>
                <XcListItem>2</XcListItem>
                <XcListItem>3</XcListItem>
                <XcListItem>4</XcListItem>
                <XcListItem>5</XcListItem>
              </XcList>
            </XcListItem>
            <XcListItem>4</XcListItem>
            <XcListItem>5</XcListItem>
          </XcList>
        </XcCard>
      </View>
    )
  }
}

export default ListPage
