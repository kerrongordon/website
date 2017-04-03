import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kg-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  getyear: string;
  copyRight: string;

  constructor() {
    this.getyear = new Date().getFullYear().toString();
   }

  ngOnInit() {
    this.copyRight = `Copyright © ${this.getyear} By Kerron Gordon`;
  }

}
