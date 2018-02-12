import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter2'
})
export class CarFilter2Pipe implements PipeTransform {

  transform(carList, searchColor: string) {
    if (carList.length === 0 || searchColor === '') {
      return carList;
    }

    return carList.filter(car => car.color.toLowerCase().indexOf(searchColor.toLowerCase()) !== -1);
    // return carList.filter(car => car[color].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }

}
