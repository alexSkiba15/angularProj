import {Component, OnInit} from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
})
export class CoreComponent implements OnInit {
  cars: Car[];
  deleteWindow: boolean;
  carId: number;
  pageOfItems: Array<Car>;

  constructor(private carService: CarService, private spinner: NgxSpinnerService) {
    this.deleteWindow = false;
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.spinner.show();
    this.carService.getCars().subscribe(
      data => {
        this.cars = data.cars;
        this.spinner.hide();
      },
      error => console.log(error)
    );
  }

  deleteCar() {
    console.log(this.carId);
    this.closeDeleteWindow();
    this.spinner.show();
    this.carService.deleteCar(this.carId)
      .subscribe(() => {
          this.spinner.hide();
          this.reloadData();
        },
        error => console.log(error)
      );
  }

  closeDeleteWindow() {
    this.deleteWindow = false;
  }

  openDeleteWindow(id: number) {
    this.carId = id;
    this.deleteWindow = true;
  }

  onChangePage(pageOfItems: Array<Car>) {
    this.pageOfItems = pageOfItems;
  }
}
