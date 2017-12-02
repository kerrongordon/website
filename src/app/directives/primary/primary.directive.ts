import { Directive, ElementRef } from '@angular/core'
import { Colors } from '../../exports/Colors'

@Directive({
  selector: '[kgpPrimary]'
})
export class PrimaryDirective {

  constructor(
    private _ElementRef: ElementRef
  ) {
    _ElementRef.nativeElement.style.backgroundColor = Colors.primary
   }

}
