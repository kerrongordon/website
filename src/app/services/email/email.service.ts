import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class EmailService {

  constructor(
    private _http: Http
  ) { }

  public postEmail(data) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post('https://formspree.io/kgpsounds.com@gmail.com', data, headers)
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

}
