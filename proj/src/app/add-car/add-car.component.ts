import {Component, OnInit} from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {YearValidators} from './year.validators';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  car: Car;
  form: FormGroup;

  constructor(private carService: CarService, private spinner: NgxSpinnerService) {
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
        YearValidators.restrictedYear
      ])
    });
  }

  onSubmit() {
    this.car.brand = this.form.controls.selectBrand.value;
    this.car.model = this.form.controls.inputModel.value;
    this.car.date = this.form.controls.inputYear.value;
    this.car.price = this.form.controls.inputPrice.value;
    this.createCar();
  }

  private createCar() {
    this.spinner.show();
    setTimeout(() => {
      this.carService.createCar(this.car)
        .subscribe((data) => {
            console.log(data);
            this.spinner.hide();
          },
          error => console.log(error));
      this.car = new Car();
    }, 5000);
    this.form.reset({selectBrand: this.car.brand});
  }
}
