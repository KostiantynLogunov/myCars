import {Component, OnInit} from '@angular/core';
import {CarsService} from '../cars.service';
import {environment} from "../../environments/environment";

interface Cars {
  id: number;
  name: string;
  color: string;
  maxspeed: number;
  price: number;
}

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  headers = environment.headers;

  colId: boolean = true;
  colName: boolean = true;
  colColor: boolean = true;
  colSpeed: boolean = true;
  colPrice: boolean = true;

  showHide(id: number) {
    switch (id) {
      case 1:
        this.colId = !this.colId;
        break;
      case 2:
        this.colName = !this.colName;
        break;
      case 3:
        this.colColor = !this.colColor;
        break;
      case 4:
        this.colSpeed = !this.colSpeed;
        break;
      case 5:
        this.colPrice = !this.colPrice;
        break;
    }
    console.log(id);
  }
  // for filters
  searchCar: string = '';
  searchColor: string = '';

  cars: Cars[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.carsService
        .getCars()
        .subscribe((cars: Cars[]) => {
          this.cars = cars;
        });
  }
}
