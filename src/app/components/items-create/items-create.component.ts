import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { HttpClient }  from '@angular/common/http';

import { Item }        from '../../models/item';

import { DateService } from '../../services/date.service';

@Component({
  templateUrl: '../../views/items-data.html',
})

export class ItemsCreateComponent {

  progressBar: Boolean;

  item:        Item;

  months:      String[];
  years:       String[];

  constructor(private router: Router, private http: HttpClient, private dateService: DateService) {
    this.progressBar = false;

    this.item        = new Item;

    this.months      = dateService.getMonths();
    this.years       = dateService.getYears();
  }

  onSubmit(form) {
    if (form.invalid) {
      return;
    }

    this.progressBar = true;

    this.http.post('item', this.item, {responseType: 'text'}).subscribe(() => {
      this.router.navigate(['/items']);
    });
  }

}
