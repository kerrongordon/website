import { Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser/'

@Pipe({
  name: 'urlsan'
})
export class UrlsanPipe implements PipeTransform {

  constructor(private domSan: DomSanitizer) {}

  transform(value: any, args?: any): any {
    return this.domSan.bypassSecurityTrustHtml(value)
  }

}
