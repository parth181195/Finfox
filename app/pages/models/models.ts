import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/models/models.html'
})
export class Modelspage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }
}
