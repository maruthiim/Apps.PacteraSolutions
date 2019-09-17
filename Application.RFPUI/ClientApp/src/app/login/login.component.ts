import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public time: number;
  public period: string;
  public loginForm: FormGroup;
  public isValidCredentials = true;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.createLoginForm();
    this.getStatus();
  }

  public getStatus() {
    const currentTime = new Date();
    this.time = currentTime.getHours();
    if (this.time < 12) {
      this.period = 'MORNING';
    } else if (this.time >= 12 && this.time < 16) {
      this.period = 'AFTERNOON';
    } else if (this.time >= 16 && this.time <= 24) {
      this.period = 'EVENING';
    }
  }

  public createLoginForm() {
    return this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.isValidCredentials = true;
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    // Temporary process
    if (username === 'admin' && password === 'password') {
      this.router.navigate(['']);
    } else {
      this.isValidCredentials = false;
    }

    // Main Login Process

    const loginData = new FormData();
    loginData.append('username', username);
    loginData.append('password', password);

    // this.loginService.login(loginData).subscribe((response: any) => {
    //  alert('Login Success !!!!');
    // });

  }

}
