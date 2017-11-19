import { Component, OnInit, Input } from '@angular/core'
import { email } from '../../services/email/email.service'

@Component({
  selector: 'kgp-email-list-item',
  templateUrl: './email-list-item.component.html',
  styleUrls: ['./email-list-item.component.sass']
})
export class EmailListItemComponent implements OnInit {

  @Input() data: email
 
  constructor() { }

  ngOnInit() {
  }

}
