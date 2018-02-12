import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CreateCarComponent } from './create-car/create-car.component';
import {HttpModule} from '@angular/http';
import {CarsService} from "./cars.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CarFilterPipe } from './car-filter.pipe';
import { CarFilter2Pipe } from './car-filter2.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CreateCarComponent,
    CarFilterPipe,
    CarFilter2Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
