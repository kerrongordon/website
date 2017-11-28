import { Component, OnInit, OnDestroy } from '@angular/core'
import { DescriptionService } from '../../services/description/description.service'
import { SkillsService, Skills } from '../../services/skills/skills.service'
import { Subscription } from 'rxjs/Subscription'
import { ProjectService, Project } from '../../services/project/project.service'
import { skillplaceh, projectplaceh } from './../../exports/placeholder'

@Component({
  selector: 'kgp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [DescriptionService, SkillsService, ProjectService]
})
export class HomeComponent implements OnInit, OnDestroy {

  public skillsInit: Skills[] = [
    skillplaceh,
    skillplaceh,
    skillplaceh,
    skillplaceh,
    skillplaceh,
    skillplaceh,
    skillplaceh,
    skillplaceh
  ]

  private skillSub: Subscription
  private projectSub: Subscription

  public projects: Project[]
  public projectsInit: Project[] = [
    projectplaceh,
    projectplaceh,
    projectplaceh,
    projectplaceh
  ]

  constructor(public docOb: DescriptionService, public skillOb: SkillsService, public projectOb: ProjectService) {

  }

  ngOnInit() {
    this.skillSub = this.skillOb.skills.subscribe(data => this.skillsInit = data)
    this.projectSub = this.projectOb.homePage().subscribe(data => this.projectsInit = data.reverse().slice(0, 4))
  }

  ngOnDestroy() {
    this.docOb.docsSub.unsubscribe()
    this.skillSub.unsubscribe()
    this.projectSub.unsubscribe()
  }

}
