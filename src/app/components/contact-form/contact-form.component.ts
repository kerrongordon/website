import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { NotificationService } from '../../services/notification/notification.service'
import { EmailService, Email } from '../../services/email/email.service'
import { TimestampService } from '../../services/timestamp/timestamp.service'
import { MarkdownService } from '../../services/markdown/markdown.service'

@Component({
  selector: 'kgp-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass'],
  providers: [NotificationService, EmailService, TimestampService, MarkdownService]
})
export class ContactFormComponent implements OnInit {

  public inputClass1 = ''
  public inputClass2 = ''
  public inputClass3 = ''
  public inputClass4 = ''

  public emailForm: FormGroup
  public markdown: string

  constructor(
    private _NotificationService: NotificationService,
    private _EmailService: EmailService,
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

  public textToMarkDown(text) {
    return this.markdown = this._MarkdownService.convert(text)
  }

  public onSubmit() {
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

    return this._EmailService.addEmail(getId, emailPush)
            .then(() => this.messageWasSend(userName))
            .then(() => this.resetEmailForm())
  }

}
