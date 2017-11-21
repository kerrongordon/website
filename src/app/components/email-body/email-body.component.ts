import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Email } from '../../services/email/email.service'

@Component({
  selector: 'kgp-email-body',
  templateUrl: './email-body.component.html',
  styleUrls: ['./email-body.component.sass']
})
export class EmailBodyComponent implements OnInit {

  @Input() data: Email
  @Output() delete = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  deleteItem(id) {
    return this.delete.emit(id)
  }

}
