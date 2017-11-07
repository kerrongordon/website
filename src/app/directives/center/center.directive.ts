import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[Center]'
})
export class CenterDirective {

  constructor(
    private _ElementRef: ElementRef
  ) { 
    _ElementRef.nativeElement.style.display = 'flex'
    _ElementRef.nativeElement.style.alignItems = 'center'
    _ElementRef.nativeElement.style.justifyContent = 'space-around'
   }

}
