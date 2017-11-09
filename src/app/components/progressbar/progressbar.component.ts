import { Component, Input } from '@angular/core'

@Component({
  selector: 'kgp-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.sass'],
})
export class ProgressbarComponent {
  @Input() level: string
}
