import { Component, OnInit, OnDestroy } from '@angular/core'
import { MessagesService } from '../../services/messages/messages.service'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import { Email } from '../../interface/email'

@Component({
  selector: 'kgp-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.sass'],
  providers: [MessagesService]
})
export class EmailComponent implements OnInit, OnDestroy {

  private messagesSub: Subscription
  private openMessageSub: Subscription

  messages: Email[]
  openMassageItem: Email

  readMessage: number
  newMessage: number
  totalMessage: number

  activeItem = ''
  toggleMobile = false

  constructor(
    private _sm: MessagesService
  ) { }

  ngOnInit() {
    this.loadMessages()
  }

  loadMessages() {
    return this.messagesSub = this._sm.loadMessage()
      .subscribe(data => {
        this.messages = data
        this.totalMessage = data.length
        this.newMessage = data.filter(e => e.open === false).length
        this.readMessage = data.filter(e => e.open === true).length
      })
  }

  openMessage(id) {
    if (!id) {return}
    this.activeItem = id
    this.toggleMobileBtn()
    return this.openMessageSub = this._sm.openMessage(id)
      .subscribe(data => this.openMassageItem = data[0])
  }

  deleteMessage(id) {
    return this._sm.deleteMessage(id)
  }

  toggleMobileBtn() {
    return this.toggleMobile = !this.toggleMobile ? true : false
  }

  closeOpenMail() {
    return this.toggleMobileBtn()
  }

  ngOnDestroy() {
    this.messagesSub.unsubscribe()
    if (this.openMessageSub) { this.openMessageSub.unsubscribe() }
  }

}
