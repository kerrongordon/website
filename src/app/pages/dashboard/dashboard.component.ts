import { Component, OnInit, OnDestroy } from '@angular/core'
import { EmailService } from '../../services/email/email.service'

@Component({
  selector: 'kgp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [EmailService]
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(public _EmailService: EmailService) { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
   
  }
  
}
