import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OurStores } from './../ourStores/ourStores';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl
  }

  stores(){
    this.navCtrl.setRoot(OurStores, {}, {animate: true, direction: 'forward'})
  }
}
