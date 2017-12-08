import { Component, OnInit, OnDestroy } from '@angular/core'
import { ProjectService, Project } from '../../services/project/project.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'
import { fadeInOutImg } from '../../exports/animations'


@Component({
  selector: 'kgp-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
  providers: [ProjectService],
  animations: [fadeInOutImg],
})
export class ProjectComponent implements OnInit, OnDestroy {

  private reload: Subscription
  private pageSub: Subscription
  private ids: string
  public project: Project

  public fadeInState: string
  public fadeOutState: string

  constructor(
    private _avr: ActivatedRoute,
    private _ps: ProjectService,
    private _rt: Router
  ) {
    this.fadeInState = 'in'
    this.fadeOutState = 'out'
  }

  ngOnInit() {
    this.getPageId()
    this.pageReload()
  }

  pageReload() {
    return this.reload = this._avr.params.subscribe(data => {
      return Promise.all([
        this.pageSub.unsubscribe()
      ]).then(() => this.getPageId())
      .catch((error) => console.log(error))
    })
  }

  getPageId() {
    this.ids = this._avr.snapshot.params['id']
    return this.pageSub = this._ps.getProjectById(this.ids).subscribe(data => this.project = data)
  }

  isImgeLoad(e) {
    this.fadeInState = 'out'
    this.fadeOutState = 'in'
    return
  }

  ngOnDestroy() {
    this.pageSub.unsubscribe()
    this.reload.unsubscribe()
  }

}
