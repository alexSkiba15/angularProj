import {Component, OnInit} from '@angular/core';
import {CarService} from '../../car.service';
import {ActivatedRoute} from '@angular/router';
import {Car} from '../../car';
import {map} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {YearValidators} from '../year.validators';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  carId: number;
  car = new Car();
  carEdited = false;
  form: FormGroup;

  constructor(private carService: CarService,
              private route: ActivatedRoute,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.route.params
      .pipe(
        map(params => params.id))
      .subscribe((idCar) => {
        this.carId = idCar;
        }, error => console.log(error)
      );
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
    this.reloadData();
  }

  private reloadData() {
    this.carService.editCar(this.carId).subscribe(
      response => {
        console.log(response);
        Object.assign(this.car, response.car);
        this.form.controls.selectBrand.setValue(this.car.brand);
        this.form.controls.inputModel.setValue(this.car.model);
        this.form.controls.inputPrice.setValue(this.car.price);
        this.form.controls.inputYear.setValue(this.car.date);
        this.spinner.hide();
      }, error => console.log(error)
    );
  }

  onSubmit() {
    this.car.brand = this.form.controls.selectBrand.value;
    this.car.model = this.form.controls.inputModel.value;
    this.car.date = this.form.controls.inputYear.value;
    this.car.price = this.form.controls.inputPrice.value;
    this.updateCar();
  }

  private updateCar() {
    this.spinner.show();
    setTimeout(() => {
      this.carService.updateCar(this.car)
        .subscribe((data) => {
            console.log(data);
            this.carEdited = true;
            this.spinner.hide();
          },
          error => console.log(error));
    }, 1000);
  }
}
