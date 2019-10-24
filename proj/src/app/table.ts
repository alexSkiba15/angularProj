import {Car, Owner} from './car';

export class Table {
  cars: Car[];
}

export class GetCar {
  car: Car;
  owners: Owner[];
}

export class CarsDetailed {
  cars: Car[];
  owners: Owner[];
}

export class GetOwners {
  owners: Owner[];
}
