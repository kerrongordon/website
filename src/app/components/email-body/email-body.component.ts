import { Component, OnInit, Input } from '@angular/core'
import { email } from '../../services/email/email.service'

@Component({
  selector: 'kgp-email-body',
  templateUrl: './email-body.component.html',
  styleUrls: ['./email-body.component.sass']
})
export class EmailBodyComponent implements OnInit {

  @Input() data: email

  constructor() { }

  ngOnInit() {
  }

}
