import {Component, OnInit} from '@angular/core';
import {Owner} from '../../../car';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../../car.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-edit-owner',
  templateUrl: './owner-view.component.html',
  styleUrls: ['./owner-view.component.css']
})

export class OwnerViewComponent implements OnInit {
  owner = new Owner();
  form: FormGroup;
  ownerCreated: boolean;
  ownerEdited = false;
  edit = false;
  create = false;
  ownerId: number;

  constructor(private carService: CarService, private spinner: NgxSpinnerService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.spinner.show();
    this.route.params
      .subscribe((idOwner) => {
          this.ownerId = idOwner.id;
          console.log(idOwner);
          console.log(idOwner.id);
        }, error => console.log(error)
      );
    this.spinner.hide();
    this.form = new FormGroup({
      inputName: new FormControl('', [
        Validators.required,
        Validators.pattern('\\S[0-9a-zA-Z ]{0,}'),
        Validators.maxLength(15),
        Validators.minLength(1)
      ]),
      inputSurname: new FormControl('', [
        Validators.required,
        Validators.pattern('\\S[0-9a-zA-Z ]{0,}'),
        Validators.maxLength(15),
        Validators.minLength(1)
      ]),
      inputAge: new FormControl('', [
        Validators.required,
        Validators.max(100),
        Validators.min(18)
      ]),
      inputEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
    });
    if (this.ownerId !== undefined) {
      this.edit = true;
      this.reviewDataEdit();
    } else {
      this.create = true;
      this.reviewData();
    }
  }

  private reviewDataEdit() {
    this.carService.editOwner(this.ownerId).subscribe(
      response => {
        Object.assign(this.owner, response.owner);
        this.form.controls.inputName.setValue(this.owner.name);
        this.form.controls.inputSurname.setValue(this.owner.surname);
        this.form.controls.inputAge.setValue(this.owner.age);
        this.form.controls.inputEmail.setValue(this.owner.email);
        this.spinner.hide();
      }, error => console.log(error)
    );
  }

  reviewData() {
    this.owner = new Owner();
  }


  onSubmit() {
    this.owner.name = this.form.controls.inputName.value;
    this.owner.surname = this.form.controls.inputSurname.value;
    this.owner.age = this.form.controls.inputAge.value;
    this.owner.email = this.form.controls.inputEmail.value;
    this.createOwner();
  }

  private createOwner() {
    if (this.ownerId != null) {
      this.updateOwner();
    } else {
      this.spinner.show();
      setTimeout(() => {
        this.carService.createOwner(this.owner)
          .subscribe((data) => {
              console.log(data);
              this.ownerCreated = true;
              this.create = false;
              this.spinner.hide();
            },
            error => console.log(error));
        this.owner = new Owner();
      }, 1000);
      this.form.reset();
    }
  }

  private updateOwner() {
    this.spinner.show();
    setTimeout(() => {
      this.carService.updateOwner(this.owner)
        .subscribe((data) => {
            console.log(data);
            this.ownerEdited = true;
            this.edit = false;
            this.spinner.hide();
          },
          error => console.log(error));
    }, 1000);
  }

}
