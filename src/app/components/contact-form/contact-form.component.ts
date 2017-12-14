import { Component, OnInit, Input } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { NotificationService } from '../../services/notification/notification.service'
import { TimestampService } from '../../services/timestamp/timestamp.service'
import { MarkdownService } from '../../services/markdown/markdown.service'
import { SendMessageService } from '../../services/send-message/send-message.service'
import { Email } from '../../interface/email'

@Component({
  selector: 'kgp-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass'],
  providers: [NotificationService, SendMessageService, TimestampService, MarkdownService]
})
export class ContactFormComponent implements OnInit {

  @Input() loading: boolean

  inputClass1 = ''
  inputClass2 = ''
  inputClass3 = ''
  inputClass4 = ''

  emailForm: FormGroup
  markdown: string

  constructor(
    private _NotificationService: NotificationService,
    private _sms: SendMessageService,
    private _TimestampService: TimestampService,
    private _MarkdownService: MarkdownService ) { }

  ngOnInit() {
    this.formInit()
  }

  private formInit() {
    return this.emailForm = new FormGroup({
      userName: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(3)]),
        updateOn: 'change'
      }),
      userSubject: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(5)]),
        updateOn: 'change'
      }),
      userEmail: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.email]),
        updateOn: 'change'
      }),
      userMessage: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(10)]),
        updateOn: 'change'
      })
    })
  }

  private messageWasSend(name) {
    return this._NotificationService.notifitem(
      'Message has Been Sent',
      `Hi ${name} your message was sent thank you`,
      true)
  }

  private resetEmailForm() {
    return this.emailForm.reset()
  }

  textToMarkDown(text) {
    return this.markdown = this._MarkdownService.convert(text)
  }

  onSubmit() {
    if (!this.emailForm.valid) { return }

    const { userName, userSubject, userEmail, userMessage } = this.emailForm.value
    const getId = this._TimestampService.getTheId()

    const emailPush: Email = {
      id: getId,
      name: userName,
      subject: userSubject,
      email: userEmail,
      message: userMessage,
      markdown: this.markdown,
      open: false,
      timestamp: {
        timestamp: this._TimestampService.getTimestamp(),
        month: this._TimestampService.getTheMonth(),
        weekday: this._TimestampService.getTheWeekday(),
        year: this._TimestampService.getTheYear(),
        date: this._TimestampService.getTheDateNum(),
        time: this._TimestampService.getTheTime()
      },
    }

    return this._sms.addEmail(getId, emailPush)
            .then(() => this.messageWasSend(userName))
            .then(() => this.resetEmailForm())
  }

}
