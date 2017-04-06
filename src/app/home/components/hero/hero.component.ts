import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { fadeInOut } from '../../../router.animations';

@Component({
  selector: 'kg-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass'],
  animations: [fadeInOut()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {

  @Input() name: string;

}
