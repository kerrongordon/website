import { Component, OnInit } from '@angular/core'
import { EmailService, email } from '../../services/email/email.service'

@Component({
  selector: 'kgp-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.sass'],
  providers: [EmailService]
})
export class EmailComponent implements OnInit {

  public activeItem: string = ''

  constructor(public _EmailService: EmailService) { }

  ngOnInit() {
    this._EmailService.getNumberOfNewEmail()
  }

  openEmail(id) {
    if (!id) return 
    this.activeItem = id
    return this._EmailService.openEmail(id)
  }

}
