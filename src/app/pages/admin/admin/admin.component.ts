import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'kg-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers: [DatabaseService, AuthService]
})
export class AdminComponent implements OnInit {

  infor: any;
  public auth: any;
  public portfolios: any;
  public description: any;

  public toggleDes: string;
  public toggleDesp: string;

  constructor(private db: DatabaseService, private user: AuthService) { }

  ngOnInit() {
    this.userInfor();
    this.getPortfolios();
    this.userDescription();
  }

  public userInfor() {
  	return this.user.isAuth().subscribe(data => this.auth = data.google);
  }

  public getPortfolios() {
  	return this.db.getPortfolios().subscribe(data => this.portfolios = data);
  }

  public removePortfolio(key) {
    return this.db.getPortfolioDetails(key).remove()
      .then(success => console.log(success))
      .catch(error => console.log(error));
  }

  public userDescription() {
    return this.db.getNameAndDescription().subscribe(data => this.description = data);
  }

  public editDescription(): void {
    this.toggleDes = 'show';
    this.toggleDesp = 'hide';
  }

  public doneEditDescription(): void {
    this.toggleDes = 'hide';
    this.toggleDesp = 'show';
  }

  public editDescriptionInfo(data) {
    let description = { description: data }
    return this.db.getNameAndDescription().update(description);
  }

}
