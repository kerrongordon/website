import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Container]'
})
export class ContainerDirective {

  constructor(
    private _ElementRef: ElementRef
  ) { 
    _ElementRef.nativeElement.style.margin = '0 auto'
    _ElementRef.nativeElement.style.maxWidth = '90rem'
    _ElementRef.nativeElement.style.position = 'relative'
    _ElementRef.nativeElement.style.padding = '0.01em 20px'
   }

}
