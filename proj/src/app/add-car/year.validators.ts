import {FormControl} from '@angular/forms';

export class YearValidators {
  static restrictedYear(control: FormControl): {[key: string]: boolean} {
    if (control.value != null) {
      const year = control.value.toString().slice(0, 4);
      if (year > 2020 || year < 1900) {
        return {restrictedYear: true};
      }
      return null;
    }
  }
}
