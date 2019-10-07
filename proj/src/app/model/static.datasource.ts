import {Injectable} from '@angular/core';
import {Car} from './car.model';

@Injectable()
export class StaticDatasource {
  private readonly data: Car[];

  constructor() {
    this.data = new Array<Car>(
      new Car('Htg34-4', 'BMW', new Date(2018, 4, 12), 23124),
      new Car('Tye=432', 'Audi', new Date(2018, 5, 12), 23124),
      new Car( 'Hnb3', 'BMW', new Date(2018, 4, 12), 23124),
      new Car('z-33', 'BMW', new Date(2018, 4, 12), 23124),
      new Car('juj-55', 'BMW', new Date(2016, 7, 12), 23124),
    );
  }

  getCars() {
    return this.data;
  }
}
