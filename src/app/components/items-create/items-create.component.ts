import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../models/item';

import { DateService } from '../../services/date.service';
import { ItemsService } from '../../services/items.service';

@Component({
  templateUrl: '../../views/items-data.html',
  providers: [DateService, ItemsService]
})

export class ItemsCreateComponent {

  progressBar: boolean = false;

  item: Item = new Item;

  months: string[];
  years: string[];

  constructor(
    private router: Router,
    private dateService: DateService,
    private itemsService: ItemsService
  ) {
    this.months = dateService.getMonths();
    this.years = dateService.getYears();
  }

  onSubmit(form) {
    if (form.invalid) {
      return;
    }

    this.progressBar = true;

    this.itemsService.create(this.item).subscribe(() => this.router.navigate(['/items']));
  }

}
