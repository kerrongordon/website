import { Component } from '@angular/core';
import { moveIn } from './router.animations';

@Component({
  selector: 'kg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [moveIn()]
})
export class AppComponent {
  title = 'kg works!';
}
