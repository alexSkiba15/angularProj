import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  constructor(private location: Location) { }

  previousPage() {
    this.location.back();
  }
}
