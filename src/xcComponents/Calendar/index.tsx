import Taro, { PureComponent } from '@tarojs/taro'
import dayjs from 'dayjs'
import classNames from 'classnames'

import { View } from '@tarojs/components'
import XcArrow from '../Arrow'

import { computePreMonthRenderArr, computeCurrenMonthRenderArr, computeNexMonthRenderArr } from './utils'

import { DateRender } from './interface'
import DateRenderPro from './DateRenderPro'
import './index.scss'

type CalendarDate = Date | dayjs.Dayjs | string

type SetValue = (value: any) => void

type DateHooks = {
  setDisable: SetValue
  setNote: SetValue
}

export type UseDateHooks = (date: string, hooks: DateHooks) => void

type WantProps = {
  // event
  onSelect?(date: string[]): void
  onDateHooks?: UseDateHooks

  currentDate?: Date | dayjs.Dayjs | string
  start?: CalendarDate
  end?: CalendarDate
  isMultiSelect?: boolean
  format?: string
  currentMonthOnly?: boolean
  selectedDate?: string[]

  // them
  themColor?: string
}

type DefaultProps = {
  isMultiSelect: boolean
  format: string
  currentMonthOnly: boolean
  selectedDate: string[]
}

export type IProps = WantProps & DefaultProps

type IState = Readonly<{
  dateRender: dayjs.Dayjs
  preMonthRenderArr: DateRender[]
  currentMonthRenderArrPro: DateRenderPro[]
  nextMonthRenderArr: DateRender[]
  isStartMonth: boolean
  isEndMonth: boolean
}>

class XcCalendar extends PureComponent<IProps, IState> {
  static defaultProps: DefaultProps = {
    isMultiSelect: false,
    format: 'YYYY-MM-DD',
    currentMonthOnly: false,
    selectedDate: []
  }

  readonly state: IState = {
    dateRender: dayjs(),
    preMonthRenderArr: [],
    nextMonthRenderArr: [],
    isStartMonth: false,
    isEndMonth: false,
    currentMonthRenderArrPro: []
  }

  componentDidMount () {
    const { currentDate } = this.props
    if (currentDate) {
      this.setState(
        {
          dateRender: dayjs(currentDate)
        },
        this.genNewMonth
      )
    } else {
      this.genNewMonth()
    }
  }

  componentWillReceiveProps (nextProps: Props) {
    const { currentDate, onDateHooks } = this.props
    if (currentDate !== nextProps.currentDate || onDateHooks !== nextProps.onDateHooks) {
      this.setState({ dateRender: dayjs(nextProps.currentDate) }, this.genNewMonth)
    }
  }

  genNewMonth = () => {
    const { dateRender } = this.state
    const { start, end } = this.props

    let isStartMonth = false
    let isEndMonth = false
    const renderDateMonthStart = dateRender.startOf('month')
    const preMonthRenderArr = computePreMonthRenderArr(dateRender)
    const currentMonthRenderArr = computeCurrenMonthRenderArr(dateRender)
    const nextMonthRenderArr = this.props.currentMonthOnly ? [] : computeNexMonthRenderArr(dateRender)

    start &&
      (isStartMonth = dayjs(start)
        .startOf('month')
        .isSame(renderDateMonthStart))
    end &&
      (isEndMonth = dayjs(end)
        .startOf('month')
        .isSame(renderDateMonthStart))
    this.setState({
      preMonthRenderArr,
      currentMonthRenderArrPro: currentMonthRenderArr.map(item => this.computeRenderDatePro(item)),
      nextMonthRenderArr,
      isStartMonth,
      isEndMonth
    })
  }

  clickPreMonth = () => {
    const { start } = this.props
    const { dateRender } = this.state
    const preMonth = dateRender.subtract(1, 'month')
    if (start && dayjs(start).isAfter(preMonth)) return
    this.setState(
      {
        dateRender: preMonth
      },
      this.genNewMonth
    )
  }

  clickNextMonth = () => {
    const { end } = this.props
    const { dateRender } = this.state
    const nextMonth = dateRender.add(1, 'month')
    if (end && dayjs(end).isBefore(nextMonth)) return

    this.setState(
      {
        dateRender: nextMonth
      },
      this.genNewMonth
    )
  }

  clickItem = (date: string, isDisabled: boolean) => {
    if (isDisabled) return
    const { format, onSelect } = this.props
    const selectedDate = dayjs(date).format(format)
    onSelect && onSelect([selectedDate])
  }

  coumputeIsSelected = (date: string) => {
    const { selectedDate } = this.props
    const _date = dayjs(date)
    return selectedDate.length === 1
      ? _date.isSame(dayjs(selectedDate[0]), 'day')
      : _date.isBefore(dayjs(selectedDate[0]), 'day') && _date.isAfter(dayjs(selectedDate[1]), 'day')
  }

  computeRenderDatePro = (renderDate: DateRender) => {
    const { format, onDateHooks, start, end } = this.props
    const renderDatePro = new DateRenderPro(renderDate)
    const date = dayjs(renderDatePro.str)
    const dateStr = date.format(format)

    if ((start && date.isBefore(dayjs(start))) || (end && date.isAfter(dayjs(end)))) {
      renderDatePro.note = ''
      renderDatePro.disable = true
      return renderDatePro
    }

    // date hooks
    const setDisable: SetValue = _disable => (renderDatePro.disable = _disable)
    const setNote: SetValue = _note => (renderDatePro.note = _note)
    onDateHooks && onDateHooks(dateStr, { setDisable, setNote })
    return renderDatePro
  }

  render () {
    const { themColor, currentMonthOnly } = this.props
    const { dateRender, isStartMonth, isEndMonth } = this.state
    const renderYear = dateRender.year()
    const renderMonth = dateRender.month() + 1
    return (
      <View className='xc-calendar'>
        <View className='xc-calendar__title'>
          <View className='xc-calendar__month-switch'>
            {!isStartMonth && (
              <View
                className='xc-calendar__month-switch__button'
                style={`background-color: ${themColor}`}
                onClick={this.clickPreMonth}
              >
                <XcArrow degree={270} weight='2px' color='#fff' size='8px' />
              </View>
            )}
          </View>
          <View>
            {renderYear}年{renderMonth}月
          </View>
          <View className='xc-calendar__month-switch'>
            {!isEndMonth && (
              <View
                className='xc-calendar__month-switch__button'
                style={`background-color: ${themColor}`}
                onClick={this.clickNextMonth}
              >
                <XcArrow weight='2px' color='#fff' size='8px' />
              </View>
            )}
          </View>
        </View>
        <View className='xc-calendar__content'>
          <View className='xc-calendar__week'>
            <View className='xc-calendar__week__day'>一</View>
            <View className='xc-calendar__week__day'>二</View>
            <View className='xc-calendar__week__day'>三</View>
            <View className='xc-calendar__week__day'>四</View>
            <View className='xc-calendar__week__day'>五</View>
            <View className='xc-calendar__week__day'>六</View>
            <View className='xc-calendar__week__day'>日</View>
          </View>
          <View className='xc-calendar__dates'>
            {/* render pre month */}
            {this.state.preMonthRenderArr.map((date, index) => (
              <View key={index} className='xc-calendar__date xc-calendar__date--other-month'>
                {currentMonthOnly ? '' : date.date}
              </View>
            ))}

            {/* render current month */}
            {this.state.currentMonthRenderArrPro.map((date, index) => {
              const isSelected = this.coumputeIsSelected(date.str)
              const itemClass = classNames('xc-calendar__date', {
                'xc-calendar__date--disable': date.disable,
                'xc-calendar__date--selected': isSelected
              })
              const itemStyle = { backgroundColor: themColor }
              return (
                <View key={index} className={itemClass} onClick={this.clickItem.bind(this, date.str, date.disable)}>
                  <View> {date.date}</View>
                  {date.note && <View className='xc-calendar__date__note'>{date.note}</View>}
                  {isSelected && <View className='xc-calendar__date__bg--selected' style={itemStyle} />}
                </View>
              )
            })}

            {/* render next month */}
            {this.state.nextMonthRenderArr.map((date, index) => (
              <View key={index} className='xc-calendar__date xc-calendar__date--other-month'>
                {this.props.currentMonthOnly ? '' : date.date}
              </View>
            ))}
          </View>
        </View>
      </View>
    )
  }
}

export type Props = JSX.LibraryManagedAttributes<typeof XcCalendar, XcCalendar["props"]>

export default XcCalendar
