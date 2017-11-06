import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kgp-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent {
  @Input() title: string
}
