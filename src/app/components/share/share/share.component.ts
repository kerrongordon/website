import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kg-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.sass']
})
export class ShareComponent implements OnInit {

  @Input() share: any;
  @Input() title: string;
  @Input() link: string;
  public rountParams;

  constructor(private route: Router) { }

  ngOnInit() {
    return this.rountParams = window.location.href;
  }

  shareMe(url): void {
    window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=550,width=400');
  }

  openlink(link): void {
    window.open(link);
  }

}
