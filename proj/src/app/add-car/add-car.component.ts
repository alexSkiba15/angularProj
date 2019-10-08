import {Component, OnInit} from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  car: Car;
  form: FormGroup;

  constructor(private carService: CarService) {
    this.car = new Car();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      selectBrand: new FormControl('BMW'),
      inputModel: new FormControl('', [
        Validators.required,
        Validators.pattern('\\S[0-9a-zA-Z ]{0,}'),
        Validators.maxLength(15),
        Validators.minLength(1)
      ]),
      inputPrice: new FormControl('', [
        Validators.required,
        Validators.max(1000000),
        Validators.min(100)
      ]),
      inputYear: new FormControl('', [
        Validators.required,
        Validators.pattern('[1-2]{1}[09]{1}[0-9]{2}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}')
      ])
    });
  }

  onSubmit() {
    this.car.brand = this.form.controls.selectBrand.value;
    this.car.model = this.form.controls.inputModel.value;
    this.car.date = this.form.controls.inputYear.value;
    this.car.price = this.form.controls.inputPrice.value;
    console.log(this.form.controls.inputYear.value);
    debugger;
    this.createCar();
  }

  private createCar() {
    this.carService.createCar(this.car)
      .subscribe(data => {
          console.log(data);
        },
        error => console.log(error));
    debugger;
    this.car = new Car();
    this.form.reset({selectBrand: this.car.brand});
  }
}
