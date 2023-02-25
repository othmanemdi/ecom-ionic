import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  ngOnInit() {
  }


  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here

      console.log("Refresh")
      event.target.complete();
    }, 2000);
  };



  constructor() {

  }


}
