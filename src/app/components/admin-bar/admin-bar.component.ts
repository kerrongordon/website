import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'kgp-admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.sass'],
  providers: [AuthService]
})
export class AdminBarComponent implements OnInit {

  constructor(
    private _as: AuthService
  ) { }

  logout() {
    this._as.logout()
  }

}
