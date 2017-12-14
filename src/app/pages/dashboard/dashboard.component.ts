import { Component, OnInit, OnDestroy } from '@angular/core'
import { ProjectService } from '../../services/project/project.service'
import { SkillsService } from '../../services/skills/skills.service'
import { Subscription } from 'rxjs/Subscription'
import { MessagesService } from '../../services/messages/messages.service'
import { Project } from '../../interface/Project'

@Component({
  selector: 'kgp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [ProjectService, SkillsService, MessagesService]
})
export class DashboardComponent implements OnInit, OnDestroy {

  skillsNum = 0
  projectNum = 0
  messageNum= 0

  projects: Project[]

  private skillSub: Subscription
  private projectSub: Subscription
  private messageSub: Subscription

  constructor(
    private _ps: ProjectService,
    private _ss: SkillsService,
    private _ms: MessagesService
  ) { }

  ngOnInit() {
    this.loadSkills()
    this.loadProjects()
    this.loadMessages()
  }

  private loadProjects() {
    return this.projectSub = this._ps.loadListOfProjects()
      .subscribe(data => {
        this.projectNum = data.length
        this.projects = data.reverse().slice(0, 3)
      })
  }

  private loadSkills() {
    return this.skillSub = this._ss.loadListOfSkills()
      .subscribe(data => {
        this.skillsNum = data.length
      })
  }

  private loadMessages() {
    return this.messageSub = this._ms.loadMessage()
      .subscribe(data => {
        this.messageNum = data.length
      })
  }

  ngOnDestroy() {
    this.skillSub.unsubscribe()
    this.projectSub.unsubscribe()
    this.messageSub.unsubscribe()
  }

}
