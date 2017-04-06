import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kg-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  complexForm: FormGroup;
  @Output() submitFormEmail = new EventEmitter;

  constructor(private fb: FormBuilder) {
    this.complexForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      'message': [null, Validators.compose([Validators.required, Validators.minLength(20)])]
    });
   }

  ngOnInit() { }

  submitForm(value): void {
    if (!value.name || !value.email || !value.message) { return; }
    if (this.complexForm.status === 'VALID') {
        this.submitFormEmail.emit(value);
        this.complexForm.reset();
        return;
    }
    return;
  }

}
