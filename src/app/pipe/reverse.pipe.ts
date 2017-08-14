import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if (value === null) return
    return value.reverse();
  }

}
