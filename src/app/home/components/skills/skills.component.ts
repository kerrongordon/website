import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kg-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit {

   @Input() skills: any;

  constructor() { }

  ngOnInit() {
  }

}
