import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';
import { Api } from '../api/api';

@Injectable()
export class Items {
  items: Item[] = [];

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('/requests', params);
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
