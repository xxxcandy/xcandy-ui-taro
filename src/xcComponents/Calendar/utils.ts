import dayjs from 'dayjs'
import { DateRender } from './interface'

const RENDER_DATE_TOTAL = 6 * 7

function getISODateStr (year: number, month: number, date: number) {
  return `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`
}

function computePreMonthRenderArr (currentRenderDate: dayjs.Dayjs) {
  const renderLen = currentRenderDate.startOf('month').day() - 1
  const renderArr: DateRender[] = []

  if (renderLen > 0) {
    const preMonth = currentRenderDate.startOf('month').subtract(1, 'day')
    const preMonthYear = preMonth.year()
    const preMonthMonth = preMonth.month() + 1
    let preMonthEndDate = preMonth.date()

    for (let i = 0; i < renderLen; i++) {
      renderArr.unshift({
        date: preMonthEndDate,
        str: dayjs(getISODateStr(preMonthYear, preMonthMonth, preMonthEndDate)).format('YYYY-MM-DD')
      })
      preMonthEndDate -= 1
    }
  }
  return renderArr
}

function computeCurrentMonthRenderArr (currentRenderDate: dayjs.Dayjs) {
  const renderLen = currentRenderDate.endOf('month').date()
  const renderArr: DateRender[] = []

  const year = currentRenderDate.year()
  const month = currentRenderDate.month() + 1

  for (let i = 1; i <= renderLen; i++) {
    renderArr.push({
      date: i,
      str: dayjs(getISODateStr(year, month, i)).format('YYYY-MM-DD')
    })
  }
  return renderArr
}

function computeNexMonthRenderArr (currentRenderDate: dayjs.Dayjs) {
  let preMonthDateCount = currentRenderDate.startOf('month').day()
  preMonthDateCount = preMonthDateCount > 0 ? preMonthDateCount - 1 : 0

  const currentMonthDateCount = currentRenderDate.endOf('month').date()

  const renderLen = RENDER_DATE_TOTAL - preMonthDateCount - currentMonthDateCount
  const renderArr: DateRender[] = []
  if (renderLen > 0) {
    const nextMonth = currentRenderDate.endOf('month').add(1, 'day')
    const nextMonthYear = nextMonth.year()
    const nextMonthMonth = nextMonth.month() + 1
    for (let i = 1; i <= renderLen; i++) {
      renderArr.push({
        date: i,
        str: dayjs(getISODateStr(nextMonthYear, nextMonthMonth, i)).format('YYYY-MM-DD')
      })
    }
  }
  return renderArr
}

export { getISODateStr, computePreMonthRenderArr, computeCurrentMonthRenderArr, computeNexMonthRenderArr }
