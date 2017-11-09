import { Directive, ElementRef } from '@angular/core'
import { Colors } from '../../exports/Colors'

@Directive({
  selector: '[Secondary]'
})
export class SecondaryDirective {

  constructor(
    private _ElementRef: ElementRef
  ) { 
    _ElementRef.nativeElement.style.background = Colors.secondary
   }

}