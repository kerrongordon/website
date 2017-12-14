import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs/Subscription'
import { ProjectService } from '../../services/project/project.service'
import { Project } from '../../interface/Project'

@Component({
  selector: 'kgp-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.sass']
})
export class HeaderBarComponent implements OnInit {

  searchTitle: Project[]
  searchContent: Project[]
  toggleSearchClass = false

  private delay: any
  private projects: Project[]
  private searchSub: Subscription

  constructor(private _ps: ProjectService ) { }

  ngOnInit() {
  }

  focusSearch() {
    this.toggleSearchClass = true
    return this.loadProjects()
  }

  blurSearch() {
    return this.delay = setTimeout(() => {
      this.toggleSearchClass = false
      this.clearOut()
      this.searchSub.unsubscribe()
      clearTimeout(this.delay)
    }, 200)
  }

  private loadProjects() {
    return this.searchSub = this._ps.loadListOfProjects().subscribe(data => this.projects = data)
  }

  search(val: string) {
    if (val === '') { return }
    const value = val.toLocaleLowerCase()
    return Promise.all([
      this.projects
    ]).then(() => {
      this.searchTitle = this.projects.filter(sh => sh.title.toLocaleLowerCase().indexOf(value) > -1 ).filter((el, index) => index < 6 )
      this.searchContent = this.projects.filter(sh => sh.content.toLocaleLowerCase().indexOf(value) > -1 ).filter((el, index) => index < 6 )
    })
  }

  private clearOut() {
    this.searchTitle = null
    this.searchContent = null
  }

}
