import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  public orders?: any = [{ 'id': 1 }, { 'id': 2 }, { 'id': 3 }];

  constructor() { }

  ngOnInit() {
  }

}
