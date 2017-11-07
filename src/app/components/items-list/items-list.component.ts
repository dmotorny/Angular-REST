import { Component, OnInit }      from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Item }                   from '../../models/item';

@Component({
  templateUrl: '../../views/items-list.html',
})

export class ItemsListComponent implements OnInit {

  progressBar: Boolean;
  items:       Item[];

  constructor(private http: HttpClient) {
    this.progressBar = true;

    this.items = [];
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.http.get('items').subscribe((data: Item[]) => {
      this.items = data;

      this.progressBar = false;
    });
  }

  delete(id) {
    this.progressBar = true;

    this.http.delete('item', {
      params:  new HttpParams().set('id', id)
    }).subscribe(() => {
      this.load();
    });
  }

}
