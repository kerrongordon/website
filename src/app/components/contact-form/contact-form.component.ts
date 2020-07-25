import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass'],
})
export class ContactFormComponent implements OnInit {

  inputClass1 = '';
  inputClass2 = '';
  inputClass3 = '';
  inputClass4 = '';

  emailForm: FormGroup | undefined;
  markdown: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }




}
