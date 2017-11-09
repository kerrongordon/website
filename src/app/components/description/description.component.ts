import { Component, Input } from '@angular/core'

@Component({
  selector: 'kgp-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass']
})
export class DescriptionComponent {
  @Input() content: string
}
