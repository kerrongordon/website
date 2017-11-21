import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'kgp-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.sass']
})
export class EmailListComponent implements OnInit {

  @Input() totalMail: number
  @Input() newMail: number
  @Input() readMail: number

  constructor() { }

  ngOnInit() {
  }

}
