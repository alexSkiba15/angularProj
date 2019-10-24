import {Component, OnInit} from '@angular/core';
import {CarService} from '../../car.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Car, Owner} from '../../car';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css'],
})
export class OwnerComponent implements OnInit {
  owners: Owner[];
  cars: Car[];

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
}
