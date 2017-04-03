import { Component, OnInit } from '@angular/core';
import { Icons } from '../../../class/icons';

@Component({
  selector: 'kg-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass']
})
export class AvatarComponent implements OnInit {

  public avatar: any;

  constructor( ) { }

  ngOnInit() {
    this.avatar = Icons.avatar;
  }

}
