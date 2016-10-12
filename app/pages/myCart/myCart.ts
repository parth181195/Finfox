import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/myCart/myCart.html'
})
export class MyCart {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }
}
