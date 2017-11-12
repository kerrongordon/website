import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'kgp-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {

  inputClass1: string = ''
  inputClass2: string = ''
  inputClass3: string = ''

  emailForm: FormGroup

  constructor( ) {  }

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
    console.log('emailForm', this.emailForm)
  }

}
