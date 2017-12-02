import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'kgp-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressbarComponent {
  @Input() level: string
}
