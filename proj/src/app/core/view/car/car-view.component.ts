import {Component, OnInit} from '@angular/core';
import {Car, Owner} from '../../../car';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {YearValidators} from '../../year.validators';
import {NgxSpinnerService} from 'ngx-spinner';
import {CarService} from '../../../car.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css']
})

export class CarViewComponent implements OnInit {
  car = new Car();
  form: FormGroup;
  carCreated: boolean;
  carEdited = false;
  edit = false;
  create = false;
  owners: Owner[];
  carId: number;
  brandsCar = ['Bmw', 'Audi', 'Opel', 'Porsche', 'Ford', 'Lexus', 'Mazda', 'Mitsubishi', 'Daewoo',
    'Chery', 'Jac', 'Nissan', 'Renault', 'Ssangyong', 'Subaru', 'Toyota', 'Volkswagen', 'Geely', 'Hyundai'].sort();

  constructor(private carService: CarService, private spinner: NgxSpinnerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.spinner.show();
    this.route.params
      .subscribe((idCar) => {
        this.carId = idCar.id;
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
      ]),
      selectOwner: new FormControl()
    });
    if (this.carId !== undefined) {
      this.edit = true;
      this.reviewDataEdit();
    } else {
      this.create = true;
      this.reviewData();
    }
  }

  private reviewDataEdit() {
    this.carService.editCar(this.carId).subscribe(
      response => {
        Object.assign(this.car, response.car);
        this.owners = response.owners;
        this.form.controls.selectBrand.setValue(this.car.brand);
        this.form.controls.inputModel.setValue(this.car.model);
        this.form.controls.inputPrice.setValue(this.car.price);
        this.form.controls.inputYear.setValue(this.car.date);
        this.form.controls.selectOwner.setValue(this.car.ownerId);
        this.spinner.hide();
      }, error => console.log(error)
    );
  }

  reviewData() {
    this.carService.getOwners()
      .subscribe((data) => {
          this.spinner.hide();
          this.owners = data.owners;
        },
        error => console.log(error));
  }

  onSubmit() {
    this.car.brand = this.form.controls.selectBrand.value;
    this.car.model = this.form.controls.inputModel.value;
    this.car.price = this.form.controls.inputPrice.value;
    this.car.date = this.form.controls.inputYear.value;
    this.car.ownerId = this.form.controls.selectOwner.value;
    this.createCar();
  }

  private createCar() {
    if (this.carId != null) {
      this.updateCar();
    } else {
      this.spinner.show();
      setTimeout(() => {
        this.carService.createCar(this.car)
          .subscribe((data) => {
              console.log(data);
              this.carCreated = true;
              this.create = false;
              this.spinner.hide();
            },
            error => console.log(error));
        this.car = new Car();
      }, 1000);
      this.form.reset({selectBrand: this.car.brand});
    }
  }

  private updateCar() {
    this.spinner.show();
    setTimeout(() => {
      this.carService.updateCar(this.car)
        .subscribe((data) => {
            console.log(data);
            this.carEdited = true;
            this.edit = false;
            this.spinner.hide();
          },
          error => console.log(error));
    }, 1000);
  }
}
