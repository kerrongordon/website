import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kg-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() { }


  public notifitem(iconName, notifTitle, notifContent) {
    const notifitem = document.createElement('div');
          notifitem.setAttribute('class', 'notifitem');
          notifitem.innerHTML = `<div class="icon"><i class="material-icons">${iconName}</i></div>
                                 <div class="content"><div class="title">${notifTitle}</div>
                                 <div class="content">${notifContent}</div></div>`

    const newNotif = document.getElementById('notify');
   return newNotif.appendChild(notifitem);
  }


  public remove(e) {
    // const newNotif = document.getElementById('notify');
  //  return newNotif.removeChild(e)
   console.log(e);
   this.remove(e.target);
  }

}
