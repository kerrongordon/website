import { Injectable } from '@angular/core'

@Injectable()
export class NotificationService {

  private settimereset: any

  constructor() { }

  public notifitem(notifTitle: String, notifContent: String, init: Boolean) {
    if (!init) { return }

    const  notifitem = document.createElement('div')
          notifitem.setAttribute('class', 'notifitem')
          notifitem.innerHTML = `<div class="icon">
                                <svg viewBox="0 0 24 24"><path d="M5,13H19V11H5M3,17H17V15H3M7,7V9H21V7"/></svg>
                              </div>

                              <div class="content">
                                <div class="title">${notifTitle}</div>
                                <div class="message">${notifContent}</div>
                              </div>`

    const newNotif = document.getElementById('notify')
         newNotif.appendChild(notifitem)

    return this.remove()
  }


  private remove() {
    const items = document.getElementsByClassName('notifitem')
    if (items.length === 0) { return }

    this.settimereset = setTimeout(() => {
      const notify = document.getElementById('notify')
      const node = items.item(0)

      notify.removeChild(node)
      if (items.length === 0) { return this.restTimer() }
    }, 8000)

  }

  private restTimer() {
    return clearTimeout(this.settimereset)
  }

}
