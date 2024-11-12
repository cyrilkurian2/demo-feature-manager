import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FeatureService } from '../../feature.service';
import { Router, RouterLink } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: FeatureService, private router: Router) {
    this.userForm = this.fb.group<IuseForm>({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        //Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        //Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]),
      confrimPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const { fullName, email, password } = this.userForm.value;

      // Create user object for API
      const userData = {
        name: fullName,
        email: email,
        password: password
      };

      // Call addUser method from the UserService
      this.userService.addUser(userData).subscribe({
        next: (response: any) => {
          console.log('User registered successfully:', response);
          alert("User registered successfully");


          this.router.navigate(['user/login']);
        },
        error: (error: any) => {
          console.error('Error during registration:', error);

        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}

interface IuseForm {
  fullName: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confrimPassword: FormControl<string | null>;
}