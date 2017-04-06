import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../../../router.animations';

@Component({
  selector: 'kg-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass'],
  animations: [fadeInOut()]
})
export class AvatarComponent {

  public avatar: any;

}
