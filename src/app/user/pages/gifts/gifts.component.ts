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
    this.categories = [
      { name: 'Foods', code: 'fd' }
    ]
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}
