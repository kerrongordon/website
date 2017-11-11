import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'kgp-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.sass']
})
export class CardImageComponent implements OnInit {

  @Input() imge: string

  constructor() { }

  ngOnInit() {
  }

}
