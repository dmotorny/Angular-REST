import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/item';

import { ItemsService } from '../../services/items.service';

@Component({
  templateUrl: '../../views/items-list.html',
  providers: [ItemsService]
})

export class ItemsListComponent implements OnInit {

  progressBar: boolean = true;
  items: Item[] = [];

  constructor(private itemsService: ItemsService) {
    this.items = [];
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.itemsService.all().subscribe((data: Item[]) => {
      this.items = data;

      this.progressBar = false;
    })
  }

  delete(id: string) {
    this.progressBar = true;

    this.itemsService.delete(id).subscribe(() => this.load());
  }

}
