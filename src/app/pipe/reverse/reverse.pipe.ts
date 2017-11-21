import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'reverse',
  pure: true
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if (value === null) {return}
    return value.reverse()
  }

}
