import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from '../../../dto/product';
import { ProductService } from '../../../services/product.service';




interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  // category dropdown
  categories: City[] | undefined;
  selectedCategory: City | undefined;

  //----upload image  
  imagePreviews: string[] = [];


  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });

    this.categories = [
      { name: 'Foods', code: 'NY' },
      { name: 'Electronic', code: 'RM' },
      { name: 'Other', code: 'LDN' },
    ];
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      this.imagePreviews = files.map(file => URL.createObjectURL(file));
    }
  }

  removeImage(imageUrl: string) {
    this.imagePreviews = this.imagePreviews.filter(image => image !== imageUrl);
  }

  uploadImages() {
    // Implement your upload logic here
    console.log('Upload images:', this.imagePreviews);
  }


}
