import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Hero } from './hero'
import { Observable } from 'rxjs/Observable';

@Injectable()

export class DataServiceService {
  private heroesUrl = 'assets/friends.json';  // URL to web API
  constructor(protected http: Http) { }

  getAllFriends(): Observable<Hero> {
    return this.http.get(this.heroesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  create(dataToSend: object): Observable<Hero> { //dataToSend is an object
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ 'headers': headers });

    return this.http.post(this.heroesUrl, dataToSend, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body: JSON = res.json();
    return body || [];
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error("Inside service the errMsg is :", errMsg);
    return Observable.throw(errMsg);
  }


}


