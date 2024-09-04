import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [
          { label: 'GiftWave' }, 
          { label: 'Admin' }, 
          { label: 'User' }
      ];
    
      this.home = { icon: 'pi pi-slack', routerLink: '/admin/dash' };
      console.log("shanuka")
  }
  
}
