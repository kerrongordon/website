import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DatabaseService } from '../../../services/database.service';

@Component({
  selector: 'kg-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  providers: [DatabaseService]
})
export class ContactComponent implements OnInit {

  complexForm: FormGroup;

  constructor(private fb: FormBuilder, private db: DatabaseService) {
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
        this.db.postEmail(value).subscribe(data => {
          this.complexForm.reset();
        });
        return;
    }
    return;
  }

}
