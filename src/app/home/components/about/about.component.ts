import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { moveIn } from '../../../router.animations';

@Component({
  selector: 'kg-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
  animations: [moveIn()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  @Input() description: string;
  @Input() skills: any;

  constructor() { }

  ngOnInit() {
  }

}
