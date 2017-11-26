import { Component, OnInit, OnDestroy } from '@angular/core'
import { DescriptionService } from '../../services/description/description.service'
import { SkillsService, Skills } from '../../services/skills/skills.service'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'kgp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [DescriptionService, SkillsService]
})
export class HomeComponent implements OnInit, OnDestroy {

  private skillplaceh: Skills = { title: null, level: null }
  public skillsInit: Skills[] = [
    this.skillplaceh,
    this.skillplaceh,
    this.skillplaceh,
    this.skillplaceh,
    this.skillplaceh,
    this.skillplaceh,
    this.skillplaceh,
    this.skillplaceh
  ]

  private skillSub: Subscription

  constructor(public docOb: DescriptionService, public skillOb: SkillsService) {
    this.skillSub = this.skillOb.skills.subscribe(data => this.skillsInit = data)
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.docOb.docsSub.unsubscribe()
    this.skillSub.unsubscribe()
  }

}
