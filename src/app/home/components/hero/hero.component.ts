import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { moveIn } from '../../../router.animations';

@Component({
  selector: 'kg-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass'],
  animations: [moveIn()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() { }

}
