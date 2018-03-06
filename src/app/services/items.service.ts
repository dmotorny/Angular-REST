import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Item } from '../models/item';

@Injectable()

export class ItemsService {

  constructor(private http: HttpClient) { }

  /**
   * All items
   * 
   * @method create
   * @return {Observable} Observable
   */
  all(): Observable<any> {
    return this.http.get('items');
  }

  /**
   * Find item
   * 
   * @method find
   * @param id {string|number} Id
   * @return {Observable} Observable
   */
  find(id: string|number): Observable<any> {
    return this.http.get('item', {
      params: new HttpParams().set('id', String(id)),
    });
  }

  /**
   * Create item
   * 
   * @method create
   * @param item {Item} Item
   * @return {Observable} Observable
   */
  create(item: Item): Observable<any> {
    return this.http.post('item', item, {responseType: 'text'});
  }

  /**
   * Edit item
   * 
   * @method edit
   * @param item {Item} Item
   * @return {Observable} Observable
   */
  edit(item: Item): Observable<any> {
    return this.http.put('item', item, {responseType: 'text'});
  }

  /**
   * Delete item
   * 
   * @method delete
   * @param id {string|number} Id
   * @return {Observable} Observable
   */
  delete(id: string|number): Observable<any> {
    return this.http.delete('item', {
      params: new HttpParams().set('id', String(id))
    });
  }

}
