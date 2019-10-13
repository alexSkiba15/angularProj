export class Car {
  id: number;
  brands: string[] = ['BMW', 'Audi', 'Opel', 'Porsche', 'Ford', 'Lexus'];
  brand: string;
  model: string;
  price: number;
  date: Date;
  edit = false;
  delete = false;

  constructor() {
    this.brand = this.brands[0];
  }
}
