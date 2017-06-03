import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  private settimereset: any;

  constructor() {  }

  public notifitem(iconName: String, notifTitle: String, notifContent: String, init: Boolean) {
    if (!init) { return; }
    const notifitem = document.createElement('div');
          notifitem.setAttribute('class', 'notifitem');
          notifitem.innerHTML = `<div class="icon"><i class="material-icons">${iconName}</i></div>
                                 <div class="content"><div class="title">${notifTitle}</div>
                                 <div class="content">${notifContent}</div></div>`

    const newNotif = document.getElementById('notify');
          newNotif.appendChild(notifitem);

    return this.remove();
  }


  private remove() {
    const items = document.getElementsByClassName('notifitem');
    if (items.length === 0) { return; }

    this.settimereset = setTimeout(() => {
      const notify = document.getElementById('notify');
      const node = items.item(0);
            notify.removeChild(node);
            if (items.length === 0) { return this.restTimer(); }
    }, 8000);
  }

  private restTimer() {
    return clearTimeout(this.settimereset);
  }

}
