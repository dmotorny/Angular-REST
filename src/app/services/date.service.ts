import { Injectable } from '@angular/core';

@Injectable()

export class DateService {

  public getMonths(): string[] {
    let i: number;
    let months: string[] = [];
    let month: string;

    for (i = 1; i < 13; i++) {
      month = '0' + String(i);

      months.push(month.substr(month.length - 2));
    }

    return months;
  }

  public getYears(): string[] {
    let i: number;
    let years: string[] = [];

    let yearMin = Number((new Date()).getFullYear());
    let yearMax = yearMin + 10;

    for (i = yearMin; i <= yearMax; i++) {
      years.push(String(i).substr(2));
    }

    return years;
  }

}
