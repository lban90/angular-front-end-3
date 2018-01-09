import {Injectable} from '@angular/core';
import {Item} from './item';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService {
  private itemsUrl= 'api/items';
  private headers= new Headers ({'Content-Type': 'application/json'});
  constructor(private http: Http) {}

  handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error)
  }
  getItems(): Promise <Item[]> {
    return this.http.get(this.itemsUrl).toPromise().then(response =>  response.json().data as Item[]).catch(this.handleError)
  }
}

