import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Item } from '../../models/item';

import { DateService } from '../../services/date.service';
import { ItemsService } from '../../services/items.service';

@Component({
  templateUrl: '../../views/items-data.html',
  providers: [DateService, ItemsService]
})

export class ItemsEditComponent implements OnInit {

  progressBar: boolean = true;

  item: Item;

  months: string[];
  years: string[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dateService: DateService,
    private itemsService: ItemsService
  ) {
    this.months = dateService.getMonths();
    this.years = dateService.getYears();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemsService.find(params.id).subscribe((data: Item) => {
        this.item = data;
  
        this.progressBar = false;
      });
    });
  }

  onSubmit(form) {
    if (form.invalid) {
      return;
    }

    this.progressBar = true;

    this.itemsService.edit(this.item).subscribe(() => this.router.navigate(['/items']));
  }

}
