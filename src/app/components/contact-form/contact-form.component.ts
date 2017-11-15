import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { NotificationService } from '../../services/notification/notification.service'
import { EmailService } from '../../services/email/email.service'

@Component({
  selector: 'kgp-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass'],
  providers: [NotificationService, EmailService]
})
export class ContactFormComponent implements OnInit {

  public inputClass1: string = ''
  public inputClass2: string = ''
  public inputClass3: string = ''

  public emailForm: FormGroup

  constructor(private _NotificationService: NotificationService, private _EmailService: EmailService ) { }

  ngOnInit() {
    this.formInit()
  }

  private formInit() {
    return this.emailForm = new FormGroup({
      userName: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(3)]),
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

  public onSubmit() {
    if (!this.emailForm.valid) { return }

    const { userName } = this.emailForm.value

    return this._EmailService.emailCollection
            .add(this.emailForm.value)
            .then(() => this.messageWasSend(userName))
            .then(() => this.resetEmailForm())
  }

}
