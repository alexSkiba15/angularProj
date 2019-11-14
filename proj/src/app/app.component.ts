import { Component } from '@angular/core';
import {CarService} from './car.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';


  constructor(private carService: CarService, private spinner: NgxSpinnerService) {
  }

  scraperCars() {
    this.spinner.show();
    this.carService.getScraper().subscribe(
      data => {
        if (data.result === 1) {
          this.spinner.hide();
        }
      }, error => console.log(error)
    );
  }
}
