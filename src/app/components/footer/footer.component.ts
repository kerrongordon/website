import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  getyear: string;
  copyRight: string | undefined;

  constructor() {
    this.getyear = new Date().getFullYear().toString();
  }

  ngOnInit(): void {
    this.copyRight = `Copyright © ${this.getyear} By Kerron Gordon`;
  }

}
