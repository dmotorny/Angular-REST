import { Injectable }  from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/observable';

import { environment } from '../../environments/environment';

import 'rxjs/add/operator/do';

@Injectable()

export class HttpInterceptorAll implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept (requestOld: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestNew;
    
    // URL

    let url = environment.server + requestOld.url;

    // Headers

    let token = window.localStorage.getItem('token');
    
    if (token) {
      requestNew = requestOld.clone({
        url: url,
        headers: requestOld.headers.set('Token', token)
      });
    } else {
      requestNew = requestOld.clone({
        url: url
      });
    }

    // Response

    return next.handle(requestNew).do(() => {}, (event: any) => {
      if (event instanceof HttpErrorResponse) {
        if (event.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    });
  }
}