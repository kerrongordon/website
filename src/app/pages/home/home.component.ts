import { Component, OnInit, OnDestroy } from '@angular/core'
import { DescriptionService } from '../../services/description/description.service'
import { SkillsService, Skills } from '../../services/skills/skills.service'
import { Subscription } from 'rxjs/Subscription'
import { ProjectService, Project } from '../../services/project/project.service'

@Component({
  selector: 'kgp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [DescriptionService, SkillsService, ProjectService]
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
  private projectSub: Subscription

  public projects: Project[]

  constructor(public docOb: DescriptionService, public skillOb: SkillsService, public projectOb: ProjectService) {
    this.skillSub = this.skillOb.skills.subscribe(data => this.skillsInit = data)
  }

  ngOnInit() {
    this.projectSub = this.projectOb.homePage().subscribe(data => this.projects = data.reverse())
  }

  ngOnDestroy() {
    this.docOb.docsSub.unsubscribe()
    this.skillSub.unsubscribe()
    this.projectSub.unsubscribe()
  }

}
