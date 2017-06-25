import {Route } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class AppCustomPreloader {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : Observable.of(null);
  }
}
