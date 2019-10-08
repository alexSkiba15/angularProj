export class Car {
  brands: string[] = ['BMW', 'Audi', 'Opel', 'Porsche', 'Ford', 'Lexus'];
  brand: string;
  model: string;
  price: number;
  date: Date;

  constructor() {
    this.brand = this.brands[0];
  }
}
