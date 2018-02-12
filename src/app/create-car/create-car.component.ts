import { Component, OnInit } from '@angular/core';
import {CarsService} from "../cars.service";
import deleteProperty = Reflect.deleteProperty;
import {FormControl, FormGroup, Validators} from "@angular/forms";

interface Cars {
  id: number;
  name: string;
  color: string;
  maxspeed: number;
  price: number;
}

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  // SIMPLE INPUTS
  /*carName: string = '';
  carColor: string = '';
  carSpeed: number;
  carPrice: number;*/

  form: FormGroup;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      color: new FormControl('', Validators.required),
      maxSpeed: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      return console.log('You are cheater !');
    }
    this.carsService
        .addCar(this.form.value.name, this.form.value.color, this.form.value.maxSpeed, this.form.value.price)
        .subscribe((car: Cars) => {
        });
    this.form.reset();
  }

  // SIMPLE INPUTS
  /*addCar() {
    this.carsService
        .addCar(this.carName, this.carColor, this.carSpeed, this.carPrice)
        .subscribe((car: Cars) => {
        });
    this.carName = '';
    this.carColor = '';
    delete this.carSpeed;
    delete this.carPrice;
  }*/

}
