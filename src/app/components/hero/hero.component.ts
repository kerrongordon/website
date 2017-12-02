import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'kgp-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  @Input() title: string
}
