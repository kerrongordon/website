import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database.service';

@Component({
  selector: 'kg-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers: [DatabaseService]
})
export class AdminComponent implements OnInit {

  infor: any;

  constructor(public ds: DatabaseService) { }

  ngOnInit() {
    // this.ds.homePageInfor().subscribe(data => this.infor = data);
  }

}
