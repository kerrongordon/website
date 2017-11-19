import { Component, OnInit, Input } from '@angular/core'
import { MailLength } from '../../pages/email/email.component'

@Component({
  selector: 'kgp-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.sass']
})
export class EmailListComponent implements OnInit {

  @Input() mailnum: MailLength

  constructor() { }

  ngOnInit() {
  }

}
