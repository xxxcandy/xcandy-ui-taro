import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import dayjs from 'dayjs'

import Card from '@components/Card'
import XcCalendar, { UseDateHooks } from '@xcComponents/Calendar'

const format = 'YYYY/MM/DD'
const nowDate = dayjs()
const currentDate = nowDate.add(1, 'month').format(format)
const start = nowDate.subtract(3, 'month').format(format)
const end = nowDate.add(3, 'month').format(format)

class CalendarPage extends Component {
  state = {
    calendarSelected_1: [],
    calendarSelected_2: [nowDate.add(1, 'day').format(format)]
  }

  config: Taro.Config = {
    navigationBarTitleText: 'Calendar 日历'
  }

  select1 = (date: string[]) => {
    this.setState({
      calendarSelected_1: date
    })
  }

  select2 = (date: string[]) => {
    this.setState({
      calendarSelected_2: date
    })
  }

  useDateHooks: UseDateHooks = (date, { setDisable, setNote }) => {
    const day = new Date(date).getDay()
    if (day === 6 || day === 0) {
      setDisable(true)
      setNote('休息')
    }
  }

  render () {
    return (
      <View className='page'>
        <Card title='基础展示'>
          <View>默认无选中，只允许单选</View>
          <View>当前选中 {this.state.calendarSelected_1[0] || '无'}</View>
          <XcCalendar onSelect={this.select1} selectedDate={this.state.calendarSelected_1} />
        </Card>
        <Card title='高级用法'>
          <View>不显示前后月</View>
          <View>格式化为`YYYY/MM/DD`</View>
          <View>将周末设置为不可被选中,并设置备注</View>
          <View>设置主题色为红色</View>
          <View>设置选中日期为当日后一天</View>
          <View>设置结束、开始日期为当日前后3个月</View>
          <View>设置第一次渲染为当日延后一月</View>
          <View>当前选中 {this.state.calendarSelected_2[0] || '无'}</View>
          <XcCalendar
            start={start}
            end={end}
            currentDate={currentDate}
            onSelect={this.select2}
            selectedDate={this.state.calendarSelected_2}
            onDateHooks={this.useDateHooks}
            format='YYYY/MM/DD'
            currentMonthOnly
            themColor='red'
          />
        </Card>
      </View>
    )
  }
}

export default CalendarPage
