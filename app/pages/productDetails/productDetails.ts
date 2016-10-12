import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/productDetails/productDetails.html'
})
export class ProductDetails {
  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl
  }



}
