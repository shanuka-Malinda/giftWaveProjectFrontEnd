import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  ngOnInit(): void {
    this.items = [
      { label: 'GiftWave' }, 
      { label: 'Admin' }, 
      { label: 'Orders' }
  ];
  }
  
}
