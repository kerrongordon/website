import { Component, OnInit, OnDestroy } from '@angular/core'
import { DescriptionService, Description } from '../../services/description/description.service'
import { SkillsService, Skills } from '../../services/skills/skills.service'
import { Subscription } from 'rxjs/Subscription'
import { ProjectService, Project } from '../../services/project/project.service'
import { skillsPlaceholder, projectplaceholder } from './../../exports/placeholder'

@Component({
  selector: 'kgp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [DescriptionService, SkillsService, ProjectService]
})
export class HomeComponent implements OnInit, OnDestroy {

  private skillSub: Subscription
  private projectSub: Subscription
  private desSub: Subscription
  public skillsInit: Skills[] = skillsPlaceholder
  public projectsInit: Project[] = projectplaceholder
  public des: Description

  contentLoaded = false

  constructor(
    private _ds: DescriptionService,
    private _ss: SkillsService,
    private _ps: ProjectService
  ) { }

  ngOnInit() {
    this.loadDes()
    this.loadSkills()
    this.loadProjects()
  }

  loadProjects() {
    return this.projectSub = this._ps.loadListOfProjects()
      .subscribe(data => {
        this.projectsInit = data.reverse().slice(0, 4)
        this.contentLoaded = true
      })
  }

  loadSkills() {
    return this.skillSub = this._ss.loadListOfSkills()
      .subscribe(data => this.skillsInit = data)
  }

  loadDes() {
    return this.desSub = this._ds.loadDes()
      .subscribe(data => this.des = data)
  }

  ngOnDestroy() {
    this.desSub.unsubscribe()
    this.skillSub.unsubscribe()
    this.projectSub.unsubscribe()
    this.contentLoaded = false
  }

}
