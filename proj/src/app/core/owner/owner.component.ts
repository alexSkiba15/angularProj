import {Component, OnInit} from '@angular/core';
import {CarService} from '../../car.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Car, Owner} from '../../car';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['.././core.component.css'],
})
export class OwnerComponent implements OnInit {
  owners: Owner[];
  cars: Car[];
  deleteWindow: boolean;
  ownerId: number;
  pageOfItems: Array<Owner>;

  constructor(private carService: CarService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.spinner.show();
    this.carService.getCarsDetailed().subscribe(
      data => {
        this.cars = data.cars;
        this.owners = data.owners;
        this.spinner.hide();
      }, error => console.log(error)
    );
  }

  closeDeleteWindow() {
    this.deleteWindow = false;
  }

  openDeleteWindow(id: number) {
    this.ownerId = id;
    this.deleteWindow = true;
  }

  deleteOwner() {
    console.log(this.ownerId);
    this.closeDeleteWindow();
    this.spinner.show();
    this.carService.deleteOwner(this.ownerId)
      .subscribe(() => {
          this.spinner.hide();
          this.reloadData();
        },
        error => console.log(error)
      );
  }

  onChangePage(pageOfItems: Array<Owner>) {
    this.pageOfItems = pageOfItems;
  }
}
