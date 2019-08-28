import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { NavbarMenu } from '../global/constants';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  public sideBarFlag = true;
  public appRoutes: Routes = [];
  public MenuList: any = [];

  constructor(private router: Router) { }


  ngOnInit() {
    this.MenuList = NavbarMenu;
  }

  toggleFunction() {
    this.sideBarFlag = !this.sideBarFlag;
  }

  logout() {
    this.router.navigate(['/Login']);
  }

}
