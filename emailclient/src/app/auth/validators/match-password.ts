import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  validate(formControl: AbstractControl): ValidationErrors | null {
    const { password, passwordConfirmation } = formControl.value;

    if (password === passwordConfirmation) {
      return null;
    }
    return {
      passwordsDontMatch: true,
    };
  }
}
