import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.scss'
})
export class DashComponent implements OnInit{
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;
  ngOnInit() {
    this.items = [
        { label: 'GiftWave' }, 
        { label: 'Admin' }, 
        { label: 'Dashboard' }
    ];

    this.home = { icon: 'pi pi-slack', routerLink: '/admin/dash' };
}
}
