import { Component, Input } from '@angular/core';

@Component({
  selector: 'kg-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass']
})
export class AvatarComponent {
  @Input() name: string;
  @Input() image: string;
}
