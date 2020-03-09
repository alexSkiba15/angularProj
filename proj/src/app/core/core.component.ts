import {Component, Inject, OnInit} from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
})
export class CoreComponent implements OnInit {
  cars: Car[];
  deleteWindow: boolean;
  pageOfItems: Array<Car>;

  constructor(private carService: CarService, private spinner: NgxSpinnerService, private dialog: MatDialog) {
    this.deleteWindow = false;
  }

  ngOnInit() {
    this.reloadData();
  }

  openDialog(car): void {
    const dialogRef = this.dialog.open(DialogOverviewCarDeleteComponent, {
      width: '250px',
      data: car
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log(result);
        this.deleteCar(result.id);
      }
    });
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

  deleteCar(carId) {
    this.spinner.show();
    this.carService.deleteCar(carId)
      .subscribe(() => {
          this.spinner.hide();
          this.reloadData();
        },
        error => console.log(error)
      );
  }

  onChangePage(pageOfItems: Array<Car>) {
    this.pageOfItems = pageOfItems;
  }
}

@Component({
  selector: 'app-dialog-overview-car.delete',
  templateUrl: 'dialog-overview-car.delete.html',
})
export class DialogOverviewCarDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewCarDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(data) {
    this.dialogRef.close(data);
    return true;
  }
}
