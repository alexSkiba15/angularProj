export class Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  date: Date;
  ownerId: number;

  constructor() {
    this.brand = 'Bmw';
  }
}

export class Owner {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
}
