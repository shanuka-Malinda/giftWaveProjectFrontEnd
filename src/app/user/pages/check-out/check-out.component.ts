import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GiftItemsService } from '../../../services/gift-items.service';
import { SharedDataService } from '../../../services/shared-data.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent implements OnInit {
  giftBoxitems: any[] = [];
  receivedData: any;
  id: any;
  giftboxCount: number = 0;
  totalPrice: any;

  //------image-priview--------
  showModal: boolean = false;
  previewImage: string = '';
  constructor(
    private router: Router,
    private sharedDataService: SharedDataService,
    private giftItemsService: GiftItemsService,
  ) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.id = localStorage.getItem('id');
    }
    this.receivedData = this.sharedDataService.getData();
    this.giftboxCount = this.receivedData.length || 0;
    console.log(this.receivedData);
    if (this.receivedData != null) {
      this.getGiftBoxItems();
    }
    this.checkOut();
    this.getTotalPrice();
  }
  // Method to open the image preview modal
  openImagePreview(image: string) {
    this.previewImage = image;
    this.showModal = true;
  }

  // Method to close the modal
  closeModal() {
    this.showModal = false;
  }
  getGiftBoxItems(): void { //Get GiftBox items details
    //console.log("ffff" + this.giftBoxItems);
    this.giftItemsService.getAllGiftBoxItems(this.receivedData).subscribe((data: any) => {
      if (data.status) {
        this.giftBoxitems = data.payload[0].map((item: any) => ({
          ...item,
          image: item.image ? 'data:image/png;base64,' + item.image : ''
        }));
        // this.giftBoxItemsDetails = data.payload[0];
        console.log(this.giftBoxitems);

        const totalPrice = this.giftBoxitems.reduce((acc, item) => acc + parseFloat(item.unitPrice), 0);
        console.log(totalPrice);  // Outputs the total price of all products
        this.totalPrice=totalPrice;
      } else {
        console.error(data.errorMessages);
      }

    },
      (error) => {
        console.error('Error fetching items:', error);
      });

  }


  removeItemFromArray(item: number): void {
    const index = this.receivedData.indexOf(item);

    if (index !== -1) {
      // Item exists in the array, so remove it
      this.receivedData.splice(index, 1);
      this.getGiftBoxItems();
      this.giftboxCount = this.receivedData.length;
      console.log(`Item ${item} removed. Updated array:`, this.receivedData);
    } else {
      console.log(`Item ${item} not found in the array.`);
    }
  }

  getTotalPrice(){
    // const allIds = this.giftBoxitems.map(item => item.id);
    // console.log("MMMMMMMMMMMMMMMM"+allIds);
  }

  checkOut() {
    const today = new Date();
    const item = {
      giftName: "",
      SendingDate: "",
      commonStatus: "ACTIVE",
      itemIds: this.receivedData,
      userId: this.id
    }
    console.log(item);
    console.log(today);
  }

}
