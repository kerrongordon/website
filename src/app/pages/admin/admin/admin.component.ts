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

  constructor(private db: DatabaseService, private user: AuthService) { }

  ngOnInit() {
    // this.ds.homePageInfor().subscribe(data => this.infor = data);
    this.userInfor();
    this.getPortfolios();
  }

  public userInfor() {
  	return this.user.isAuth().subscribe(data => this.auth = data.google);
  }

  public getPortfolios() {
  	this.db.getPortfolios().subscribe(data => this.portfolios = data);
  }

}
