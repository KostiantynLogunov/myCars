import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsListComponent} from './cars-list/cars-list.component';
import {CreateCarComponent} from './create-car/create-car.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cars' },
  { path: 'cars', component: CarsListComponent },
  { path: 'createCar', component: CreateCarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
