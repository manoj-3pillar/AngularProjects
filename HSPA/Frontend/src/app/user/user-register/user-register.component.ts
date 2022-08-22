import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import CustomValidation from 'src/app/shared/utilities/customValidation';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;

  submitted = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    // this.registerationForm = new FormGroup(
    //   {
    //     fullname: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    //     email: new FormControl('', [Validators.required, Validators.email]),
    //     mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    //     password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    //     confirmPassword: new FormControl('', Validators.required)
    //   },
    //   {
    //     validators: [CustomValidation.match('password', 'confirmPassword')]
    //   }
    // );
    this.createRegistrationForm();
  }

  createRegistrationForm()
  {
    this.registerationForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      confirmPassword: ['', Validators.required]
    },
    {
      validators: [CustomValidation.match('password', 'confirmPassword')]
    });
  }

  onSubmit(){
    //debugger;
    console.log(this.registerationForm);
    this.submitted = true;
    if (this.registerationForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.registerationForm.value, null, 2));
  }
  onReset(){
    this.submitted = false;
    this.registerationForm.reset();
  }

  // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------

  get fullname() {
    return this.registerationForm.get('fullname') as FormControl;
  }
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }
  // ------------------------
}
