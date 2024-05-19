import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {from} from "rxjs";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public loginForm = this.fb.group({
    username: ['', [
      Validators.required,
      Validators.email]],
    password: ['', [
      Validators.required,
      Validators.minLength(8)
    ]],
  });

  constructor(private authService: AuthenticationService, private fb: FormBuilder) {}

  public login() : void {
    if (this.loginForm.valid){
      this.authService.login(this.userName, this.password)
    }
  }

  private get userName(): string {
    return this.loginForm.get("username")?.value as string;
  }

  private get password(): string {
    return this.loginForm.get("password")?.value as string;
  }
}

