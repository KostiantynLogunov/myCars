import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {environment} from "../environments/environment";

@Injectable()
export class CarsService {

    constructor(private http: Http) {}

    getCars() {
        return this.http.get(environment.apiUrl)
            .map((response: Response) =>  response.json());
    }

    addCar(carName: string, carColor: string, carSpeed: number, carPrice: number) {
        const data = {
            name: carName,
            color: carColor,
            maxspeed: carSpeed,
            price: carPrice
        };
        return this.http.post(environment.apiUrl, data)
            .map((response: Response) =>  response.json());
    }
}
/**
 * Created by Kostiantyn on 12.02.2018.
 */
