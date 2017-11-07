import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[Eshadow]'
})
export class EshadowDirective {

  constructor(
    private _ElementRef: ElementRef
  ) { 
    _ElementRef.nativeElement.style.boxShadow = 'inset 0 0 0 1px rgba(0,0,0,.24), inset 0 0 0 2px hsla(0,0%,100%,.1), inset 0 2px 0 0 hsla(0,0%,100%,.45), inset 0 -2px 0 0 hsla(0,0%,100%,.15), 0 1px 3px 0 rgba(0,0,0,.12), 0 1px 2px 0 transparent'
   }

}
