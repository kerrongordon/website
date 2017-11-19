import { Component, OnInit, OnDestroy } from '@angular/core'
import { EmailService, email } from '../../services/email/email.service'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

export interface MailLength {
  totalMail: number,
  newMail: number,
  readMail: number
}

@Component({
  selector: 'kgp-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.sass'],
  providers: [EmailService]
})
export class EmailComponent implements OnInit, OnDestroy {
  
  public activeItem: string = ''
  public openMail: email
  public mailList: email[]
  
  public mailLength: MailLength
  
  private openmailSub: Subscription
  private mailListSub: Subscription
  
  constructor(private _EmailService: EmailService) { }

  ngOnInit() {
    this.loadMail()
  }

  loadMail() {
    return this.mailListSub = this._EmailService.loadEmail()
      .subscribe( email => {
        this.mailList = email
        this.mailLength = {
          totalMail: email.length,
          newMail: email.filter(e => e.open === false).length,
          readMail: email.filter(e => e.open === true).length
        }
      })
  }

  openEmail(id) {
    if (!id) return 
    this.activeItem = id
    return this.openmailSub = this._EmailService.openEmail(id)
      .subscribe( email => this.openMail = email[0] )
  }

  ngOnDestroy() {
    this.openmailSub.unsubscribe()
  }

}
