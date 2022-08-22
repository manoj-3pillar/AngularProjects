import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export default class CustomValidation {

  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (checkControl?.errors && !checkControl.errors['notMatching']) {
        return null;
      }
      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ notMatching: true });
        return { notMatching: true };
      } else {
        return null;
      }
    };
  }

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      console.log('username in validator (cannotContainSpace)', control.value);
      const valError: ValidationErrors = { cannotContainSpace: true };
      return { cannotContainSpace: true };
    }
    return null;
  }
}
