import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification/notification.service';

@Component({
  selector: 'kg-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass'],
  providers: [NotificationService]
})
export class NotificationComponent implements OnInit {

  constructor(private _notificationService: NotificationService) { }

  ngOnInit() { 
    this._notificationService.notifitem('init', 'init', 'init', false);
  }

}
