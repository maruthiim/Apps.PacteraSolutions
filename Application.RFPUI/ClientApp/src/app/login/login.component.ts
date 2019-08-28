import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public time: number;
  public period: string;
  public loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getStatus();
    this.loginForm = this.createLoginForm();
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
    return new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    this.router.navigate(['']);
  }

}
