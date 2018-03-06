// Base

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

import {
  RouterModule,
  Routes
} from '@angular/router';

// Material

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule,
  MatProgressBarModule,
  MatSnackBarModule
} from '@angular/material';

// Application

import { AppComponent } from './app.component';

import { NotFoundComponent } from './components/not-found/not-found.component';

import { HttpInterceptorAll } from './options/http-interceptor-all';

import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemsCreateComponent } from './components/items-create/items-create.component';
import { ItemsEditComponent } from './components/items-edit/items-edit.component';

import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthRegistrationComponent } from './components/auth-registration/auth-registration.component';

const routes: Routes = [
  { path: 'login',          component: AuthLoginComponent },
  { path: 'registration',   component: AuthRegistrationComponent },

  { path: 'items',          component: ItemsListComponent },
  { path: 'items/create',   component: ItemsCreateComponent },
  { path: 'items/edit/:id', component: ItemsEditComponent },
  
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  
  { path: '**',             component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,

    AuthLoginComponent,
    AuthRegistrationComponent,

    ItemsListComponent,
    ItemsCreateComponent,
    ItemsEditComponent,

    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
    MatSnackBarModule,

    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorAll,
    multi: true
  }],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule { }
