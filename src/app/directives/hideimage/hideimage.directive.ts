import { Directive, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[resizevent]'
})
export class HideimageDirective {

  @HostListener('window:resize', ['$event'])
    dragover(event) {
      this.getWindowWidth(event)
    }

  @Output() inwidth: EventEmitter<any> = new EventEmitter(); 

  constructor(
    private _elementRef: ElementRef
  ) { 
    console.log(this._elementRef.nativeElement);
   }

  private getWindowWidth(e) {
    return this.inwidth.emit(e.target.innerWidth)
  }

}
