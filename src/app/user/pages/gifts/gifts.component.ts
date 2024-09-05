import { Component, OnInit } from '@angular/core';
import { GiftItemsService } from '../../../services/gift-items.service';
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

  //GiftBox
  giftBoxItems:number[]=[];
  giftBoxItemsDetails:any[]=[];
  giftboxCount:number=0;

  categories: any[] | undefined;
  selectedCategories: string | any;

  constructor(private giftItemsService: GiftItemsService) {
    this.categories = [
      { name: 'Foods', code: 'fd' }
    ]
  }
  ngOnInit(): void {
    console.log("hello");
    this.fetchAllItems();
    
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
    
  }


  toggleDescription(item: any) {
    item.showFullDescription = !item.showFullDescription;
  }

  addToGiftBox(id:number){
   this.giftBoxItems.push(id);
   this.giftboxCount=this.giftBoxItems.length;
  }
  getGiftBoxItems():void{
    console.log("ffff"+this.giftBoxItems);
    this.giftItemsService.getAllGiftBoxItems(this.giftBoxItems).subscribe((data:any)=>{
      if (data.status) {
        this.giftBoxItemsDetails = data.payload.map((item: any) => ({
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
 
      // this.giftBoxItemsDetails = data.payload.map((item: any) => ({
      //   ...item,
      //   image: item.image ? 'data:image/png;base64,' + item.image : '' // Convert base64 to image URL
      // }));
    });
   // console.log("GiftBox"+this.giftBoxItemsDetails);
   // console.log("Working");
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





}





