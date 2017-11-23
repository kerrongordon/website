import { Component, OnInit, Input } from '@angular/core'
import { fadeInOutImg } from '../../exports/animations'

@Component({
  selector: 'kgp-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.sass'],
  animations: [fadeInOutImg]
})
export class CardImageComponent implements OnInit {

  @Input() imge: string
  @Input() base64: string

  public fadeInState = 'in'
  public fadeOutState = 'out'

  constructor() { }

  ngOnInit() {  }

  isImgeLoad(e) {
    this.fadeInState = 'out'
    this.fadeOutState = 'in'
    return
  }

}
