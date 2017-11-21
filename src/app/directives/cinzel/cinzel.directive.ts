import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[kgpCinzel]'
})
export class CinzelDirective {

  constructor(
    private _ElementRef: ElementRef
  ) {
    _ElementRef.nativeElement.style.fontFamily = 'Cinzel Decorative,cursive'
    _ElementRef.nativeElement.style.colors = 'inherit'
    _ElementRef.nativeElement.style.fontWeight = '400'
   }
}
