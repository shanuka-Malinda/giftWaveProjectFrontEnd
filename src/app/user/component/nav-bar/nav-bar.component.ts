import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  menuActive: boolean = false;
  username: string = "user";
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: this.username,
        items: [
          {
            label: 'Login',
            icon: 'pi pi-sign-in',
            routerLink: '/login'
          },
          {
            label: 'Register',
            icon: 'pi pi-user-plus',
            routerLink: '/register'
          }
        ]
      }
    ];
  }


}
