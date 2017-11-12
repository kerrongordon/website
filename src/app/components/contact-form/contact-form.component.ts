import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { NotificationService } from '../../services/notification/notification.service'

@Component({
  selector: 'kgp-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass'],
  providers: [NotificationService]
})
export class ContactFormComponent implements OnInit {

  inputClass1: string = ''
  inputClass2: string = ''
  inputClass3: string = ''

  emailForm: FormGroup

  constructor(
    private _NotificationService: NotificationService
  ) { 

   }

  ngOnInit() {
    this.emailForm = new FormGroup({
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

  onSubmit() {
    if (!this.emailForm.valid) {
      return
    }

    const name = this.emailForm.value.userName
    const email = this.emailForm.value.userEmail
    const message = this.emailForm.value.userMessage

    this._NotificationService.notifitem(name, 'Your Message was send', true)
    console.log('emailForm', this.emailForm.value)
  }

}
