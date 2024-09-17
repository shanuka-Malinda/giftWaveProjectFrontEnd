import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { GiftItemsService } from '../../../services/gift-items.service';
import { SharedDataService } from '../../../services/shared-data.service';
interface Country {
  name: string;
  code: string;
}
@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.scss'
})
export class GiftsComponent implements OnInit {
  giftBox!: Country[];
  selectedGifts!: Country[];

  fetchingItems: any[] = [];
  visible: boolean = false;
  //GiftBox
  giftBoxItems: number[] = [];
  giftBoxItemsDetails: any[] = [];
  giftboxCount: number = 0;

  categories: any[] | undefined;
  selectedCategories: string | any;

  //user detils


  constructor(
    private giftItemsService: GiftItemsService,
    private messageService: MessageService,
    private sharedDataService: SharedDataService,
    private router: Router,
  ) {
    this.categories = [
      { name: 'Foods', code: 'fd' }
    ]
  }

  ngOnInit(): void {
    this.fetchAllItems();

  }




  sendArray() {
    localStorage.setItem('item', JSON.stringify(this.giftBoxItems));
    this.sharedDataService.setData(this.giftBoxItems)
    this.router.navigate(['/check-out']);
  }
  showDialog() {
    this.visible = true;
  }


  toggleDescription(item: any) {
    item.showFullDescription = !item.showFullDescription;
  }

  addToGiftBox(id: number) {  //Add items for giftBox
    if (!this.giftBoxItems.includes(id)) {
      this.giftBoxItems.push(id);
      this.giftboxCount = this.giftBoxItems.length;
      this.clearMsg();
      this.giftAddedMsg();
      console.log(`Item ${id} added. Total items: ${this.giftboxCount}`);
    } else {
      this.giftAlreadyAddedMsg();
    }
  }

  removeItemFromArray(item: number): void {
    const index = this.giftBoxItems.indexOf(item);

    if (index !== -1) {
      // Item exists in the array, so remove it
      this.giftBoxItems.splice(index, 1);
      this.getGiftBoxItems();
      this.giftboxCount = this.giftBoxItems.length;
      console.log(`Item ${item} removed. Updated array:`, this.giftBoxItems);
    } else {
      console.log(`Item ${item} not found in the array.`);
    }
  }
  getGiftBoxItems(): void { //Get GiftBox items details
    //console.log("ffff" + this.giftBoxItems);
    if (this.giftBoxItems.length == 0) {
      this.emptyGiftBoxMsg();
      //this.clearMsg();
    } else {
      this.giftItemsService.getAllGiftBoxItems(this.giftBoxItems).subscribe((data: any) => {
        if (data.status) {
          this.giftBoxItemsDetails = data.payload[0].map((item: any) => ({
            ...item,
            image: item.image ? 'data:image/png;base64,' + item.image : ''
          }));
          // this.giftBoxItemsDetails = data.payload[0];
          console.log(this.giftBoxItemsDetails);
        } else {
          console.error(data.errorMessages);
        }
      },
        (error) => {
          console.error('Error fetching items:', error);
        });

      this.showDialog();
    }
  }

  fetchAllItems(): void {
    this.giftItemsService.getAllGiftItems().subscribe(data => {
      if (!data || !data.payload) {
        console.error('Invalid data format:', data);
        return;
      }

      // Map and convert base64 image
      const items = data.payload.map((item: any) => ({
        ...item,
        image: item.image ? 'data:image/png;base64,' + item.image : ''
      }));

      // Randomize the items
      this.fetchingItems = this.getRandomizedItems(items);
    });
  }

  getRandomizedItems(items: any[]): any[] {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }

  clearMsg() {
    this.messageService.clear();
  }
  giftAlreadyAddedMsg() {
    this.messageService.add({ severity: 'info', summary: 'info', detail: 'This item is already added in gift box!' });
  }

  giftAddedMsg() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Item successfully added to gift Box!' });
  }
  emptyGiftBoxMsg() {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'GiftBox is empty!' });
  }
}





