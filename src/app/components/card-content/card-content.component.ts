import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'kgp-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.sass']
})
export class CardContentComponent implements OnInit {

  @Input() ctitle: string
  @Input() content: string
  @Input() month: string
  @Input() day: number
  @Input() year: number

  constructor() { }

  ngOnInit() {
  }

}
