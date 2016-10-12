import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/Products/products.html'
})
export class ProductsPage {
  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl
  }



}
