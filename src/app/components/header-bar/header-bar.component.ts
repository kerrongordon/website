import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'kgp-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.sass']
})
export class HeaderBarComponent implements OnInit {

  public toggleSearchClass = false

  constructor() { }

  ngOnInit() {
  }

  toggleSearch() {
    return this.toggleSearchClass = !this.toggleSearchClass
  }

}
