import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { OurStores } from '../our-stores/our-stores';
import { MyCart } from '../my-cart/my-cart';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  stores(){
    this.navCtrl.setRoot(OurStores, {}, {animate : true, direction : 'forward'})
  }

  openCart(){
    this.navCtrl.setRoot(MyCart, {}, {animate : true, direction : 'forward'})
  }


}
