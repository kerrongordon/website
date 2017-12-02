import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs/Subscription'
import { ProjectService, Project } from '../../services/project/project.service'

@Component({
  selector: 'kgp-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.sass']
})
export class HeaderBarComponent implements OnInit {
  delay: any

  public searchContent: Project[]
  public searchTitle: Project[]
  lData: void | Subscription

  public toggleSearchClass = false
  searchSub: Subscription

  projects: Project[]

  constructor(private _ps: ProjectService ) { }

  ngOnInit() {
  }

  toggleSearch() {
    this.toggleSearchClass = !this.toggleSearchClass

    this.delay = setTimeout(() => {
      if (this.toggleSearchClass === false) {
        this.clearOut()
      }
      clearTimeout(this.delay)
    }, 200)
  }

  toggleSearchSub() {
    return this.lData = !this.lData ? this.loadProjects() : this.loadProjects().unsubscribe()
  }

  loadProjects() {
    return this.searchSub = this._ps.loadListOfProjects().subscribe(data => this.projects = data)
  }

  search(val: string) {
    if (val === '') { return }
    const value = val.toLocaleLowerCase()
    Promise.all([
      this.projects
    ]).then(() => {
      this.searchTitle = this.projects.filter(sh => sh.title.toLocaleLowerCase().indexOf(value) > -1 ).filter((el, index) => index < 6 )
      this.searchContent = this.projects.filter(sh => sh.content.toLocaleLowerCase().indexOf(value) > -1 ).filter((el, index) => index < 6 )
    }).catch((error) => console.log(error) )
  }

  clearOut() {
    this.searchTitle = null
    this.searchContent = null
    this.loadProjects().unsubscribe()
  }


}
