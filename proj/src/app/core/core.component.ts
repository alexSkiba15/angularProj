import {Component, OnInit} from '@angular/core';
import {Car} from '../car';
import {Observable} from 'rxjs';
import {CarService} from '../car.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  cars: Observable<Car[]>;

  constructor(private customerService: CarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.cars = this.customerService.getCars();
  }

}
