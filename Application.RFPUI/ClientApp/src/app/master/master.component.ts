import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { NavbarMenu } from '../global/constants';
import { LoginService } from '../login/login.service';
import { childRoutes } from '../routes/routes';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  public sideMenu = true;
  public appRoutes: Routes = [];
  public MenuList: any = [];
  public userNmae: any;
  public role: any;

  constructor(private router: Router, private loginService: LoginService) { }


  ngOnInit() {
    //this.MenuList = NavbarMenu;
    const user = this.loginService.getSessionStorage('userName');
    this.userNmae = user.split('@', 1);
    this.role = this.loginService.getSessionStorage('role');
    this.MenuList = this.getMenuList();
  }

  getMenuList() {
    var routes = childRoutes.filter(list => list.data.menu === true && list.data.users.filter((user) => {
      return (user === 'All' || user === this.role)
    }).length > 0);

    return routes;
  }

  toggleFunction() {
    this.sideMenu = !this.sideMenu;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
