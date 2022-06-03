import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signinForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.signinForm.invalid) return;
    this.authService.signIn(this.signinForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: (err) => {
        if (!err.status) {
          this.signinForm.setErrors({ noConnection: true });
        } else {
          this.signinForm.setErrors({ invalidLogin: true });
        }
      },
    });
  }

  showErrors() {
    return (
      this.signinForm.get('username')?.touched &&
      this.signinForm.get('password')?.touched &&
      this.signinForm.errors
    );
  }
}
