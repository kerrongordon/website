import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kg-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.sass']
})
export class SocialIconsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openlink(link) {
    return window.open(link);
  }

}
