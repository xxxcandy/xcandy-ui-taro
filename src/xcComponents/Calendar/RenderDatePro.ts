import { RenderDate } from './calendar'

class RenderDatePro {
  isDisable = false

  note = ''

  date: number

  str: string

  constructor (date: RenderDate) {
    this.date = date.date
    this.str = date.str
  }
}
export default RenderDatePro
