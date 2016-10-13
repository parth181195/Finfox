import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/productDetails/productDetails.html'
})
export class ProductDetails {
  constructor(public navCtrl: NavController, params: NavParams) {
    this.navCtrl = navCtrl;
    console.log(params);
  }



}
