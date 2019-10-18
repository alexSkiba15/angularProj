export class Car {
  id: number;
  brands: string[] = ['BMW', 'Audi', 'Opel', 'Porsche', 'Ford', 'Lexus'];
  brand: string;
  model: string;
  price: number;
  date: Date;
  owner_id: number;

  constructor() {
    this.brand = this.brands[0];
  }
}

export class Owner {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
}
