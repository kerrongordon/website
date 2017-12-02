import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'kgp-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailListComponent {
  @Input() totalMail: number
  @Input() newMail: number
  @Input() readMail: number
}
