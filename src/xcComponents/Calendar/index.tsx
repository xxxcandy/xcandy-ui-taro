import Taro, { PureComponent } from '@tarojs/taro'
import dayjs from 'dayjs'
import classNames from 'classnames'

import { View } from '@tarojs/components'
import XcArrow from '../Arrow'

import { computePreMonthRenderArr, computeCurrenMonthRenderArr, computeNexMonthRenderArr } from './utils'

import { RenderDate } from './interface'
import RenderDatePro from './RenderDatePro'
import './index.scss'

type CalendarDate = Date | dayjs.Dayjs | string

type SetValue = (value: any) => void

type DateHooks = {
  setIsDisable: SetValue
  setNote: SetValue
}

export type UseDateHooks = (date: string, hooks: DateHooks) => void

type OwnProps = {
  // event
  onSelect?(date: string[]): void
  onComputeDateDisable?(date: string, setDisable: (disable: boolean) => void): void
  onComputeDateNote?(date: string, setNote: (note: string) => void): void
  onDateHooks?: UseDateHooks

  firstRenderDate?: Date | dayjs.Dayjs | string
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

export type Props = OwnProps & DefaultProps

type State = Readonly<{
  renderDate: dayjs.Dayjs
  preMonthRenderArr: RenderDate[]
  currentMonthRenderArrPro: RenderDatePro[]
  nextMonthRenderArr: RenderDate[]
}>

class XcCalendar extends PureComponent<Props, State> {
  constructor (props) {
    super(props)
  }

  static defaultProps: DefaultProps = {
    isMultiSelect: false,
    format: 'YYYY-MM-DD',
    currentMonthOnly: false,
    selectedDate: []
  }

  static config: Taro.Config = {}

  readonly state: State = {
    renderDate: dayjs(),
    preMonthRenderArr: [],
    nextMonthRenderArr: [],
    currentMonthRenderArrPro: []
  }

  componentDidMount () {
    if (this.props.firstRenderDate) {
      this.setState(
        {
          renderDate: dayjs(this.props.firstRenderDate)
        },
        this.renderNewMonth
      )
    } else {
      this.renderNewMonth()
    }
  }

  componentWillReceiveProps (nextProps) {
    // renderDefault
    const { firstRenderDate } = this.props
    if (!firstRenderDate && nextProps.firstRenderDate) {
      this.setState({ renderDate: dayjs(nextProps.firstRenderDate) }, this.renderNewMonth)
    }
  }

  renderNewMonth = () => {
    const currentRenderDate = this.state.renderDate
    const preMonthRenderArr = computePreMonthRenderArr(currentRenderDate)
    const currentMonthRenderArr = computeCurrenMonthRenderArr(currentRenderDate)
    const nextMonthRenderArr = this.props.currentMonthOnly ? [] : computeNexMonthRenderArr(currentRenderDate)

    this.setState({
      preMonthRenderArr,
      currentMonthRenderArrPro: currentMonthRenderArr.map(item => this.computeRenderDatePro(item)),
      nextMonthRenderArr
    })
  }

  clickPreMonth = () => {
    if (
      dayjs(this.state.renderDate)
        .startOf('month')
        .isSame(dayjs(this.props.start).startOf('month'))
    ) {
      return Taro.showToast({ title: '已经到底了' })
    }
    this.setState(
      {
        renderDate: this.state.renderDate.subtract(1, 'month')
      },
      this.renderNewMonth
    )
  }

  clickNextMonth = () => {
    if (
      this.props.end &&
      dayjs(this.state.renderDate)
        .startOf('month')
        .isSame(dayjs(this.props.end).startOf('month'))
    ) {
      return Taro.showToast({ title: '已经到底了' })
    }

    this.setState(
      {
        renderDate: this.state.renderDate.add(1, 'month')
      },
      this.renderNewMonth
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

  computeRenderDatePro = (renderDate: RenderDate) => {
    const renderDatePro = new RenderDatePro(renderDate)
    const { format, onComputeDateDisable, onComputeDateNote, onDateHooks } = this.props
    const dateStr = dayjs(renderDatePro.str).format(format)
    const setIsDisable: SetValue = _isDisable => (renderDatePro.isDisable = _isDisable)
    const setNote: SetValue = _note => (renderDatePro.note = _note)
    onDateHooks && onDateHooks(dateStr, { setIsDisable, setNote })

    // TODO: 即将移除
    onComputeDateDisable && onComputeDateDisable(dateStr, setIsDisable)
    onComputeDateNote && onComputeDateNote(dateStr, setNote)
    return renderDatePro
  }

  render () {
    const renderYear = this.state.renderDate.year()
    const renderMonth = this.state.renderDate.month() + 1
    const { themColor, currentMonthOnly } = this.props
    return (
      <View className='xc-calendar'>
        <View className='xc-calendar__title'>
          <View
            className='xc-calendar__month-siwtch-btn'
            style={`background-color: ${themColor}`}
            onClick={this.clickPreMonth}
          >
            <XcArrow degree={270} weight='2px' color='#fff' size='8px' />
          </View>
          <View>
            {renderYear}年{renderMonth}月
          </View>
          <View
            className='xc-calendar__month-siwtch-btn'
            style={`background-color: ${themColor}`}
            onClick={this.clickNextMonth}
          >
            <XcArrow weight='2px' color='#fff' size='8px' />
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
                'xc-calendar__date--disable': date.isDisable,
                'xc-calendar__date--selected': isSelected
              })
              const itemStyle = { backgroundColor: themColor }
              return (
                <View key={index} className={itemClass} onClick={this.clickItem.bind(this, date.str, date.isDisable)}>
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

export default XcCalendar
