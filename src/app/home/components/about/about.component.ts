import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { fadeInOut } from '../../../router.animations';

@Component({
  selector: 'kg-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
  animations: [fadeInOut()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {

  @Input() description: string;
  @Input() skills: any;

}
