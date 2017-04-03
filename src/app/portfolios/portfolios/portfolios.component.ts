import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'kg-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.sass'],
  providers: [DatabaseService]
})
export class PortfoliosComponent implements OnInit {

  public portfolios: any[];

  constructor(private db: DatabaseService, private rt: Router) { }

  ngOnInit() {
    this.db.getPortfolios().subscribe(data => this.portfolios = data);
  }

  openPortfolio(key) {
    this.rt.navigate(['/portfolio/', key]);
  }

}
