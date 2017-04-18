import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kg-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionComponent {
  @Input() description: string;
}
