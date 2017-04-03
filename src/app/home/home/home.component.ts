import { Component, OnInit, HostBinding } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { fadeInOut } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'kg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [DatabaseService],
  animations: [fadeInOut()]
})
export class HomeComponent implements OnInit {

  public infor: any;
  public skills: any;
  public portfolios: any;

  constructor(private data: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.getTitleAndDescription();
    this.getSkills();
    this.getPortfolios();

    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
        window.scroll(0, 0);
    });
  }

  private getTitleAndDescription() {
    return this.data.getNameAndDescription().subscribe(infor => this.infor = infor);
  }

  private getSkills() {
    return this.data.getSkills().subscribe(skills => this.skills = skills);
  }

  private getPortfolios() {
    return this.data.getPortfolios().subscribe(data => {
      this.portfolios = data.filter((el, index) => index < 4);
    });
  }

}
