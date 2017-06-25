import { Component, OnInit, Input, ViewChild, OnChanges, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kg-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit, OnChanges, AfterViewInit {

  public visibility = 'shown';
  private contentBody: HTMLElement;
  private bodyId: HTMLElement;
  private searchId: HTMLElement;
  private footerId: HTMLElement;

  @Input() isVisible : boolean = true;
  @Input() title: string;

  // buttons 
  @Input() color: string;
  
  @Input() btn1text: string;
  @Input() btn2text: string;
  @Input() btn1icon: string;
  @Input() btn2icon: string;

  @Output() btn1action = new EventEmitter();
  @Output() btn2action = new EventEmitter();

  @ViewChild('pageId') pageId;

  constructor() { }

  ngOnInit() {  }

  ngOnChanges() {
   this.isVisibility();
   this.toggleClass();
  }

  ngAfterViewInit() {
    this.getBodyId();
    this.getSearchId();
    this.getContentBody();
    this.getFooterId();
    // console.log(this.pageId.nativeElement.value);
  }

  private getBodyId() {
    return this.bodyId = document.getElementById('body');
  }

  private getSearchId() {
    return this.searchId = document.getElementById('search');
  }

  private getContentBody() {
    return this.contentBody = document.getElementById('contentBody');
  }

  private getFooterId() {
    return this.footerId = document.getElementById('footer');
  }

  private isVisibility() {
    return this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  private toggleClass() {
    if (this.contentBody === null || this.contentBody === undefined) { return }

    if (this.visibility === 'shown') {
      this.addBlur();
      this.disableScroll();
    }
    if (this.visibility === 'hidden') {
      this.removeBlur();
      this.enableScroll();
    }
    
  }

  private addBlur() {
    // this.searchId.classList.add('blur');
    // this.contentBody.classList.add('blur');
    // this.footerId.classList.add('blur');
    // this.pageId.nativeElement.classList.add('blur');
    return;
  }

  private removeBlur() {
    // this.searchId.classList.remove('blur');
    // this.contentBody.classList.remove('blur');
    // this.footerId.classList.remove('blur');
    // this.pageId.nativeElement.classList.remove('blur');
    // console.log(this.pageId);
    return;
  }

  private disableScroll() {
    return this.bodyId.style.overflow = 'hidden';
  }

  private enableScroll() {
    return this.bodyId.style.overflow = '';
  }

  public action1() {
    return this.btn1action.emit();
  }

  public action2() {
    return this.btn2action.emit();
  }

}
