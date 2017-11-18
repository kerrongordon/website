import { Component, OnInit } from '@angular/core'
import { EmailService } from '../../services/email/email.service'

@Component({
  selector: 'kgp-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.sass'],
  providers: [EmailService]
})
export class EmailComponent implements OnInit {

  constructor(public _EmailService: EmailService) { }

  ngOnInit() {
    
  }

}
