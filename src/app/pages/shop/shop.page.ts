import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  public produits?: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(`https://fakestoreapi.com/products/category/jewelery`)
      .subscribe(data => {
        // console.log(data)
        this.produits = data;
      }, err => {
        console.log(err)
      })
  }

  addToCart() {
    alert('addToCart');
  }

}
