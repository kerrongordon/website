import { Component, OnInit, OnDestroy } from '@angular/core'
import { EmailService, email } from '../../services/email/email.service'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

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
  
  public toggleMobile: boolean = false
  private openmailSub: Subscription
  
  constructor(public _EmailService: EmailService) { }

  ngOnInit() {
   
  }

  openEmail(id) {
    if (!id) return 
    this.activeItem = id
    this.toggleMobileBtn()
    return this.openmailSub = this._EmailService.openEmail(id)
      .subscribe( email => this.openMail = email[0] )
  }

  toggleMobileBtn() {
    return this.toggleMobile = !this.toggleMobile ? true : false
  }

  closeOpenMail() {
    return this.toggleMobileBtn()
  }

  deleteItem(id) {
    return this._EmailService.deleteEmail(id)
  }

  ngOnDestroy() {
    this.openmailSub.unsubscribe()
  }


}
