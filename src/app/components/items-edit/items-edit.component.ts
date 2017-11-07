import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Item }                   from '../../models/item';

import { DateService }            from '../../services/date.service';

@Component({
  templateUrl: '../../views/items-data.html',
})

export class ItemsEditComponent implements OnInit {
  
  progressBar: Boolean;

  item:        Item;

  months:      String[];
  years:       String[];
    
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private dateService: DateService) {
    this.progressBar = true;

    this.months      = dateService.getMonths();
    this.years       = dateService.getYears();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.http.get('item', {
        params:  new HttpParams().set('id', params.id),
      }).subscribe((data: Item) => {
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

    this.http.put('item', this.item, {responseType: 'text'}).subscribe(() => {
      this.router.navigate(['/items']);
    });
  }

}
