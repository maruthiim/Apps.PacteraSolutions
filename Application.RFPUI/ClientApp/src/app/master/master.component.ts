import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { NavbarMenu } from '../global/constants';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  public sideBarFlag = true;
  public appRoutes: Routes = [];
  public MenuList: any = [];

  constructor(private router: Router, private loginService: LoginService) { }


  ngOnInit() {
    this.MenuList = NavbarMenu;
  }

  toggleFunction() {
    this.sideBarFlag = !this.sideBarFlag;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
