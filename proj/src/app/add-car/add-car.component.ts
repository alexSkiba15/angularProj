import { Component, OnInit } from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  car: Car;

  constructor(private carService: CarService) {
    this.car = new Car();
  }

  onSubmit() {
    this.createCar();
  }

  private createCar() {
    this.carService.createCar(this.car)
      .subscribe(data => {
        console.log(data);
      },
        error => console.log(error));
    this.car = new Car();
  }
}
