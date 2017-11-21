import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { email } from '../../services/email/email.service'

@Component({
  selector: 'kgp-email-body',
  templateUrl: './email-body.component.html',
  styleUrls: ['./email-body.component.sass']
})
export class EmailBodyComponent implements OnInit {

  @Input() data: email
  @Output() delete = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  deleteItem(id) {
    return this.delete.emit(id)
  }

}
