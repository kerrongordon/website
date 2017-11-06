import { Directive, ElementRef } from '@angular/core'
import { Colors } from '../../exports/Colors'

@Directive({
  selector: '[Primary]'
})
export class PrimaryDirective {

  constructor(
    private _ElementRef: ElementRef
  ) { 
    _ElementRef.nativeElement.style.background = Colors.primary
   }

}
