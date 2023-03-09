import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  test(a: number) {
    alert(a)
  }

  minus() {
    alert('minus');
  }
  plus() {
    alert('plus');
  }
  delete() {
    alert('delete');
  }

  confirmOrder() {
    alert('confirmOrder');
  }

}
