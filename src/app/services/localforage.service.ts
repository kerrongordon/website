import { Injectable } from '@angular/core';
import * as localforage from 'localforage';

localforage.config({
    driver      : localforage.WEBSQL, // Force WebSQL; same as using setDriver()
    name        : 'kerrongordon',
    version     : 1.0,
    size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
    description : 'some description'
});

@Injectable()
export class LocalforageService {

  constructor() { }

  public localforageSave(title, value) {
    localforage.setItem(title, JSON.stringify(value))
      .then(() => localforage.getItem(title))
      .then((value) => console.log('value'))
      .catch((err) => console.log(err));
  }

  public localforageGet(title) {
    localforage.getItem(title)
      .then(value => {
        console.log(JSON.parse('[' + value + ']'))
      })
      .catch(err => console.log(err));
  }


}
