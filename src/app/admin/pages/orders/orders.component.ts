import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { GiftBoxService } from '../../../services/gift-box.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  fetchingNewGiftBox: any[] = [];
  fetchingAcceptedGift: any[] = [];
  fetchingDeliveredGift: any[] = [];
  ngOnInit(): void {
    this.items = [
      { label: 'GiftWave' },
      { label: 'Admin' },
      { label: 'Orders' }
    ];
    this.getNewGiftBox();
  }

  constructor(private giftBoxService: GiftBoxService) { }
  getNewGiftBox() {
    this.giftBoxService.getAllGiftBoxNew().subscribe(data => {
      // Assuming data.payload contains the array of users
      this.fetchingNewGiftBox = data.payload;
      console.log(this.fetchingNewGiftBox);
    });


  }
  getAcceptedGift() {
    this.giftBoxService.getAllGiftBoxAccepted().subscribe(data => {
      // Assuming data.payload contains the array of users
      this.fetchingAcceptedGift = data.payload;
    });

  }
  getDeliveredGift() {
    this.giftBoxService.getAllGiftBoxDelivered().subscribe(data => {
      // Assuming data.payload contains the array of users
      this.fetchingDeliveredGift = data.payload;
    });

  }
}
