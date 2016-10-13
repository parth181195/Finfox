import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/orders/orders.html'
})
export class OrdersPage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }
}
