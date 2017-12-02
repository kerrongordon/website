import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { Email } from '../../services/email/email.service'

@Component({
  selector: 'kgp-email-body',
  templateUrl: './email-body.component.html',
  styleUrls: ['./email-body.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailBodyComponent {

  @Input() data: Email
  @Output() delete = new EventEmitter()

  deleteItem(id) {
    return this.delete.emit(id)
  }

}
