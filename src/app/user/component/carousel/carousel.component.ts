import { Component, OnInit } from '@angular/core';

 
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  products = [
    {
      name: 'Product 1',
      description: 'Description for product 1',
      image: '/assets/box.png'
    },
    {
      name: 'Product 2',
      description: 'Description for product 2',
      image: '/assets/box.png'
    },
    {
      name: 'Product 3',
      description: 'Description for product 3',
      image: '/assets/box.png'
    },
    {
      name: 'Product 4',
      description: 'Description for product 4',
      image: '/assets/box.png'
    },
    {
      name: 'Product 5',
      description: 'Description for product 5',
      image: '/assets/box.png'
    },
    {
      name: 'Product 1',
      description: 'Description for product 1',
      image: '/assets/box.png'
    },
    {
      name: 'Product 2',
      description: 'Description for product 2',
      image: '/assets/box.png'
    },
    {
      name: 'Product 3',
      description: 'Description for product 3',
      image: '/assets/box.png'
    },
    {
      name: 'Product 4',
      description: 'Description for product 4',
      image: '/assets/box.png'
    },
    {
      name: 'Product 5',
      description: 'Description for product 5',
      image: '/assets/box.png'
    }
  ];

  ngOnInit(): void {}
}
