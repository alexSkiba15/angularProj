import {Car, Owner} from './car';

export class Table {
  cars: Car[];
}

export class GetCar {
  car: Car;
}

export class GetOwners {
  owners: Owner[];
  cars: Car[];
}
