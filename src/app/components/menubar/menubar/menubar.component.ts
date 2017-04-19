import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'kg-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.sass'],
  providers: [AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenubarComponent implements OnInit {

  public isAuth: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  	return this.auth.isAuth().subscribe(as => this.isAuth = as);
  }

  logout(): void {
  	this.auth.logOut();
  }

}
