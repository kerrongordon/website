import { Component, OnInit, OnDestroy } from '@angular/core'
import { ProjectService } from '../../services/project/project.service'
import { projectplaceholder } from './../../exports/placeholder'
import { Subscription } from 'rxjs/Subscription'
import { Project } from '../../interface/Project'

@Component({
  selector: 'kgp-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit, OnDestroy {

  private projectSub: Subscription
  public projectsInit: Project[] = projectplaceholder

  constructor(private _ps: ProjectService) { }

  ngOnInit() {
    this.loadProjects()
  }

  loadProjects() {
    return this.projectSub = this._ps.loadListOfProjects().subscribe(data => this.projectsInit = data.reverse())
  }

  ngOnDestroy() {
    this.projectSub.unsubscribe()
  }

}
