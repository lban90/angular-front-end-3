import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatIconModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatCardModule,
  MatSidenavModule
} from '@angular/material';
import {DashboardItemComponent} from './item/dashboard-item.component';
import {AppRoutingModule} from './app-routing.module';
import {ItemService} from 'app/item/item.service';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
