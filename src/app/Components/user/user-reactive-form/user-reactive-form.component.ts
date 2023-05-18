import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// import { Iuser } from 'src/app/Models/iuser';
function passwordMatcher(
  pass: AbstractControl
): { [key: string]: boolean } | null {
  const passwordControl = pass.get('password');
  const confirmControl = pass.get('confirmPassword');

  if (passwordControl?.pristine || confirmControl?.pristine) {
    return null;
  }

  if (passwordControl?.value === confirmControl?.value) {
    return null;
  }
  return { match: true };
}
@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.scss'],
})
export class UserReactiveFormComponent {
  userForm: FormGroup;
  // user:Iuser={} as Iuser;

  // password matcher
  // set message
  passwordMessage: string = '';
  private validationMessage = {
    required: 'Please enter your password',
    email: 'Please enter valid password',
  };

  constructor(private fb: FormBuilder) {
    // this.userForm=new FormGroup(
    //   {
    //     firstName:new FormControl('',[Validators.required, Validators.minLength(3)]),
    //     lastName:new FormControl('',[Validators.required]),
    //     email:new FormControl('',[Validators.required]),

    //   }
    // );

    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],

         passwordGroup: this.fb.group(
        {
          password: ['', [Validators.required]],
          confirmPassword: ['', Validators.required],
        },
        { validator: passwordMatcher }
      ),
      address: this.fb.array([]),
    });
  }

  get firstName() {
    return this.userForm.get('firstName');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }
  setMessage(pass: AbstractControl): void {
    this.passwordMessage = '';
    if ((pass.touched || pass.dirty) && pass.errors) {
      this.passwordMessage = this.validationMessage.required;
      console.log(this.passwordMessage);
    }
  }

  get address(): FormArray {
    return this.userForm.get('address') as FormArray;
  }
  newAddress(): FormGroup {
    return this.fb.group({
      city: '',
      street: '',
    });
  }
  addAddress() {

    // error here only add () to newAddress
    this.address.push(this.newAddress());
  }
  removeAddress(num: number) {
    this.address.removeAt(num);
    console.log(num);
  }
}
