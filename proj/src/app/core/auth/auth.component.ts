import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {CarService} from '../../car.service';
import {DialogOverviewCarDeleteComponent} from '../core.component';
import {MatDialog} from '@angular/material/dialog';

interface TokenObj {
  token: string;
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-registry',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  animal: string;
  name: string;
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  registerMode = false;

  constructor(
    private carService: CarService,
    private cookieService: CookieService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.name = 'Alex';
    this.animal = 'Tiger';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewCarDeleteComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
    console.log('here');
    const mrToken = this.cookieService.get('mr-token');
    if (mrToken) {
      this.router.navigate(['/cars']);
    }
  }
  saveForm() {
    if (!this.registerMode) {
      this.loginUser();
    } else {
      this.carService.registerUser(this.authForm.value).subscribe(
        result => {
          this.loginUser();
          console.log('this.loginUser();');
        },
        error => console.log(error)
      );
    }
  }

  loginUser() {
    console.log('im here');
    this.carService.loginUser(this.authForm.value).subscribe(
      (result: TokenObj) => {
        this.cookieService.set('mr-token', result.token);
        this.router.navigate(['/cars']);
      },
      error => console.log(error)
    );
  }
}
