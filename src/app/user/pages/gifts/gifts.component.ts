import { Component, OnInit } from '@angular/core';
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

  categories: any[] | undefined;
  selectedCategories: string | any;

  constructor() {
    this.giftBox = [
      { name: 'Australia', code: 'AU' }
      // { name: 'Brazil', code: 'BR' },
      // { name: 'China', code: 'CN' },
      // { name: 'Egypt', code: 'EG' },
      // { name: 'France', code: 'FR' },
      // { name: 'Germany', code: 'DE' },
      // { name: 'India', code: 'IN' },
      // { name: 'Japan', code: 'JP' },
      // { name: 'Spain', code: 'ES' },
      // { name: 'United States', code: 'US' }
    ];
    this.categories = [
      { name: 'Foods', code: 'fd' }
    ]
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
