import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kg-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BtnComponent {

  @Input() type: string;
  @Input() icon: string;
  @Input() disabled: boolean;

  @Output() btnClick = new EventEmitter;

}
