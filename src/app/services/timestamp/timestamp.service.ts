import { Injectable } from '@angular/core'
import Months from '../../exports/Months'
import Weekday from '../../exports/Weekday'

@Injectable()
export class TimestampService {

  private theDate: Date

  constructor() { }

  getTheDate() {
    this.theDate = new Date()
  }

  getTimestamp() {
    this.getTheDate()
    return this.theDate.getTime()
  }

  getTheMonth() {
    this.getTheDate()
    const month = this.theDate.getMonth()
    return Months[month]
  }

  getTheWeekday() {
    this.getTheDate()
    const day = this.theDate.getDay()
    return Weekday[day]
  }

  getTheYear() {
    this.getTheDate()
    return this.theDate.getFullYear()
  }

  getTheDateNum() {
    this.getTheDate()
    return this.theDate.getDate()
  }

  getTheTime() {
    this.getTheDate()

    const time = {
      hours: this.theDate.getHours(),
      minutes: this.theDate.getMinutes(),
      seconds: this.theDate.getSeconds(),
      Milliseconds: this.theDate.getMilliseconds()
    }

    return time
  }

}
